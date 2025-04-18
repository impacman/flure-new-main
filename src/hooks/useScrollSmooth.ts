import Lenis from "@studio-freight/lenis";

const activeScroll = () => {
  const pageHeight = document.body.clientHeight - window.innerHeight - 50;

  const lenis = new Lenis({
    duration: 1.5,
    smoothWheel: true,
    smoothTouch: true,
    touchMultiplier: 2.5,
    touchInertiaMultiplier: 0,
    wheelMultiplier: 1,
  });

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  lenis.on("scroll", ({ targetScroll }: Lenis) => {
    targetScroll > 100
      ? document.body.classList.add("min-download")
      : document.body.classList.remove("min-download");

    targetScroll > pageHeight
      ? document.body.classList.add("min-download-transform")
      : document.body.classList.remove("min-download-transform");
  });

  setTimeout(() => activeScrollBtn(lenis), 500);
};

const activeScrollBtn = (lenis: Lenis) => {
  const scrollBtns: NodeListOf<HTMLAreaElement> =
    document.querySelectorAll("[data-scroll-btn]");
  if (!scrollBtns.length) return;
};

export const useScrollSmooth = ({
  onlyLoad = false,
}: { onlyLoad?: boolean } = {}) => {
  const preloader = document.querySelector("[data-preloader]");
  // if (!preloader) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hide");

      // !onlyLoad && activeScroll();

      setTimeout(() => preloader.remove(), 700);
    }, 300);
  });
};
