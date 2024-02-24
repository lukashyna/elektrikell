import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { setShowSideBar } from "../services/stateService";
import { useDispatch } from "react-redux";

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
