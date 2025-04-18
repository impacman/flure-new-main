import "./styles.scss";
import data from "./data.json";

import SvgAnimation from "../../components/SvgAnimation";

const BigClouds = ({}) => (
  <SvgAnimation data={data} lottieClass={"big-clouds"} />
);

export default BigClouds;
