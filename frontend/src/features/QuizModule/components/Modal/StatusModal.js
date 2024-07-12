import { Button, Modal } from "react-bootstrap";
import "./StatusModal.css";
import useLocalFetch from "hooks/useLocalFetch";

const StatusModal = ({show, setShow}) => {

    const handleClose = () => setShow(false);
    const { setLocalData } = useLocalFetch();

    const handleReset = (type) => {
        if(type === "all"){
            setLocalData();
        }
    };

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Fülle Fragen wieder. Daten werden aus der Datenbank bezogen.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-column my-2">
                    <Button className="m-btn" onClick={() => {handleReset('all')}}>Alles zurücksetzten (Funktioniert!)</Button>
                    <Button className="m-btn" onClick={() => {handleReset('')}}>Allgemeinwissen zurücksetzten. (Nicht Fertig)</Button>
                    <Button className="m-btn" onClick={() => {handleReset('')}}>Private Fragen zurücksetzten. (Nicht Fertig)</Button>
                    <Button className="m-btn" onClick={() => {handleReset('')}}>Schätzufragen zurücksetzten. (Nicht Fertig)</Button>
                    <Button className="m-btn" onClick={() => {handleReset('')}}>Zoom Videos zurücksetzten. (Nicht Fertig)</Button>
                    <Button className="m-btn" onClick={() => {handleReset('')}}>Bilder Erraten zurücksetzten. (Nicht Fertig)</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Schließen
            </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default StatusModal;