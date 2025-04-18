import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDataLayer } from "../../../hooks/useDataLayer";

import Women from "../Women";

import { resultText } from "./data";

const Result = ({ result }) => {
  const [users, setuUsers] = useState(0);
  const [text, setText] = useState(0);

  useEffect(() => setuUsers(Math.floor(Math.random() * 201) + 510), []);

  useEffect(() => setText(Math.floor(Math.random() * resultText.length)), []);

  const handleClick = (evt, id) => {
    evt.preventDefault();

    const userAgent = navigator.userAgent.toLowerCase();
    let store = "";

    if (/android/.test(userAgent)) store = "google_play";
    else if (/iphone|ipad|ipod/.test(userAgent)) store = "app_store";

    useDataLayer(
      {
        afid: null,
        type_of_button: id,
        store: store,
        event: "click_join_flure_app",
      },
      evt.target.href,
    );
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
      className="chat__result"
    >
      <p className="chat__result-title">{result}</p>
      <p className="chat__result-text">
        {text ? resultText[text] : resultText[0]}
      </p>
      <div className="chat__result-wrap">
        <Women />
        <motion.a
          whileTap={{
            color: "var(--mauve)",
          }}
          className="chat__result-link"
          href="https://flure.onelink.me/TEKB/qqai07fb"
          onClick={(evt) => handleClick(evt, "result_link")}
        >
          Start Flirting via Flure App Now!
        </motion.a>
        <p className="chat__result-text">
          Ready to make those steamy scenarios a reality?
        </p>
        <p className="chat__result-text">
          Flure App has <span>{users} users</span>
          <br /> who chose the same answers as you! They are dying to connect
          with you.
        </p>
      </div>
      <div className="chat__result-wrap-btn">
        <motion.a
          whileTap={{
            scale: 0.95,
            backgroundColor: "var(--pink)",
          }}
          className="chat__result-btn"
          href="https://flure.onelink.me/TEKB/qqai07fb"
          onClick={(evt) => handleClick(evt, "result_button")}
        >
          <span>Join Flure App</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Result;
