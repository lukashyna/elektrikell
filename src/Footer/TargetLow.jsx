import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import Countdown from "react-countdown";

function TargetLow(props) {
  const { bestUntil } = props;

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
          {bestUntil && (
            <Countdown date={bestUntil * 1000}>
              <div>The time is now!</div>
            </Countdown>
          )}
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
