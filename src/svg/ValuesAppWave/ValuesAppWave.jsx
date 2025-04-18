import { useMatchMedia } from "../../hooks/useMatchMedia";
import "./styles.scss";

const ValuesAppWave = () => {
  const { isMobile } = useMatchMedia();

  return (
    <div className="clouds clouds--values-app">
      <div className="cloud cloud--1">
        {!isMobile ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="43"
            viewBox="0 0 1920 43"
            fill="none"
          >
            <path
              d="M627.601 7.37066C503.676 16.2504 401.866 17.6305 267.601 7.37066C142.163 -2.21474 60.4893 -1.37917 0 3.79698V43H1920V11.218C1854.26 16.7181 1791.72 25.3704 1751.1 25.3704C1685.6 25.3704 1558.1 -3.88472 1430.6 7.37066C1341.92 15.1995 1234.1 25.3704 1071.1 25.3704C982.778 25.3704 788.101 -4.12978 627.601 7.37066Z"
              fill="var(--mauve)"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="375"
            height="21"
            viewBox="0 0 375 21"
            fill="none"
          >
            <path
              d="M214.927 0.814941C243.514 0.814941 289.407 4.98193 325.411 4.98193C342.511 4.98193 359.576 3.62426 375 2.14893V20.9999H0V0.838806C0.877193 0.823052 1.74764 0.814941 2.6116 0.814941C30.2713 0.814941 81.2641 4.98193 114.95 4.98193C148.636 4.98193 186.34 0.814941 214.927 0.814941Z"
              fill="var(--mauve)"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ValuesAppWave;
