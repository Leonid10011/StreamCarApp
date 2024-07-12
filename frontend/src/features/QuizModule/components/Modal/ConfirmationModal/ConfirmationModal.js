import { Button, Modal } from "react-bootstrap";

const ConfirmationModal = ({showModal, handleClose, handleConfirm}) => {

    return (<Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to proceed?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
            <Button variant="primary" onClick={() => {handleConfirm(); handleClose()}}>
            Confirm
            </Button>
        </Modal.Footer>
    </Modal>)
}

export default ConfirmationModal;