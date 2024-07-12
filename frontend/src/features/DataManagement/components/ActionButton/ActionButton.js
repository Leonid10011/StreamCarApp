import { Button } from "react-bootstrap";

/**
 * Custom button for "Hinzufügen" oder "Verwalten" in Manage Container
 */
const ActionButton = ({text, onClick}) => {

    return(
        <Button className="my-4 p-4 w-100" onClick={onClick}>{text}</Button>
    );
}

export default ActionButton;