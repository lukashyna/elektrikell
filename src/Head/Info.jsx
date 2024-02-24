import { useEffect, useContext } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PRICE_BUTTONS } from "./constants";
import { getCurrentPrice } from "../services/apiService";
import { mwToKw, addTax } from "../utils/priceFormats";
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { setActivePrice, setErrorMessage } from "../services/stateService";
import BadgePrice from "./BadgePrice";
import { ElectricPriceContext } from "../contexts/ElectricPriceContext";

function Info() {
  const activePrice = useSelector((state) => state.main.activePrice);
  const dispatch = useDispatch();

  const {
    actions: { setCurrentPrice },
    values,
  } = useContext(ElectricPriceContext);
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
  }, [dispatch, setCurrentPrice]);

  return (
    <>
      <Col>
        <div>The current price of electricity is </div>

        <BadgePrice {...values} />
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        <ButtonGroup>
          {PRICE_BUTTONS.map(({ name, id }) => (
            <Button
              key={id}
              active={activePrice === id}
              onClick={() => dispatch(setActivePrice(id))}
              variant="light"
              className="custom-button"
            >
              {name}
            </Button>
          ))}
        </ButtonGroup>
      </Col>
      <Col className="text-end">
        <h2>{values.currentPrice}</h2>
        <div>cent / kilowatt-hour</div>
      </Col>
    </>
  );
}

export default Info;
