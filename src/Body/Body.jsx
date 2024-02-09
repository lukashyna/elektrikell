import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Dot,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceLine,
} from "recharts";
import lodash from "lodash";
import { getPriceData } from "../services/apiService";
import { chartDataConvertor } from "../utils";
import { currentTimeStamp } from "../utils/dates";
import { getLowPriceInterval } from "../utils/buildIntervals";
import { getAveragePrice } from "../utils/maths";
import Loader from "../Loader";

function Body({ from, until, activeHour }) {
  const [priceData, setPriceData] = useState([]);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const renderDot = (line) => {
    const {
      // cx,
      // cy,
      payload: { timestamp },
    } = line;

    return timestamp === currentTimeStamp() ? (
      <Dot {...line}>
        <div></div>
      </Dot>
    ) : null;
  };

  useEffect(() => {
    setIsLoading(true);
    getPriceData(from, until).then(({ data }) => {
      const priceData = chartDataConvertor(data.ee);

      setPriceData(priceData);
      setIsLoading(false);
    });
  }, [from, until, setIsLoading]);

  useEffect(() => {
    const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);

    if (lowPriceIntervals.length) {
      setX1(lowPriceIntervals[0].position);
      setX2(lodash.last(lowPriceIntervals).position);
    }
  }, [priceData, activeHour]);
  return (
    <Row>
      <Col>
        {isLoading ? (
          <Loader />
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" interval={1} />
              <YAxis />
              <Tooltip />
              <Line
                type="stepAfter"
                dataKey="price"
                stroke="#8884d8"
                dot={renderDot}
              />
              <ReferenceLine
                y={getAveragePrice(priceData)}
                label="Average"
                stroke="red"
                strokeDasharray="3 3"
              />
              <ReferenceArea x1={x1} x2={x2} stroke="red" strokeOpacity={0.3} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Col>
    </Row>
  );
}

export default Body;
