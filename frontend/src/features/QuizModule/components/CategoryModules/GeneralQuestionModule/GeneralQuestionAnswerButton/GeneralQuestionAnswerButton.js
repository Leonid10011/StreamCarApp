import { Button } from "react-bootstrap";
import styles from "./GeneralQuestionAnswerButton.module.css";
import { useRef } from "react";

const GeneralQuestionAnswerButton = ({
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
      const { current: btn } = btnRef;

      if (!clickedOnce) {
        btn.classList.add(styles.locked);
        setTimeout(() => {
          if (!isCorrect) {
            setWasWrong(true);
          }
          btn.classList.remove(styles.locked);
          btn.classList.add(isCorrect ? styles.correct : styles.wrong);
          console.log("test");
        }, 500);
      }

      handleAnswerClick();
    }
  };

  return (
    <Button
      ref={btnRef}
      className={`${styles.generalAnswerButton} ${
        wasWrong && isCorrect ? styles.correct : ""
      }`}
      onClick={handleClick}
    >
      {number + ": " + answer.replace("#", "")}
    </Button>
  );
};

export default GeneralQuestionAnswerButton;
