import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./styles.scss";
import { questions } from "./data";

import Result from "./Result";

const getRandomResult = () => {
  const results = [
    "Lustful Lover",
    "Passion Igniter",
    "Erotic Oracle",
    "Sultry Lover",
    "Flame Igniter",
    "Passion Pioneer",
  ];

  const randomIndex = Math.floor(Math.random() * results.length);
  return results[randomIndex];
};

const Chat = ({ settingsProgress, isResult, setIsResult }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [chatHistory, setChatHistory] = useState([]);
  const [result, setResult] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const refHistory = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowQuestion(true);

      setTimeout(() => setShowAnswer(true), 400);
    }, 400);
  }, [currentStep]);

  const handleAnswer = (answer) => {
    refHistory.current.scrollTop = 0;

    if (currentStep === questions.length - 1) {
      setResult(getRandomResult());
      setIsResult(true);
      settingsProgress.setProgress(100);
      settingsProgress.setColorProgress("mauve");
      setTimeout(() => settingsProgress.setHideProgress(true), 500);

      return;
    }

    const currentQuestion = questions[currentStep].message;
    const questionAndAnswer = {
      question: currentQuestion,
      answer: answer,
    };

    setChatHistory([...chatHistory, questionAndAnswer]);

    if (currentStep < questions.length - 1) {
      setShowQuestion(false);
      setShowAnswer(false);
      settingsProgress.setProgress(
        ((currentStep + 1) / questions.length) * 100,
      );
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 500);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="chat"
    >
      <AnimatePresence initial={false}>
        {isResult ? (
          <Result result={result} />
        ) : (
          <div className="chat__wrap">
            <div ref={refHistory} className="chat__history">
              <AnimatePresence initial={false}>
                <div className="chat__history-inner">
                  {chatHistory.map((entry, index) => (
                    <div
                      key={index}
                      className="chat__history-wrap"
                      style={{
                        "--vibr": `${(questions.length - index - 1) / 10}s`,
                      }}
                    >
                      <div className="chat__history-el chat__history-el--question">
                        {entry.question}
                      </div>
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: "100%",
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: "100%",
                        }}
                        className="chat__history-el chat__history-el--answer"
                      >
                        {entry.answer}
                      </motion.div>
                    </div>
                  ))}
                  <div className="chat__question">
                    {showQuestion ? (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: "-100%",
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: "-100%",
                        }}
                        className="chat__history-el chat__history-el--question"
                      >
                        {questions[currentStep].message}
                      </motion.div>
                    ) : (
                      <div className="chat__question-typing">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatePresence>
            </div>
            <div className="chat__answers">
              <AnimatePresence initial={false}>
                {showAnswer && (
                  <>
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="chat__answers-title"
                    >
                      Choose one
                    </motion.div>
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="chat__answers-wrap"
                    >
                      {questions[currentStep].options.map((option, index) => (
                        <motion.button
                          whileTap={{
                            scale: 0.95,
                            backgroundColor: "var(--pink)",
                          }}
                          key={index}
                          className="chat__answers-btn"
                          onClick={() => handleAnswer(option)}
                        >
                          <span>{option}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Chat;
