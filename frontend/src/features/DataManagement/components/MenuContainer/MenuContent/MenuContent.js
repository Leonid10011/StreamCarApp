import { Container } from "react-bootstrap";
import "./MenuContent.css";
import MenuTitle from "features/DataManagement/components/MenuContainer/MenuTitle/MenuTitle";

const MenuContent = ({ children, title }) => {
  return (
    <Container className="menu-content">
      <MenuTitle title={title} />
      <div className="menu-item-wrapper">
        {children}
      </div>
    </Container>
  );
};

export default MenuContent;
