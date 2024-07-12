import { Button } from "react-bootstrap";
import "./SidebarButton.css";

const SidebarButton = ({ text, handleClick, showButton }) => {
  return (
    <Button className="side-btn" onClick={handleClick} disabled={!showButton}>
      {text}
    </Button>
  );
};

export default SidebarButton;
