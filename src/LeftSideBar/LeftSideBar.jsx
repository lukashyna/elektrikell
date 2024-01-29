import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";

function LeftSideBar({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LeftSideBar;
