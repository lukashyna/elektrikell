import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_BUTTON } from "../Head/constants";

function Footer({ activePrice, activeHour, setActiveHour, currentPrice }) {
  return (
    <>
      {activePrice === DEFAULT_ACTIVE_BUTTON ? (
        <TargetLow
          activeHour={activeHour}
          setActiveHour={setActiveHour}
          currentPrice={currentPrice}
        />
      ) : (
        <TargetHigh />
      )}
    </>
  );
}

export default Footer;
