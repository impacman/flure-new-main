import "./styles.scss";
import { useMatchMedia } from "../../hooks/useMatchMedia";

import Cloud from "../Cloud";

const HelloClouds = ({}) => {
  const { isMobile } = useMatchMedia();

  return !isMobile ? (
    <div className="clouds clouds--hello">
      <Cloud
        cloudClass={"cloud"}
        mod={"1"}
        color={"pink"}
        w={{ d: 732, m: 0 }}
        h={{ d: 189, m: 0 }}
      />
      <Cloud
        cloudClass={"cloud"}
        mod={"2"}
        color={"pink"}
        w={{ d: 733, m: 0 }}
        h={{ d: 158, m: 0 }}
      />
    </div>
  ) : null;
};

export default HelloClouds;
