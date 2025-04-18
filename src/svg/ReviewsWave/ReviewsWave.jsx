import { useMatchMedia } from "../../hooks/useMatchMedia";

const ReviewsWave = ({ id }) => {
  const { isMobile } = useMatchMedia();

  if (id === 1)
    return !isMobile ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="548"
        height="311"
        viewBox="0 0 548 311"
        fill="none"
      >
        <path
          d="M61.0679 2.16751C4.26793 -1.43249 2.40126 55.6675 8.56793 84.6675C16.5673 129.168 8.56793 166.167 0.5686 215.167C-7.43072 322.167 70.5686 310.167 134.069 302.167C197.569 294.167 266.569 296.167 418.569 309.167C570.569 322.167 547.801 251.94 543.069 229.167C538.566 207.5 532.569 160.167 532.569 127.667C532.569 94.1265 544.569 38.1674 517.069 11.6674C489.569 -14.8326 362.569 12.1674 238.569 11.6674C114.569 11.1674 132.068 6.66751 61.0679 2.16751Z"
          fill="var(--white)"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="289"
        height="236"
        viewBox="0 0 289 236"
        fill="none"
      >
        <path
          d="M32.2612 1.74335C2.25467 -0.97902 1.26855 42.2007 4.52629 64.1309C8.7522 97.7823 4.52629 125.762 0.300382 162.817C-3.92553 243.731 37.2802 234.657 70.8262 228.607C104.372 222.557 140.824 224.07 221.123 233.901C301.422 243.731 289.394 190.625 286.894 173.404C284.516 157.018 281.347 121.225 281.347 96.648C281.347 71.2839 287.687 28.9669 273.159 8.92732C258.631 -11.1123 191.539 9.30543 126.032 8.92732C60.5247 8.54921 69.7693 5.1463 32.2612 1.74335Z"
          fill="white"
        />
      </svg>
    );
  else if (id === 2)
    return !isMobile ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="535"
        height="273"
        viewBox="0 0 535 273"
        fill="none"
      >
        <path
          d="M42.2595 267.074C128.759 284.22 222.826 255.591 253.808 255.59C291.248 255.589 343.636 254.07 386.964 255.59C430.292 257.111 427.808 259 458.808 259C479.841 259 505.192 255.8 516.308 247C528.308 237.5 531.26 217.593 533.76 195.253C536.627 169.639 533.962 162.849 529.266 132.567C524.57 102.285 527.506 89.5 529.266 78.5C533.267 53.5 529.285 25.8745 509.776 9.43724C490.268 -6.99999 456.217 3.96766 389.809 9.4434C323.401 14.9191 311.635 14.4741 253.709 9.44329C195.783 4.41247 158.829 15.8621 118.809 8.88426L118.13 8.76591C78.4358 1.84445 47.5096 -3.54816 27.1333 8.88426C6.64092 21.3875 4.31041 45.4731 10.1778 83.1409C16.3086 122.5 10.1775 140.5 3.26038 176.12C-3.65672 211.74 -2.74 258.154 42.2595 267.074Z"
          fill="var(--white)"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="289"
        height="181"
        viewBox="0 0 289 181"
        fill="none"
      >
        <path
          d="M22.7784 176.727C69.4578 188.087 120.224 169.106 136.943 169.104C157.148 169.101 185.42 168.091 208.802 169.097C232.184 170.102 230.844 171.354 247.574 171.353C258.924 171.352 272.605 169.23 278.605 163.396C285.081 157.099 286.675 143.904 288.026 129.097C289.574 112.12 288.137 107.62 285.604 87.5492C283.071 67.4786 284.656 59.0044 285.607 51.7135C287.767 35.1433 285.62 16.8333 275.093 5.93978C264.566 -4.95375 246.189 2.31747 210.351 5.95043C174.513 9.58339 168.163 9.28908 136.903 5.95781C105.643 2.62655 85.7 10.2174 64.103 5.59468L63.7367 5.51627C42.3158 0.9309 25.6265 -2.64163 14.6295 5.5997C3.56987 13.8879 2.31087 29.8521 5.47518 54.8179C8.78157 80.9048 5.47189 92.8355 1.73705 116.445C-1.99779 140.054 -1.50561 170.817 22.7784 176.727Z"
          fill="white"
        />
      </svg>
    );
  else if (id === 3)
    return !isMobile ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="546"
        height="311"
        viewBox="0 0 546 311"
        fill="none"
      >
        <path
          d="M49.5279 306.497C104.156 314.049 155.025 297.454 206.511 297.454C240.892 296.999 344.877 309.125 388.205 310.556C431.532 311.987 432.011 295.755 466.624 299.77C501.238 303.784 527.377 302.149 541.753 276.515C556.129 250.881 527.793 228.426 526.862 204.197C525.931 179.967 535.201 154.036 530.504 125.57C525.807 97.1042 520.318 97.8444 520.33 72.2037C520.341 46.5629 537.138 33.5954 511.01 9.82485C484.883 -13.9457 458.099 13.2357 391.692 18.3812C325.284 23.5268 312.869 14.5543 254.943 9.82371C197.017 5.09308 149.705 30.0732 104.233 14.4814C66.0674 1.39521 48.8597 -2.46055 28.3677 9.29216C7.87563 21.0449 -2.42689 45.7037 11.4141 79.0945C22.3884 105.57 21.2203 161.418 8.28426 190.132C-6.97235 223.997 -5.10018 298.945 49.5279 306.497Z"
          fill="var(--white)"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="290"
        height="228"
        viewBox="0 0 290 228"
        fill="none"
      >
        <path
          d="M26.8793 224.98C55.7497 230.518 82.6355 218.334 109.846 218.329C128.016 217.992 182.972 226.882 205.87 227.928C228.769 228.974 229.023 217.062 247.316 220.005C265.609 222.948 279.424 221.746 287.024 202.931C294.624 184.116 279.65 167.639 279.16 149.856C278.67 132.074 283.572 113.041 281.092 92.1502C278.613 71.259 275.712 71.8028 275.72 52.9845C275.729 34.1662 284.607 24.6476 270.801 7.20428C256.994 -10.239 242.837 9.7124 207.74 13.4949C172.643 17.2774 166.082 10.6934 135.469 7.22683C104.855 3.76022 79.8486 22.098 55.8175 10.6589C35.6484 1.05824 26.5544 -1.77001 15.7233 6.85742C4.89213 15.4848 -0.555027 33.5834 6.75692 58.0883C12.5544 77.5179 11.932 118.506 5.09264 139.581C-2.9736 164.437 -1.991 219.443 26.8793 224.98Z"
          fill="white"
        />
      </svg>
    );
  else if (id === 4)
    return !isMobile ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="548"
        height="292"
        viewBox="0 0 548 292"
        fill="none"
      >
        <path
          d="M62.001 2.16752C5.20103 -1.43248 3.33436 55.6675 9.50103 84.6675C17.5004 129.168 9.50152 147 1.50219 196C-6.49713 303 71.5022 291 135.002 283C198.502 275 267.502 277 419.502 290C571.502 303 548.734 232.773 544.002 210L543.722 208.653C539.255 187.17 533.502 159.498 533.502 127.667C533.502 94.1265 545.502 38.1674 518.002 11.6674C490.502 -14.8326 363.502 12.1674 239.502 11.6674C115.502 11.1674 133.001 6.66752 62.001 2.16752Z"
          fill="var(--white)"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="289"
        height="193"
        viewBox="0 0 289 193"
        fill="none"
      >
        <path
          d="M32.4071 1.43465C2.50443 -0.948137 1.52171 36.8454 4.76819 56.0401C8.97948 85.494 4.76844 97.297 0.557155 129.729C-3.65413 200.551 37.409 192.608 70.839 187.313C104.269 182.018 140.594 183.342 220.616 191.946C300.637 200.551 288.65 154.069 286.159 138.996L286.012 138.104C283.66 123.885 280.631 105.569 280.631 84.5011C280.631 62.3008 286.949 25.2624 272.471 7.7225C257.994 -9.81743 191.134 8.05344 125.853 7.7225C60.5728 7.39156 69.7854 4.41313 32.4071 1.43465Z"
          fill="white"
        />
      </svg>
    );
  else if (id === 5)
    return !isMobile ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="546"
        height="366"
        viewBox="0 0 546 366"
        fill="none"
      >
        <path
          d="M49.4959 360.865C104.124 368.417 154.993 351.822 206.479 351.822C240.86 351.367 344.845 363.493 388.173 364.924C431.5 366.355 431.979 350.123 466.592 354.138C501.206 358.152 527.345 356.517 541.721 330.883C556.097 305.249 527.761 282.795 526.83 258.565C525.899 234.335 535.194 154.036 530.498 125.57C525.801 97.1042 520.312 97.8444 520.323 72.2037C520.335 46.5629 537.132 33.5954 511.004 9.82485C484.877 -13.9457 458.093 13.2357 391.686 18.3812C325.278 23.5268 312.863 14.5543 254.937 9.82371C197.011 5.09308 149.699 30.0732 104.227 14.4814C66.0615 1.39521 48.8537 -2.46055 28.3617 9.29217C7.86969 21.0449 -2.43283 45.7037 11.4082 79.0945C22.3825 105.57 21.1883 215.786 8.25226 244.5C-7.00434 278.365 -5.13217 353.313 49.4959 360.865Z"
          fill="var(--white)"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="289"
        height="248"
        viewBox="0 0 289 248"
        fill="none"
      >
        <path
          d="M26.3654 245.131C55.1655 250.257 81.9853 238.983 109.13 238.979C127.255 238.668 182.077 246.897 204.92 247.865C227.762 248.834 228.016 237.81 246.264 240.534C264.513 243.259 278.294 242.146 285.875 224.735C293.455 207.323 278.518 192.074 278.029 175.618C277.539 159.161 282.446 104.622 279.971 85.2888C277.497 65.9555 274.603 66.4587 274.611 49.0437C274.619 31.6287 283.475 22.8202 269.702 6.67724C255.929 -9.4657 241.806 8.99742 206.795 12.4967C171.784 15.996 165.239 9.90285 134.7 6.69377C104.161 3.48469 79.2163 20.4541 55.2435 9.86739C35.1233 0.981979 26.0514 -1.63565 15.2469 6.34806C4.4425 14.3318 -0.990781 31.0805 6.30411 53.7582C12.0881 71.7391 11.4511 146.597 4.6291 166.1C-3.41666 189.102 -2.4347 240.006 26.3654 245.131Z"
          fill="white"
        />
      </svg>
    );
  else if (id === 6)
    return !isMobile ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="548"
        height="311"
        viewBox="0 0 548 311"
        fill="none"
      >
        <path
          d="M61.9898 2.16751C5.1898 -1.43249 3.32313 55.6675 9.4898 84.6675C17.4891 129.168 9.4898 166.167 1.49048 215.167C-6.50885 322.167 71.4905 310.167 134.99 302.167C198.49 294.167 267.49 296.167 419.49 309.167C571.49 322.167 548.722 251.94 543.99 229.167C539.488 207.5 533.49 160.167 533.49 127.667C533.49 94.1265 545.49 38.1674 517.99 11.6674C490.49 -14.8326 363.49 12.1674 239.49 11.6674C115.49 11.1674 132.99 6.66751 61.9898 2.16751Z"
          fill="var(--white)"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="289"
        height="223"
        viewBox="0 0 289 223"
        fill="none"
      >
        <path
          d="M32.2628 1.5554C2.36015 -1.02795 1.37744 39.9469 4.62391 60.7572C8.8352 92.6903 4.62391 119.241 0.412624 154.404C-3.79866 231.187 37.2645 222.575 70.6944 216.835C104.124 211.094 140.45 212.529 220.471 221.858C300.492 231.187 288.506 180.792 286.015 164.45C283.645 148.901 280.487 114.936 280.487 91.6138C280.487 67.5449 286.804 27.3889 272.327 8.37253C257.849 -10.6438 190.99 8.73133 125.709 8.37253C60.4286 8.01373 69.6412 4.78459 32.2628 1.5554Z"
          fill="white"
        />
      </svg>
    );
};

export default ReviewsWave;
