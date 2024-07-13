import { Container } from "react-bootstrap";
import styles from "./MenuContent.module.css";
import MenuTitle from "features/DataManagement/components/MenuContainer/MenuTitle/MenuTitle";

const MenuContent = ({ children, title }) => {
  return (
    <Container className={styles.menuContent}>
      <MenuTitle title={title} />
      <div className={styles.menuItemWrapper}>{children}</div>
    </Container>
  );
};

export default MenuContent;
