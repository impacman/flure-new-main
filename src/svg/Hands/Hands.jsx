import "./styles.scss";
import data from "./data.json";

import SvgAnimation from "../../components/SvgAnimation";

const Hands = ({}) => (
  <div className="hands">
    <SvgAnimation data={data} lottieClass={"hands__wrap"} />
  </div>
);

export default Hands;
