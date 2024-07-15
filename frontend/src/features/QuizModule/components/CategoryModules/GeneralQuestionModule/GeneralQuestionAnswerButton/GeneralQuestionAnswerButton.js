import { Button } from "react-bootstrap";
import styles from "./GeneralQuestionAnswerButton.module.css";
import { useRef } from "react";

const GeneraQuestionAnswerButton = ({
  answer,
  wasWrong,
  setWasWrong,
  clickedOnce,
  isCorrect,
  handleAnswerClick,
  number,
}) => {
  const btnRef = useRef(null);

  const handleClick = () => {
    if (btnRef.current) {
      const oldStyle = btnRef.current.className;
      if (!clickedOnce) {
        btnRef.current.className = oldStyle + " locked";
        setTimeout(() => {
          if (!isCorrect) {
            setWasWrong(true);
          }
          btnRef.current.className =
            oldStyle + `${isCorrect ? " correct" : " wrong"}`;
          console.log("test");
        }, [500]);
      }

      handleAnswerClick();
    }
  };

  return (
    <Button
      ref={btnRef}
      className={`general-answer-button ${
        wasWrong && isCorrect ? " correct" : ""
      }`}
      onClick={handleClick}
    >
      {number + ": " + answer.replace("#", "")}
    </Button>
  );
};

export default GeneraQuestionAnswerButton;
