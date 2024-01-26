import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_BUTTON } from "../Head/constants";

function Footer({ activePrice }) {
  return (
    <>
      {activePrice === DEFAULT_ACTIVE_BUTTON ? <TargetLow /> : <TargetHigh />}
    </>
  );
}

export default Footer;
