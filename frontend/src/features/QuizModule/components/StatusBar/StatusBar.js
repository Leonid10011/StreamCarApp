import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./StatusBar.css";
import { useQuizStatus } from "context/useQuizStatus";
import useLocalFetch from "hooks/useLocalFetch";
import StatusModal from "features/QuizModule/components/Modal/StatusModal";

const nameMapping = (name) => {
    if(name === "allgeminWissen")
        return "Allgemeinwissen"
    else if(name === "privateFragen")
        return "Private Fragen"
    else if(name === "schaetzFragen")
        return "Schätz Fragen"
    else if(name === "zoomVideos")
        return "Zoom Videos"
    else if(name === "bilderErraten")
        return "Bilder Erraten"
}

const StatusBar = ({ setShowStatusbar }) => {
    const { update } = useQuizStatus();
    const { getStatus } = useLocalFetch();
    const [net, setNet] = useState([]);
    const [names, setNames] = useState([]);
    const [gross, setGross] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const test = getStatus();
        setNames(Object.keys(test["grossSizes"]));
        setNet(Object.values(test["netSizes"]));
        setGross(Object.values(test["grossSizes"]));
    }, [update]);

    const handleShow = () => setShow(true);

    return (
        <>
            <div className="sb-container">
                <div className="sb-header">
                    <i className="bi bi-x-circle" onClick={() => setShowStatusbar(false)}></i>
                </div>
                <div className="sb-status-items">
                    {net.map((a, i) => (
                        <StatusItem key={i} name={nameMapping(names[i])} low={net[i]} high={gross[i]} />
                    ))}
                </div>
                <Button onClick={handleShow} className="sb-btn-reset">
                    <b>RESET</b> <br /> (Klicke für Optionen)
                </Button>
            </div>
            <StatusModal show={show} setShow={setShow} />
        </>
    );
}

const StatusItem = ({ name, low, high }) => {
    return (
        <div className="sb-item">
            <span className="sb-item-name">{name}:</span>
            <br />
            <span className="sb-item-values">{low}/{high}</span>
        </div>
    );
}

export default StatusBar;
