import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { DEFAULT_ACTIVE_BUTTON } from "../Head/constants";
import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";

function Footer() {
  const activePrice = useSelector((state) => state.main.activePrice);
  return (
    <div className="footer bg-light">
      <Container className="py-5">
        {activePrice === DEFAULT_ACTIVE_BUTTON ? <TargetLow /> : <TargetHigh />}
      </Container>
    </div>
  );
}

export default Footer;
