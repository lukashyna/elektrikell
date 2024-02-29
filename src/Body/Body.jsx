import { useEffect, useState, useCallback, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
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
import { ERROR_MESSAGE } from "./constants";
import {
  chartDataConvertor,
  currentTimeStamp,
  getLowPriceInterval,
  getAveragePrice,
} from "../utils";
import {
  getPriceData,
  setErrorMessage,
  setBestInterval,
  setIsLoading,
} from "../services";
import { ElectricPriceContext } from "../contexts";

function Body() {
  const dispatch = useDispatch();

  const activeHour = useSelector((state) => state.main.activeHour);
  const from = useSelector((state) => state.date.from);
  const until = useSelector((state) => state.date.until);

  const [priceData, setPriceData] = useState([]);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  const {
    actions: { setAveragePrice },
    values,
  } = useContext(ElectricPriceContext);

  const renderDot = useCallback((line) => {
    const {
      cx,
      cy,
      payload: { timestamp },
      index,
    } = line;

    return timestamp === currentTimeStamp() ? (
      <Dot
        cx={cx + 12}
        cy={cy}
        r={4}
        strokeWidth={8}
        stroke="#dc354533"
        fill="#dc3545"
        key={index}
        fillOpacity={1}
        ifOverflow="discard"
        isFront={false}
      />
    ) : null;
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{label}:00</p>
          <p>Price: {data.price}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTick = (props) => {
    const { x, y, payload } = props;
    if (payload.index % 2 === 0) {
      return (
        <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
          {payload.value}
        </text>
      );
    }
    return null;
  };

  useEffect(() => {
    getPriceData(from, until)
      .then(({ data, success }) => {
        if (!success) throw new Error();

        const priceData = chartDataConvertor(data.ee);

        setPriceData(priceData);

        setAveragePrice(getAveragePrice(priceData));
      })
      .catch((error) => dispatch(setErrorMessage(ERROR_MESSAGE)))
      .finally(() => dispatch(setIsLoading(false)));
  }, [from, until, dispatch, setAveragePrice]);

  useEffect(() => {
    const priceDataForInterval = priceData.slice(0, -1);
    const lowPriceIntervals = getLowPriceInterval(
      priceDataForInterval,
      activeHour
    );
    if (lowPriceIntervals.length) {
      setX1(lowPriceIntervals[0].position);
      setX2(lodash.last(lowPriceIntervals).position + 1);
      dispatch(setBestInterval(lowPriceIntervals));
    }
  }, [priceData, activeHour, dispatch]);

  return (
    <Row className="my-5">
      <Col>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={priceData}>
            <CartesianGrid
              strokeDasharray="2 2"
              horizontal={false}
              strokeWidth="1"
              stroke="#0A26CB33"
            />
            <XAxis dataKey="hour" interval={0} tick={<CustomTick />} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="stepAfter"
              dataKey="price"
              stroke="#0A26CB"
              dot={renderDot}
            />
            <ReferenceLine
              y={values.averagePrice}
              label="Average price"
              stroke="#ffc107"
              strokeDasharray="1 0"
            />
            <ReferenceArea
              x1={x1}
              x2={x2}
              fill="#ffc10766"
              stroke="transparent"
              strokeOpacity={0.3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
}

export default Body;
