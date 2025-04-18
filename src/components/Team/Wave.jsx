import { useMatchMedia } from "../../hooks/useMatchMedia";

const Wave = () => {
  const { isMobile } = useMatchMedia();

  return !isMobile ? (
    <div className="wave wave--bottom">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="160"
        viewBox="0 0 1920 160"
        fill="none"
      >
        <path
          d="M393.872 158.959C730.799 151.528 761.844 50.5216 1046.05 7.76006C1341.2 -36.6481 1476.95 125.493 1782.01 92.4449C1832.83 86.9394 1878.51 76.5429 1920 62.5755V158.959H393.872C380.898 159.245 367.47 159.393 353.557 159.393C343.945 159.393 334.306 159.246 324.645 158.959H0V106.561C103.371 134.613 215.337 155.717 324.645 158.959H393.872Z"
          fill="#D9BBF9"
        />
      </svg>
    </div>
  ) : (
    <div className="wave wave--bottom">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="50"
        viewBox="0 0 375 50"
        fill="none"
      >
        <path
          d="M139.146 2.40067C230.454 -11.3376 272.45 38.8228 366.825 28.599C369.599 28.2985 372.323 27.8568 375 27.2817V49.5854H0V42.8637C51.1678 32.5164 72.9794 12.3561 139.146 2.40067Z"
          fill="#D9BBF9"
        />
      </svg>
    </div>
  );
};

export default Wave;
