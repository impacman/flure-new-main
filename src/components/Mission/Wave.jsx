import { useMatchMedia } from "../../hooks/useMatchMedia";

const Wave = () => {
  const { isMobile } = useMatchMedia();

  return !isMobile ? (
    <div className="wave wave--bottom">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="147"
        viewBox="0 0 1920 147"
        fill="none"
      >
        <path
          d="M230.839 141.428C569.253 171.144 700.653 61.683 1049.63 9.17537C1398.61 -43.3323 1559.12 148.381 1919.82 109.306L1920 109.287V146.701H0V72.0378C82.9185 109.508 162.257 135.405 230.839 141.428Z"
          fill="#D9BBF9"
        />
      </svg>
    </div>
  ) : (
    <>
      <div className="wave wave--top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="63"
          viewBox="0 0 375 63"
          fill="none"
        >
          <path
            d="M351.521 3.19621C237.091 7.03014 199.341 58.3079 123.841 61.8223C71.4579 64.2607 50.8762 50.5752 0 38.3381V0H375V2.31213C367.813 2.61583 360.015 2.9116 351.521 3.19621Z"
            fill="#D9BBF9"
          />
        </svg>
      </div>
      <div className="wave wave--bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="50"
          viewBox="0 0 375 50"
          fill="none"
        >
          <path
            d="M122.841 2.40066C214.149 -11.3376 256.146 38.8229 350.52 28.5991C359.142 27.665 367.286 25.3669 375 21.9383V49.0743H0V39.0152C40.3498 28.0969 64.1404 11.2328 122.841 2.40066Z"
            fill="#D9BBF9"
          />
        </svg>
      </div>
    </>
  );
};

export default Wave;
