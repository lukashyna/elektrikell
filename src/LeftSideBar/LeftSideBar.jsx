import { useDispatch, useSelector } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import { setShowSideBar } from "../services";
import SearchForm from "./SearchForm";

function LeftSideBar({ ...formProps }) {
  const dispatch = useDispatch();
  const show = useSelector((state) => {
    return state.main.showSideBar;
  });
  const handleClose = () => dispatch(setShowSideBar(false));
  return (
    <Offcanvas show={show} onHide={handleClose} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search by dates</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm {...formProps} handleClose={handleClose} />
        <p className="my-3">
          The "from" date must be in the past, and the "until" date must be in
          the future. Additionally, you can request data for up to one day
          ahead.
        </p>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LeftSideBar;
