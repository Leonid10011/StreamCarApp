import { Col, Container, Row } from "react-bootstrap";
import "./GeneralQuestionContent.css";
import { useEffect, useState } from "react";
import AnimatedText from "features/QuizModule/components/AnimatedText/AnimatedText";
import GeneraQuestionAnswerButton from "features/QuizModule/components/CategoryModules/GeneralQuestionModule/GeneralQuestionAnswerButton/GeneralQuestionAnswerButton";

const GeneralQuestionContent = ({ data }) => {
  const [clickedOnce, setClickedOnce] = useState(false);
  const [wasWrong, setWasWrong] = useState(false);

  const handleAnswerClick = () => {
    setClickedOnce(true);
  };

  useEffect(() => {}, [clickedOnce]);

  return (
    <div className="main-general-question-content">
      <div>
        <AnimatedText text={data.question} />
      </div>
      <Container className="button-container" fluid>
        <Row>
          <Col>
            <GeneraQuestionAnswerButton
              clickedOnce={clickedOnce}
              handleAnswerClick={handleAnswerClick}
              answer={data.answers[0]}
              number={"A"}
              wasWrong={wasWrong}
              setWasWrong={setWasWrong}
              isCorrect={data.answers[0].charAt(0) === "#"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <GeneraQuestionAnswerButton
              clickedOnce={clickedOnce}
              handleAnswerClick={handleAnswerClick}
              answer={data.answers[1]}
              number={"B"}
              wasWrong={wasWrong}
              setWasWrong={setWasWrong}
              isCorrect={data.answers[1].charAt(0) === "#"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <GeneraQuestionAnswerButton
              clickedOnce={clickedOnce}
              handleAnswerClick={handleAnswerClick}
              answer={data.answers[2]}
              number={"C"}
              wasWrong={wasWrong}
              setWasWrong={setWasWrong}
              isCorrect={data.answers[2].charAt(0) === "#"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GeneralQuestionContent;
