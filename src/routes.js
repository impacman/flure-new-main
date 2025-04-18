const ROUTES = {
  home: {
    pathname: "/",
    theme: "mauve",
  },
  p404: {
    pathname: "/",
    theme: "pink",
  },
  about: {
    pathname: "/about-us",
    theme: "mauve",
  },
  contact: {
    pathname: "/contact-us",
    theme: "pink-black",
  },
  dream: {
    pathname: "/dream-job",
    theme: "pink-black-light",
  },
  kinks: {
    pathname: "/kinks-guide",
    theme: "white",
    themeHeader: "black",
    themeStatusBar: "#000",
  },
  nudes: {
    pathname: "/nudes-guide",
    scrollSmooth: false,
    theme: "white-black",
    themeStatusBar: "#f2daf5",
  },
  app: {
    theme: "pink",
  },
  guidelines: {
    pathname: "/community-guidelines",
    theme: "pink",
    themeFooter: "pink-black",
  },
  privacy: {
    pathname: "/privacy",
    theme: "pink",
    themeFooter: "pink-black",
  },
  terms: {
    pathname: "/terms-condition",
    theme: "pink",
    themeFooter: "pink-black",
  },
  termsLa: {
    pathname: "/promo-la-terms",
    theme: "pink",
    themeFooter: "pink-black",
  },
  faq: {
    pathname: "/faq",
    theme: "black",
  },
  seggsting: {
    pathname: "/seggsting-quiz",
    theme: "black",
  },
  usc: {
    pathname: "/usc",
    scrollSmooth: false,
    theme: "pink",
    themeHeader: "pink",
    disableHeader: true,
    disableFooter: true,
  },
};

export default ROUTES;
