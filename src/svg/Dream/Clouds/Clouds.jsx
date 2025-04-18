import { useMatchMedia } from "../../../hooks/useMatchMedia";
import Cloud from "../../Cloud";

const Clouds = () => {
  const { isMobile } = useMatchMedia();

  return !isMobile ? (
    <>
      <Cloud
        cloudClass={"cloud"}
        mod={"1"}
        color={"pink"}
        w={{ d: 822, m: 0 }}
        h={{ d: 178, m: 0 }}
      />
      <Cloud
        cloudClass={"cloud"}
        mod={"2"}
        color={"pink"}
        w={{ d: 1624, m: 0 }}
        h={{ d: 350, m: 0 }}
      />
      <Cloud
        cloudClass={"cloud"}
        mod={"3"}
        color={"pink"}
        w={{ d: 1624, m: 0 }}
        h={{ d: 350, m: 0 }}
      />
      <Cloud
        cloudClass={"cloud"}
        mod={"4"}
        color={"pink"}
        w={{ d: 822, m: 0 }}
        h={{ d: 178, m: 0 }}
      />
    </>
  ) : (
    <>
      <Cloud
        cloudClass={"cloud"}
        mod={"1"}
        color={"mauve"}
        w={{ d: 0, m: 617 }}
        h={{ d: 0, m: 134 }}
      />
      <Cloud
        cloudClass={"cloud"}
        mod={"2"}
        color={"mauve"}
        w={{ d: 0, m: 884 }}
        h={{ d: 0, m: 191 }}
      />
    </>
  );
};

export default Clouds;
