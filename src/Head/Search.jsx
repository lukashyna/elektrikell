import { useDispatch } from "react-redux";
import { Col, Button } from "react-bootstrap";
import { setShowSideBar } from "../services";

function Search() {
  const dispatch = useDispatch();
  const handleOpenSideBar = () => dispatch(setShowSideBar(true));

  return (
    <>
      <Col className="d-flex">
        <Button variant="primary" onClick={handleOpenSideBar}>
          Search
        </Button>
      </Col>
    </>
  );
}

export default Search;
