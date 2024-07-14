import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CategoryFrame.css";
import ContentFrame from "features/QuizModule/components/CategoryFrame/ContentFrame/ContentFrame";
import SidebarButton from "features/QuizModule/components/CategoryFrame/SidebarButton/SidebarButton";
import { useAction } from "context/useAction";
import { useEffect } from "react";

const CategoryFrame = ({ content, callback }) => {
  const navigate = useNavigate();

  const { enableStartButton, showStartButton, showBackButton, actionFunction } =
    useAction();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    enableStartButton();
  }, [enableStartButton]);

  return (
    <Container fluid className="main-frame">
      <Row className="h-100">
        <Col
          md={9}
          className="d-flex align-items-center justify-content-center"
        >
          {<ContentFrame content={content} />}
        </Col>
        <Col
          md={3}
          className="h-100 d-flex flex-row flex-md-column align-items-md-center justify-content-center"
          style={{ backgroundColor: "white" }}
        >
          <Row className="d-flex align-items-center justify-content-center qf-btn-row">
            <SidebarButton
              text={"Start"}
              showButton={showStartButton}
              handleClick={() => actionFunction(callback)}
            />
          </Row>
          <Row className="d-flex align-items-center qf-btn-row  justify-content-center">
            <SidebarButton
              showButton={showBackButton}
              text={"Zurück"}
              handleClick={handleBackClick}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryFrame;
