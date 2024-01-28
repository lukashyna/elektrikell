import { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import DateIntervalPicker from "./DateIntervalPicker";

function Search() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col className="text-end">
      <Button variant="primary" onClick={handleShow}>
        Search
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DateIntervalPicker />
        </Offcanvas.Body>
      </Offcanvas>
    </Col>
  );
}

export default Search;
