import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TargetHigh() {
  return (
    <Row>
      <Col className="text-center">
        <p>Near future</p>
        <p className="countdown">THERE ARE NO PEAK HOURS</p>
        <p>
          If you want to consume at the most reasonable time, select{" "}
          <span>Cheap hours</span>
          above and you will find the best time for it.
        </p>
        <p>
          We recommend reducing electricity consumption during peak hours to
          contribute to Europe's common goal of reducing electricity consumption
          by -5% during peak hours and reducing natural gas demand.
        </p>
      </Col>
    </Row>
  );
}

export default TargetHigh;
