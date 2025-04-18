import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollSmooth = ({ active = true }) => {
  const [pageHeight, setPageHeight] = useState(0);
  const lenisRef = useRef(null);

  const activeDownloadApp = () => {
    const downloadApp = document.querySelector("[data-download-app]");
    if (!downloadApp) return;

    lenisRef.current.on("scroll", ({ targetScroll }) => {
      targetScroll > 100
        ? downloadApp.classList.add("min-download")
        : downloadApp.classList.remove("min-download");

      targetScroll > pageHeight
        ? downloadApp.classList.add("min-download-transform")
        : downloadApp.classList.remove("min-download-transform");
    });
  };

  const activeScrollBtn = (defaultScroll = false, page = null) => {
    const scrollBtns = document.querySelectorAll("[data-scroll-btn]");
    if (!scrollBtns.length) return;

    scrollBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (defaultScroll && page) {
          page.scrollTop = 0;

          return;
        }

        const position = btn.dataset.scrollBtn;
        const target = btn.dataset.scrollTarget;

        position === "bottom" && lenisRef.current.scrollTo(document.body);
        position === "top" &&
          lenisRef.current.scrollTo(document.querySelector(`.${target}`));
      });
    });
  };

  const activeScrollSmooth = () => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.5,
        smoothWheel: true,
        smoothTouch: true,
        touchMultiplier: 2.5,
        touchInertiaMultiplier: 0,
        wheelMultiplier: 1,
      });

      const raf = (time) => {
        lenisRef.current.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }

    setTimeout(() => {
      activeDownloadApp();
      activeScrollBtn();
    }, 500);
  };

  useEffect(() => {
    const main = document.querySelector("main");
    const preloader = document.querySelector("[data-preloader]");
    if (!main && !preloader) return;

    setPageHeight(document.body.clientHeight - window.innerHeight - 50);

    const handleLoad = () => {
      setTimeout(() => {
        preloader.classList.add("hide");
        setTimeout(() => preloader.remove(), 700);

        if (!active) {
          main.classList.add("scroll-fixed");

          activeScrollBtn(true, main);
        } else activeScrollSmooth();
      }, 300);
    };

    document.readyState === "complete"
      ? handleLoad()
      : window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [active]);

  return null;
};

export default ScrollSmooth;
