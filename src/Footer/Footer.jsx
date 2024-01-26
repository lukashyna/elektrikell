import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";

function Footer({ activePrice }) {
  return <>{activePrice === "low" ? <TargetLow /> : <TargetHigh />}</>;
}

export default Footer;
