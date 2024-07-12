import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./MenuContainer.css";
import MenuContent from "features/DataManagement/components/MenuContainer/MenuContent/MenuContent";

const MenuContainer = ({ children, title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Container fluid className="main-menu-container">
      <Navbar bg="light" expand="lg" fixed="top" className="menu-navbar">
        <Navbar.Brand href="/">AppName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleHome}>Home</Nav.Link>
            <Nav.Link onClick={handleBackClick}>Zurück</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="content-row">
        <Col className="content-col">
          <MenuContent children={children} title={title} />
        </Col>
      </Row>
    </Container>
  );
};

export default MenuContainer;
