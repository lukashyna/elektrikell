import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_BUTTON } from "../Head/constants";
import { useSelector } from "react-redux";

function Footer({ bestUntil }) {
  const activePrice = useSelector((state) => state.main.activePrice);
  return (
    <>
      {activePrice === DEFAULT_ACTIVE_BUTTON ? (
        <TargetLow bestUntil={bestUntil} />
      ) : (
        <TargetHigh />
      )}
    </>
  );
}

export default Footer;
