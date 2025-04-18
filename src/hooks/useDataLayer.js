export const useDataLayer = (obj, href, newWindow = true) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);

  if (!href) return;

  setTimeout(() => {
    newWindow ? window.open(href) : (window.location = href);
  }, 500);
};
