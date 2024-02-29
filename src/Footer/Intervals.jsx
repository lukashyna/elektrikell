import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Stack } from "react-bootstrap";
import { INTERVALS } from "./constants";
import { setActiveHour } from "../services";

function Intervals() {
  const dispatch = useDispatch();
  const activeHour = useSelector((state) => state.main.activeHour);
  return (
    <Row>
      <Col>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center"
        >
          {INTERVALS.map(({ id, name }) => (
            <Button
              key={id}
              variant="outline-warning"
              active={(activeHour || 1) === id}
              onClick={() => dispatch(setActiveHour(id))}
            >
              {name}
            </Button>
          ))}
        </Stack>
      </Col>
    </Row>
  );
}
export default Intervals;
