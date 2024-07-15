import { Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./SingleAnswerComponent.module.css";

const SingleAnswerComponent = ({ answer, animationFinished }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      {showAnswer ? (
        <div className={styles.answerBox}>{answer}</div>
      ) : (
        <Button
          className={styles.answerButton}
          disabled={!animationFinished}
          onClick={handleClick}
        >
          Antwort
        </Button>
      )}
    </div>
  );
};

export default SingleAnswerComponent;
