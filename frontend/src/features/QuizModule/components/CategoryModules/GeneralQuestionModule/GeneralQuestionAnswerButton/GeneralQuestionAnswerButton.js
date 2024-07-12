import { Button } from "react-bootstrap";
import "./GeneralQuestionAnswerButton.css";
import { useRef } from "react";

const GeneraQuestionAnswerButton = ({
  answer,
  wasWrong,
  setWasWrong,
  ...props
}) => {
  const btnRef = useRef(null);

  const handleAnswerClick = () => {
    if (btnRef.current) {
      const oldStyle = btnRef.current.className;
      if (!props.clickedOnce) {
        btnRef.current.className = oldStyle + " locked";
        setTimeout(() => {
          if (!props.isCorrect) {
            setWasWrong(true);
          }
          btnRef.current.className =
            oldStyle + `${props.isCorrect ? " correct" : " wrong"}`;
          console.log("test");
        }, [500]);
      }

      props.handleAnswerClick();
    }
  };

  return (
    <Button
      ref={btnRef}
      className={`general-answer-button ${
        wasWrong && props.isCorrect ? " correct" : ""
      }`}
      onClick={handleAnswerClick}
    >
      {props.number + ": " + answer.replace("#", "")}
    </Button>
  );
};

export default GeneraQuestionAnswerButton;
