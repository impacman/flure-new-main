import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useParallax = (data) => {
  const { section, el, transform, start, end, pos } = data;

  useEffect(() => {
    if (!section) return;

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: start ? start : "top",
        end: end ? end : "bottom",
        scrub: true,
        markers: false,
      },
    });

    animation.to(el.current, { [pos]: transform });

    return () => animation.kill();
  }, []);
};
