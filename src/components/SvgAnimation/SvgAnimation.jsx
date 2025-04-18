import Lottie from "lottie-react";

const SvgAnimation = ({ data, lottieClass }) => (
  <Lottie
    animationData={data}
    loop={true}
    autoplay={true}
    className={lottieClass ? lottieClass : ""}
  />
);

export default SvgAnimation;
