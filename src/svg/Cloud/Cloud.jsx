import { useRef } from "react";
import { useParallax } from "../../hooks/useParallax";
import data from "./data.json";

import SvgAnimation from "../../components/SvgAnimation";

const Cloud = ({ w, h, cloudClass, mod, color, section, transform }) => {
  const cloudRef = useRef(null);
  const space = " ";

  const settings = {
    cloudClass: cloudClass ? cloudClass : "cloud",
    mod: mod ? `${space}${cloudClass}--${mod}` : "",
    color: color ? `${space}${cloudClass}--${color}` : "white",
    wd: w?.d ? w.d : 0,
    wm: w?.m ? w.m : 0,
    hd: h?.d ? h.d : 0,
    hm: h?.m ? h.m : 0,
  };

  useParallax({
    section: section,
    el: cloudRef,
    transform: transform,
    pos: "y",
  });

  return (
    <div
      ref={cloudRef}
      style={{
        "--wd": settings.wd,
        "--wm": settings.wm,
        "--hd": settings.hd,
        "--hm": settings.hm,
      }}
      className={`${settings.cloudClass}${settings.mod}${settings.color}`}
    >
      <SvgAnimation data={data} lottieClass={`${settings.cloudClass}__wrap`} />
    </div>
  );
};

export default Cloud;
