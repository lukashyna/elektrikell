import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_BUTTON } from "../Head/constants";

function Footer({ activePrice, activeHour, setActiveHour, intervalMinPrice }) {
  return (
    <>
      {activePrice === DEFAULT_ACTIVE_BUTTON ? (
        <TargetLow
          activeHour={activeHour}
          setActiveHour={setActiveHour}
          intervalMinPrice={intervalMinPrice}
        />
      ) : (
        <TargetHigh />
      )}
    </>
  );
}

export default Footer;
