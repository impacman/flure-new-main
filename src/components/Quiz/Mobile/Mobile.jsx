import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useDataLayer } from "../../../hooks/useDataLayer";
import "./styles.scss";

import Logo from "../../Logo";
import Chat from "../Chat";
import Balloon from "../Balloon";
import Bg from "../Bg";

const Descr = ({ text, color }) => (
  <p
    className={`quiz__descr${color ? ` quiz__descr--${color}` : ""}`}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

const Btn = ({ btn, openChat }) => {
  const handleClick = () => {
    useDataLayer({
      afid: null,
      type_of_button: btn.class,
      event: "click_ready_to_play",
    });

    openChat();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{
        scale: 0.95,
        backgroundColor: `var(--${btn.color})`,
        color: `var(--${btn.textColor})`,
      }}
      className={`quiz__link${btn.class ? ` quiz__link--${btn.class}` : ""}`}
    >
      {btn.text}
    </motion.button>
  );
};

const Mobile = () => {
  const [openChat, setOpenChat] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hideProgress, setHideProgress] = useState(true);
  const [colorProgress, setColorProgress] = useState("pink");
  const [scrollDown, setScrollDown] = useState(false);

  const activeChat = () => {
    setOpenChat(true);
    setHideProgress(false);
  };

  const handleScrollToBottom = () => setScrollDown(true);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main || !scrollDown) return;

    main.scrollTop = main.scrollHeight;

    main.addEventListener("scroll", () => {
      if (main.scrollTop !== main.scrollHeight) {
        setScrollDown(false);
      }
    });

    return () => {
      main.removeEventListener("scroll", () => (main.scrollTop = 0));
    };
  }, [scrollDown]);

  useEffect(() => {
    if (!isResult) return;

    const classes = document.body.className;
    document.body.className = "mauve scroll";

    return () => {
      document.body.className = classes;
    };
  }, [isResult]);

  return (
    <div className="quiz">
      <div className="quiz__head">
        <Logo
          href={"https://flure.onelink.me/TEKB/qqai07fb"}
          bodyColor={!isResult ? "black" : "white"}
          dataLayer
        />
        <AnimatePresence initial={false}>
          {!hideProgress && (
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
              className="chat__progress"
            >
              <span
                className="chat__progress-el"
                style={{
                  width: `${progress}%`,
                  backgroundColor: `var(--${colorProgress})`,
                }}
              ></span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false}>
        {openChat ? (
          <Chat
            settingsProgress={{
              progress,
              setProgress,
              hideProgress,
              setHideProgress,
              colorProgress,
              setColorProgress,
            }}
            isResult={isResult}
            setIsResult={setIsResult}
          />
        ) : (
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
            className="quiz__content"
          >
            <Balloon />
            <Bg />
            <motion.button
              onClick={handleScrollToBottom}
              className="quiz__arrow-down"
              whileTap={{
                scale: 0.95,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="27"
                viewBox="0 0 25 27"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2114 0.767578C12.4875 0.767578 12.7114 0.991436 12.7114 1.26758V24.9036C12.9267 24.6331 13.1483 24.2335 13.3935 23.7115C13.5907 23.2916 13.7916 22.8184 14.0111 22.3013C14.0732 22.1551 14.1367 22.0053 14.2021 21.8523C14.4961 21.1641 14.8225 20.4207 15.2007 19.6747C16.7101 16.6971 19.1125 13.5549 23.8251 13.5549C24.1012 13.5549 24.3251 13.7788 24.3251 14.0549C24.3251 14.3311 24.1012 14.5549 23.8251 14.5549C19.6912 14.5549 17.5479 17.256 16.0926 20.1268C15.7297 20.8428 15.4137 21.5619 15.1217 22.2452C15.0591 22.3917 14.9973 22.5372 14.9363 22.6809C14.7155 23.2012 14.5047 23.6979 14.2986 24.1366C14.0375 24.6926 13.7648 25.1988 13.4573 25.5713C13.1509 25.9425 12.7453 26.2576 12.2154 26.2619L12.2073 26.262C11.6837 26.2577 11.2725 25.9459 10.9558 25.5805C10.6356 25.2111 10.3426 24.7079 10.0585 24.1514C9.81926 23.6828 9.5732 23.1494 9.31521 22.5901C9.26468 22.4805 9.2137 22.37 9.16222 22.2588C8.84546 21.5744 8.50564 20.8539 8.12292 20.136C6.58151 17.2445 4.43044 14.5549 0.597656 14.5549C0.321514 14.5549 0.0976562 14.3311 0.0976562 14.0549C0.0976562 13.7788 0.321514 13.5549 0.597656 13.5549C5.0226 13.5549 7.42903 16.7086 9.00536 19.6655C9.40207 20.4097 9.75169 21.1516 10.0697 21.8387C10.1227 21.9531 10.1746 22.0657 10.2257 22.1764C10.4838 22.736 10.7198 23.2475 10.9491 23.6967C11.2258 24.2387 11.4742 24.6518 11.7114 24.9254V1.26758C11.7114 0.991436 11.9352 0.767578 12.2114 0.767578Z"
                  fill="var(--white)"
                />
              </svg>
            </motion.button>
            <div className="quiz__wrap">
              <h1 className="quiz__title quiz__title--h1">
                How<br></br> Playful<br></br> Are You?
              </h1>
              <Descr text={"Test Drive Your Seggsting Style!"} />
              <Btn
                btn={{
                  link: "#",
                  text: "Ready to play",
                  class: "main",
                  color: "pink",
                  textColor: "white",
                }}
                openChat={() => activeChat()}
              />
              <Descr
                color={"black"}
                text={
                  "At Flure, we understand the importance of embracing your fantasies and connecting with like-minded individuals. Take this <b>seggsting quiz</b> and have a sneak peek into what Flure App has in store for you!"
                }
              />
              <h2 className="quiz__title quiz__title--h2">
                Hey there, ready<br></br> to play a steamy<br></br> game?
              </h2>
              <Btn
                btn={{
                  link: "#",
                  text: "Absolutely",
                  class: "min",
                  color: "pink",
                  textColor: "black",
                }}
                openChat={() => activeChat()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
