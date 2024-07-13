import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./MenuContainer.module.css";
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
    <Container fluid className={styles.mainMenuContainer}>
      <Navbar bg="light" expand="lg" fixed="top" className={styles.menuNavbar}>
        <Navbar.Brand className={styles.navbarBrand} href="/">
          AppName
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.navLink} onClick={handleHome}>
              Home
            </Nav.Link>
            <Nav.Link className={styles.navLink} onClick={handleBackClick}>
              Zurück
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className={styles.contentRow}>
        <Col className={styles.contentCol}>
          <MenuContent children={children} title={title} />
        </Col>
      </Row>
    </Container>
  );
};

export default MenuContainer;
