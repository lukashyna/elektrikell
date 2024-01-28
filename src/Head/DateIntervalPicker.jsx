import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function DateIntervalPicker() {
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");

  return (
    <Row>
      <Col>
        <Form>
          <FloatingLabel controlId="fromDate" label="From" className="mb-3">
            <Form.Control
              type="date"
              placeholder="From"
              onChange={(e) => setFromDate(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="untilDate" label="Until" className="mb-3">
            <Form.Control
              type="date"
              placeholder="Until"
              min={fromDate}
              onChange={(e) => setUntilDate(e.target.value)}
            />
          </FloatingLabel>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(fromDate, untilDate);
            }}
          >
            Search
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default DateIntervalPicker;
