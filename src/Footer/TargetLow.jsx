import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import UsageAdvice from "./UsageAdvice";

function TargetLow() {
  return (
    <>
      <Row>
        <Col>
          <Intervals></Intervals>
        </Col>
      </Row>
      <Row>
        <Col>
          <UsageAdvice></UsageAdvice>
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
