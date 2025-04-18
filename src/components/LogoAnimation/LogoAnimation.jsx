import { motion } from "framer-motion";
import data from "./data.json";
import SvgAnimation from "../SvgAnimation";

const LogoAnimation = () => (
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
    transition={{
      duration: 0.3,
    }}
  >
    <SvgAnimation data={data} lottieClass={"logo-preloader"} />
  </motion.div>
);

export default LogoAnimation;
