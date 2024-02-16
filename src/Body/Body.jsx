import { useEffect, useState, useCallback, useContext } from "react";
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
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import {
  setErrorMessage,
  setBestUntil,
  setBestFrom,
  setIsLoading,
} from "../services/stateService";
import { ElectricPriceContext } from "../contexts/ElectricPriceContext";

function Body() {
  const dispatch = useDispatch();

  const activeHour = useSelector((state) => state.main.activeHour);
  const from = useSelector((state) => state.date.from);
  const until = useSelector((state) => state.date.until);

  const [priceData, setPriceData] = useState([]);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  const { actions, values } = useContext(ElectricPriceContext);

  const renderDot = useCallback((line) => {
    const {
      cx,
      cy,
      payload: { timestamp },
      index,
    } = line;

    return timestamp === currentTimeStamp() ? (
      <Dot
        cx={cx}
        cy={cy}
        r={6}
        strokeWidth={2}
        stroke="#0A26CB"
        fill="#fff"
        key={index}
      />
    ) : null;
  }, []);

  useEffect(() => {
    getPriceData(from, until)
      .then(({ data, success }) => {
        if (!success) throw new Error();

        const priceData = chartDataConvertor(data.ee);

        setPriceData(priceData);

        actions.setAveragePrice(getAveragePrice(priceData));
      })
      .catch((error) => dispatch(setErrorMessage(ERROR_MESSAGE)))
      .finally(() => dispatch(setIsLoading(false)));
  }, [from, until, dispatch, actions]);

  useEffect(() => {
    const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);

    if (lowPriceIntervals.length) {
      setX1(lowPriceIntervals[0].position);
      setX2(lodash.last(lowPriceIntervals).position + 1);
      dispatch(setBestFrom(lowPriceIntervals[0].timestamp));
      dispatch(
        setBestUntil(lowPriceIntervals[lowPriceIntervals.length - 1].timestamp)
      );
    }
  }, [priceData, activeHour, dispatch]);
  return (
    <Row>
      <Col>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={priceData}>
            <CartesianGrid
              strokeDasharray="2 2"
              horizontal={false}
              strokeWidth="1"
              stroke="#0A26CB33"
            />
            <XAxis dataKey="hour" interval={1} />
            <YAxis />
            <Tooltip />
            <Line
              type="stepAfter"
              dataKey="price"
              stroke="#0A26CB"
              dot={renderDot}
            />

            <ReferenceLine
              y={values.averagePrice}
              label="Average"
              stroke="red"
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
