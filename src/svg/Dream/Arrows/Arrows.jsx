import { useMatchMedia } from "../../../hooks/useMatchMedia";
import "./styles.scss";

export const Arrow1 = () => {
  const { isMobile } = useMatchMedia();

  return (
    <div className="dream-arrow-1">
      {!isMobile ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="217"
          height="429"
          viewBox="0 0 217 429"
          fill="none"
        >
          <path
            d="M0.145691 428.499C64.0664 422.963 172.921 373.952 201.601 309.93C252.875 195.467 151.18 36.9133 103.818 10.5373M103.818 10.5373C103.818 10.5373 137.714 34.7773 124.517 72.8453M103.818 10.5373C103.818 10.5373 150.46 30.6759 163.697 0.331691"
            stroke="var(--black)"
          />
        </svg>
      ) : (
        <svg
          width="35"
          height="91"
          viewBox="0 0 35 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.87145 0.899414C61.1141 28.7261 17.038 78.053 0.945312 87.0151M0.945312 87.0151C0.945312 87.0151 12.4627 78.7788 7.97866 65.844M0.945312 87.0151C0.945312 87.0151 16.7934 80.1724 21.2912 90.4828"
            stroke="black"
          />
        </svg>
      )}
    </div>
  );
};

export const Arrow2 = () => {
  const { isMobile } = useMatchMedia();

  return isMobile ? (
    <div className="dream-arrow-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="89"
        viewBox="0 0 46 89"
        fill="none"
      >
        <path
          d="M22.9479 1C71.5708 37.9634 28.5755 72.7531 1 85.5275M1 85.5275C1 85.5275 13.5855 76.8739 8.98104 66.3659M1 85.5275C1 85.5275 16.5016 78.4192 27.0919 88"
          stroke="var(--black)"
        />
      </svg>
    </div>
  ) : null;
};
