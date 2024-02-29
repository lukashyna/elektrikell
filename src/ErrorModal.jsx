import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { setErrorMessage } from "./services";

function ErrorModal() {
  const errorMessage = useSelector((state) => state.main.errorMessage);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setErrorMessage(null));
  };

  return (
    <Modal show={!!errorMessage} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{errorMessage}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
