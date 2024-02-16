import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import { secondsToHours, secondsToHoursPlusHour } from "../utils/dates";

function TargetLow(props) {
  const bestFrom = useSelector((state) => state.main.bestFrom);
  const bestUntil = useSelector((state) => state.main.bestUntil);

  return (
    <>
      <Row>
        <Col>
          <p className="text-center">I want to consume</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Intervals {...props}></Intervals>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-center">
            The best time for this is from {secondsToHours(bestFrom)} to
            {secondsToHoursPlusHour(bestUntil)}, which is left
          </div>
          {bestFrom && (
            <Countdown date={bestFrom * 1000}>
              <div>The time is now!</div>
            </Countdown>
          )}
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
