import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import Countdown from "react-countdown";
import { addHourToCurrentTSMl } from "../utils/dates";

function TargetLow(props) {
  const countDownDate = addHourToCurrentTSMl();
  return (
    <>
      <Row>
        <Col>
          <p>I want to consume</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Intervals {...props}></Intervals>
        </Col>
      </Row>
      <Row>
        <Col>
          <Countdown date={countDownDate}>
            <div>The time is now!</div>
          </Countdown>
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
