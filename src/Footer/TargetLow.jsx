import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import UsageAdvice from "./UsageAdvice";

function TargetLow(props) {
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
          <UsageAdvice></UsageAdvice>
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
