import { motion } from "framer-motion";
import "./styles.scss";

const Letters = ({}) => {
  const dragPosition = 500;

  return (
    <>
      <motion.div
        drag
        whileTap={{
          cursor: "grabbing",
        }}
        dragConstraints={{
          top: -dragPosition,
          left: -dragPosition,
          right: dragPosition,
          bottom: dragPosition,
        }}
        className="letter letter--1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="292"
          height="225"
          viewBox="0 0 292 225"
          fill="none"
        >
          <path
            d="M0.469516 95.1884L218.45 0.442516L290.622 117.921L61.5018 223.63L0.469516 95.1884Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M218.591 0L291.129 118.073L61.3361 224.092L0 95.0113L218.591 0ZM217.612 1.18892L1.49814 95.1234L139.41 135.425L217.612 1.18892ZM1.12266 95.743L61.6713 223.166L290.12 117.768L218.46 1.12373L139.739 136.25L1.12266 95.743Z"
            fill="black"
          />
        </svg>
      </motion.div>
      <motion.div
        drag
        whileTap={{
          cursor: "grabbing",
        }}
        dragConstraints={{
          top: -dragPosition,
          left: -dragPosition,
          right: dragPosition,
          bottom: dragPosition,
        }}
        className="letter letter--2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="266"
          height="233"
          viewBox="0 0 266 233"
          fill="none"
        >
          <path
            d="M264.818 129.836L89.141 0.462012L0.525906 90.8231L183.929 232.286L264.818 129.836Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M89.1038 0L0 90.8594L183.989 232.774L265.317 129.769L89.1038 0ZM89.7935 1.37726L263.832 129.544L132.28 137.39L89.7935 1.37726ZM264.059 130.232L183.869 231.797L1.0518 90.7867L88.9813 1.12471L131.775 138.121L264.059 130.232Z"
            fill="black"
          />
        </svg>
      </motion.div>
      <motion.div
        drag
        whileTap={{
          cursor: "grabbing",
        }}
        dragConstraints={{
          top: -dragPosition,
          left: -dragPosition,
          right: dragPosition,
          bottom: dragPosition,
        }}
        className="letter letter--3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="330"
          height="254"
          viewBox="0 0 330 254"
          fill="none"
        >
          <path
            d="M0.709535 107.823L247.115 0.721454L328.7 133.52L69.7007 253.013L0.709535 107.823Z"
            fill="white"
          />
          <path
            d="M247.115 0.721454L0.709532 107.823M247.115 0.721454L328.7 133.52L69.7007 253.013L0.709532 107.823M247.115 0.721454L157.952 153.773L0.709532 107.823"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default Letters;
