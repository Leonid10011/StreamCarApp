import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const DataManagementContainer = ({
  destination = "/",
  buttonName,
  buttons,
  content,
}) => {
  return (
    <Container className="p-3">
      <Col>
        <Row className="m-0">
          <LinkContainer to={destination}>
            <Button className="w-100 rounded text-bg-warning">
              {"Gehe zu: " + buttonName}
            </Button>
          </LinkContainer>
        </Row>
        <Row className="my-3">{content}</Row>
        <Row className="d-flex justify-content-end">{buttons}</Row>
      </Col>
    </Container>
  );
};

export default DataManagementContainer;
