import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import { setShowSideBar } from "../services/stateService";
import { useDispatch, useSelector } from "react-redux";

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
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LeftSideBar;
