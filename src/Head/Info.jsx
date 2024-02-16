import { useEffect, useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PRICE_BUTTONS, BADGES, LOW, HIGH, AVERAGE } from "./constants";
import Badge from "react-bootstrap/Badge";
import { getCurrentPrice } from "../services/apiService";
import { mwToKw, addTax } from "../utils/priceFormats";
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { setActivePrice, setErrorMessage } from "../services/stateService";
import { ElectricPriceContext } from "../contexts/ElectricPriceContext";

function Info() {
  const activePrice = useSelector((state) => state.main.activePrice);
  const dispatch = useDispatch();

  const { values } = useContext(ElectricPriceContext);
  console.log(values.averagePrice);
  const [currentPrice, setCurrentPrice] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const { data, success } = await getCurrentPrice();
        if (!success) throw new Error();

        setCurrentPrice(+addTax(mwToKw(data[0].price), "ee"));
      } catch (error) {
        dispatch(setErrorMessage(ERROR_MESSAGE));
      }
    })();
  }, [dispatch]);

  const findPrice = (arr, id) => {
    return arr.find((a) => a.id === id);
  };

  console.log(values.averagePrice);

  const badge =
    (values.averagePrice > currentPrice && findPrice(BADGES, LOW)) ||
    (values.averagePrice === currentPrice && findPrice(BADGES, AVERAGE)) ||
    (values.averagePrice < currentPrice && findPrice(BADGES, HIGH));

  return (
    <>
      <Col>
        <div>The current price of electricity is</div>
        <Badge bg={badge.name}>{badge.id}</Badge>
      </Col>
      <Col>
        <ButtonGroup>
          {PRICE_BUTTONS.map(({ name, id }) => (
            <Button
              key={id}
              active={activePrice === id}
              onClick={() => dispatch(setActivePrice(id))}
              variant="secondary"
            >
              {name}
            </Button>
          ))}
        </ButtonGroup>
      </Col>
      <Col className="text-end">
        <h2>{currentPrice}</h2>
        <div>cent / kilowatt-hour</div>
      </Col>
    </>
  );
}

export default Info;
