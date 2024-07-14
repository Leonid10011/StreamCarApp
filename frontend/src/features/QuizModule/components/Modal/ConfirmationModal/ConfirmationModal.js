import { Button, Modal } from "react-bootstrap";

const ConfirmationModal = ({ showModal, handleClose, handleConfirm }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bestätige Vorgang</Modal.Title>
      </Modal.Header>
      <Modal.Body>Alle Daten löschen?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Abbrechen
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleConfirm();
            handleClose();
          }}
        >
          Bestätigen
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
