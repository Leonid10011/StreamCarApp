import { Button } from "react-bootstrap";
import styles from "./SidebarButton.module.css";

const SidebarButton = ({ text, handleClick, showButton }) => {
  return (
    <Button
      className={styles.sideBtn}
      onClick={handleClick}
      disabled={!showButton}
    >
      {text}
    </Button>
  );
};

export default SidebarButton;
