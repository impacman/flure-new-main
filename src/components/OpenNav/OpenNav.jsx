import "./styles.scss";

import { motion } from "framer-motion";

const OpenNav = ({ toggle, isOpen }) => (
  <motion.button
    onClick={toggle}
    className={`open-nav${isOpen ? " active" : ""}`}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.8 }}
  >
    <span></span>
    <span></span>
  </motion.button>
);

export default OpenNav;
