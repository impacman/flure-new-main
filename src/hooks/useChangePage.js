export const useChangePage = (evt) => {
  return;
  evt.preventDefault();

  const href = evt.target.getAttribute("href");
  if (href === "#") return;

  const pageTransition = document.querySelector("[data-page-transition]");
  const body = document.body;
  const color = body.classList[0];

  if (pageTransition) {
    pageTransition.classList.add(`page-transition--${color}`);
    pageTransition.classList.add("show");
  }

  setTimeout(() => (body.className = color), 400);
  setTimeout(() => (window.location.href = evt.target.href), 900);
};
