import { Button, Modal } from "react-bootstrap";
import styles from "./StatusModal.module.css";
import useLocalFetch from "hooks/useLocalFetch";

const StatusModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const { setLocalData } = useLocalFetch();

  const handleReset = (type) => {
    if (type === "all") {
      setLocalData();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Fülle Fragen wieder. Daten werden aus der Datenbank bezogen.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column my-2">
          <Button
            className={styles.mBtn}
            onClick={() => {
              handleReset("all");
            }}
          >
            Alles zurücksetzten (Funktioniert!)
          </Button>
          <Button
            className={styles.mBtn}
            onClick={() => {
              handleReset("");
            }}
          >
            Allgemeinwissen zurücksetzten. (Nicht Fertig)
          </Button>
          <Button
            className={styles.mBtn}
            onClick={() => {
              handleReset("");
            }}
          >
            Private Fragen zurücksetzten. (Nicht Fertig)
          </Button>
          <Button
            className={styles.mBtn}
            onClick={() => {
              handleReset("");
            }}
          >
            Schätzufragen zurücksetzten. (Nicht Fertig)
          </Button>
          <Button
            className={styles.mBtn}
            onClick={() => {
              handleReset("");
            }}
          >
            Zoom Videos zurücksetzten. (Nicht Fertig)
          </Button>
          <Button
            className={styles.mBtn}
            onClick={() => {
              handleReset("");
            }}
          >
            Bilder Erraten zurücksetzten. (Nicht Fertig)
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Schließen
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StatusModal;
