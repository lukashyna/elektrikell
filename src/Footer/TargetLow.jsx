import { useContext } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Countdown from "react-countdown";
import {
  secondsToHours,
  secondsToHoursPlusHour,
  getAveragePrice,
  getProfitabilityPercentage,
} from "../utils";
import { ElectricPriceContext } from "../contexts";
import Intervals from "./Intervals";

function TargetLow(props) {
  const bestInterval = useSelector((state) => state.main.bestInterval);
  const { values } = useContext(ElectricPriceContext);

  const bestFrom = bestInterval.length > 0 ? bestInterval[0].timestamp : null;
  const bestUntil =
    bestInterval.length > 0
      ? bestInterval[bestInterval.length - 1].timestamp
      : null;

  const averagePriceBestInterval = getAveragePrice(bestInterval);
  const profitabilityPercentage = getProfitabilityPercentage(
    values.currentPrice,
    averagePriceBestInterval
  );

  const renderer = ({ hours, minutes, seconds }) => {
    const formatNumber = (num) => num.toString().padStart(2, "0");

    return (
      <>
        {hours === 0 && minutes === 0 && seconds === 0 ? (
          <>
            <p className="countdown m-0">The best time for this is now!</p>
            <p className="m-0">It will be more expensive later</p>
          </>
        ) : (
          <>
            <div className="countdown">
              <span>{formatNumber(hours)}</span>:
              <span>{formatNumber(minutes)}</span>:
              <span>{formatNumber(seconds)}</span>
            </div>
            <div>
              Then the price per kilowatt-hour is{" "}
              <span className="text-success">{averagePriceBestInterval}</span>{" "}
              cents, which is <b> {profitabilityPercentage}% </b>cheaper than
              now
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <Row>
        <Col>
          <p className="text-center m-0">I want to consume</p>
        </Col>
      </Row>
      <Row>
        <Col className="my-3">
          <Intervals {...props}></Intervals>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          {bestFrom && (
            <>
              <div>
                The best time for this is from {secondsToHours(bestFrom)} to{" "}
                {secondsToHoursPlusHour(bestUntil)}
              </div>
              <Countdown date={bestFrom * 1000} renderer={renderer} />
            </>
          )}
        </Col>
      </Row>
    </>
  );
}

export default TargetLow;
