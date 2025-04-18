import { useMatchMedia } from "../../../hooks/useMatchMedia";
import "./styles.scss";

export const WaveVideo = ({}) => {
  const { isMobile } = useMatchMedia();

  return (
    <div className="dream-wave dream-wave--video">
      {!isMobile ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="62"
          viewBox="0 0 1920 62"
          fill="none"
        >
          <path
            d="M566.5 7.37066C442.575 16.2504 340.765 17.6305 206.5 7.37066C118.877 0.674962 52.6093 -0.935872 0 0.46569V62H1920V7.37808C1833.76 10.5681 1743.13 25.3704 1690 25.3704C1624.5 25.3704 1497 -3.88472 1369.5 7.37066C1280.82 15.1995 1173 25.3704 1010 25.3704C921.677 25.3704 727 -4.12978 566.5 7.37066Z"
            fill="var(--pink)"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="17"
          viewBox="0 0 375 17"
          fill="none"
        >
          <path
            d="M216.249 7.47164C186.622 7.47164 121.321 -2.37885 67.4839 1.4613C43.7039 3.15749 22.3516 4.03417 0 3.8325V17.0001H375V1.11504C362.661 0.42492 349.749 0.326679 336.838 1.4613C307.09 4.07545 270.925 7.47164 216.249 7.47164Z"
            fill="var(--pink)"
          />
        </svg>
      )}
    </div>
  );
};

export const WaveTextPromo = ({}) => {
  const { isMobile } = useMatchMedia();

  return !isMobile ? (
    <div className="dream-wave dream-wave--promo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="88"
        viewBox="0 0 1920 88"
        fill="none"
      >
        <path
          d="M622.533 8.23839C498.603 18.1635 396.788 19.7061 262.518 8.23839C140.561 -2.17762 59.9723 -1.58446 0 3.77286V88H1920V12.0775C1852.43 18.189 1787.73 28.3572 1746.08 28.3572C1680.58 28.3572 1553.07 -4.34206 1425.57 8.23839C1336.88 16.9889 1229.06 28.3572 1066.05 28.3572C977.725 28.3572 783.04 -4.61597 622.533 8.23839Z"
          fill="var(--mauve)"
        />
      </svg>
    </div>
  ) : null;
};

export const WaveList = ({}) => {
  const { isMobile } = useMatchMedia();

  return (
    <div className="dream-wave dream-wave--list">
      {!isMobile ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="127"
          viewBox="0 0 1920 127"
          fill="none"
        >
          <path
            d="M1446.57 23.5891C1563.07 23.5891 1679.08 1.79351 1746.08 0.11692C1781.72 -0.774864 1855.73 6.18967 1920 13.4216V127H0V36.5478C12.8289 37.9256 26.4885 38.6784 41.0087 38.6784C201.516 38.6784 312.52 8.49998 402.024 8.49998C491.528 8.49998 656.535 23.5891 765.54 23.5891C874.544 23.5891 996.549 8.49998 1089.05 8.49998C1181.56 8.49998 1330.06 23.5891 1446.57 23.5891Z"
            fill="var(--pink)"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="65"
          viewBox="0 0 375 65"
          fill="none"
        >
          <path
            d="M234.249 7.47164C204.622 7.47164 139.321 -2.37885 85.4839 1.4613C55.4172 3.60591 29.2314 4.44042 0 3.44167V65.0001H375V0.601076C368.334 0.61207 361.586 0.86831 354.838 1.4613C325.09 4.07545 288.925 7.47164 234.249 7.47164Z"
            fill="var(--pink)"
          />
        </svg>
      )}
    </div>
  );
};
