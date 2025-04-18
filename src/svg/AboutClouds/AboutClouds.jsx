import { useRef } from "react";
import "./styles.scss";

import Cloud from "../Cloud";

const AboutClouds = ({}) => {
  const cloudsRef = useRef(null);

  return (
    <div ref={cloudsRef} className="clouds clouds--about">
      <Cloud
        cloudClass={"cloud"}
        mod={"1"}
        color={"pink"}
        w={{ d: 733, m: 423 }}
        h={{ d: 158, m: 92 }}
        section={cloudsRef}
        transform={100}
      />
      <Cloud
        cloudClass={"cloud"}
        mod={"2"}
        color={"pink"}
        w={{ d: 923, m: 423 }}
        h={{ d: 199, m: 92 }}
        section={cloudsRef}
        transform={200}
      />
      <Cloud
        cloudClass={"cloud"}
        mod={"3"}
        color={"pink"}
        w={{ d: 733, m: 423 }}
        h={{ d: 158, m: 92 }}
        section={cloudsRef}
        transform={300}
      />
      <Cloud
        cloudClass={"cloud"}
        mod={"4"}
        color={"pink"}
        w={{ d: 763, m: 423 }}
        h={{ d: 165, m: 92 }}
        section={cloudsRef}
        transform={400}
      />
    </div>
  );
};

export default AboutClouds;
