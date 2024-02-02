import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Countdown from "react-countdown";
import moment from "moment";

function UsageAdvice({ intervalMinPrice }) {
  const mSek =
    moment.duration(intervalMinPrice[0].timestamp, "seconds").asMilliseconds() -
    Date.now();
  return (
    <>
      <Row>
        <Col>
          <div>
            {` The best time for this is from
            ${moment
              .unix(intervalMinPrice[0].timestamp)
              .format("HH:mm")} to ${moment
              .unix(intervalMinPrice[intervalMinPrice.length - 1].timestamp)
              .add(1, "hour")
              .format("HH:mm")}
            , which is still left`}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Countdown date={Date.now() + mSek} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            Then the average kilowatt-hour price is 10.78 cents, which is 30%
            cheaper than starting at the current hour
          </div>
        </Col>
      </Row>
    </>
  );
}

export default UsageAdvice;
