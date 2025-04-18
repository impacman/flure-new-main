import "./styles.scss";
import data from "./data.json";

import SvgAnimation from "../../components/SvgAnimation";

const Women = ({}) => (
  <div className="women">
    <SvgAnimation data={data} lottieClass={"women__wrap"} />
  </div>
);

export default Women;
