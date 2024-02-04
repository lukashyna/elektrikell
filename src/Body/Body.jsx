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

function Body({ from, until, activeHour }) {
  const [priceData, setPriceData] = useState([]);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y, setY] = useState(0);

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
    getPriceData(from, until).then(({ data }) => {
      const priceData = chartDataConvertor(data.ee);
      setPriceData(priceData);
    });
  }, [from, until]);

  useEffect(() => {
    const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);
    const { dataIntervaltWithIndex, averagePrice } = lowPriceIntervals;
    if (dataIntervaltWithIndex.length) {
      setX1(dataIntervaltWithIndex[0].index);
      setX2(lodash.last(dataIntervaltWithIndex).index);
    }
    setY(averagePrice);
  }, [priceData, activeHour]);
  return (
    <Row>
      <Col>
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
            <ReferenceArea x1={x1} x2={x2} stroke="red" strokeOpacity={0.3} />
            <ReferenceLine y={y} label="Average price" stroke="blue" />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
}

export default Body;
