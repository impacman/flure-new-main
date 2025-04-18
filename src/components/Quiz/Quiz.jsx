import { useMatchMedia } from "../../hooks/useMatchMedia";

import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Quiz = () => {
  const { isMobile } = useMatchMedia();

  return !isMobile ? <Desktop /> : <Mobile />;
};

export default Quiz;
