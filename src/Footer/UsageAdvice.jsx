import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Countdown from "./Countdown";

function UsageAdvice() {
  return (
    <>
      <Row>
        <Col>
          <p>
            The best time for this is from 17:00 to 1:00, which is still left
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Countdown></Countdown>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Then the average kilowatt-hour price is 10.78 cents, which is 30%
            cheaper than starting at the current hour
          </p>
        </Col>
      </Row>
    </>
  );
}

export default UsageAdvice;
