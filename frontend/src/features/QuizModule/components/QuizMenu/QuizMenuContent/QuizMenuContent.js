import { QuizStatusContext, useQuizStatus } from "context/useQuizStatus";
import StatusBar from "features/QuizModule/components/StatusBar/StatusBar";
import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const QuizMenuContent = ({ currentStyle, randomChoice, buttons }) => {
  const { showStatusbar, setShowStatusbar } = useQuizStatus();

  const { disabledButtons, disableButton } = useContext(QuizStatusContext);

  return (
    <Container fluid>
      <Col className="d-flex flex-column justify-content-center qm-main">
        <Row className="qm-btn-container">
          {showStatusbar ? (
            <StatusBar setShowStatusbar={setShowStatusbar} />
          ) : (
            <div className="qm-icon">
              {" "}
              <i
                className="bi bi-plus-circle"
                onClick={() => setShowStatusbar(true)}
              ></i>
            </div>
          )}
        </Row>
        <Row>
          {buttons.map((button) => (
            <Row key={button.id} className="mb-3 d-flex justify-content-center">
              <LinkContainer to={button.to}>
                <Button
                  className={`${currentStyle} quiz-menu-btn ${
                    disabledButtons[button.id] ? "btn-in" : ""
                  } ${randomChoice === button.id ? " chosen" : ""}`}
                  onClick={() => disableButton(button.id)}
                >
                  {button.text}
                </Button>
              </LinkContainer>
            </Row>
          ))}
        </Row>
      </Col>
    </Container>
  );
};

export default QuizMenuContent;
