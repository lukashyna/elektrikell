import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Button, ButtonGroup } from "react-bootstrap";
import { PRICE_BUTTONS, ERROR_MESSAGE } from "./constants";
import { getCurrentPrice, setActivePrice, setErrorMessage } from "../services";
import { mwToKw, addTax } from "../utils";
import { ElectricPriceContext } from "../contexts";
import BadgePrice from "./BadgePrice";

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
      <Col className="w-50">
        <div>The current price of electricity is </div>

        <BadgePrice {...values} />
      </Col>
      <Col className="d-flex align-items-center justify-content-center switch-buttons">
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
      <Col className="text-end w-50">
        <h2 className="m-0">{values.currentPrice}</h2>
        <div>cent / kilowatt-hour</div>
      </Col>
    </>
  );
}

export default Info;
