import { useRef } from "react";
import "./styles.scss";

import Cloud from "../Cloud";

const CommunityClouds = ({}) => {
  const cloudsRef = useRef(null);

  return (
    <div ref={cloudsRef} className="clouds clouds--descr">
      <Cloud
        cloudClass={"cloud"}
        mod={"1"}
        color={"pink"}
        w={{ d: 1111, m: 423 }}
        h={{ d: 240, m: 92 }}
        section={cloudsRef}
        transform={-200}
      />
    </div>
  );
};

export default CommunityClouds;
