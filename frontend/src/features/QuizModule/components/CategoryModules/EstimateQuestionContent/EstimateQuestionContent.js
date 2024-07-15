import AnimatedText from "features/QuizModule/components/AnimatedText/AnimatedText";
import SingleAnswerComponent from "features/QuizModule/components/SingleAnswerComponent/SingleAnswerComponent";
import { useState } from "react";
import styles from "./EstimateQuestionContent.module.css";
const EstimateQuestionContent = ({ question, answer }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <div className={styles.mainEstimateQuestionContent} fluid>
      <div className={styles.mainEstimateQuestionUpper}>
        <AnimatedText text={question} setAnimStop={setAnimationFinished} />
      </div>
      <div className={styles.mainEstimateQuestionLower}>
        <SingleAnswerComponent
          answer={answer}
          animationFinished={animationFinished}
        />
      </div>
    </div>
  );
};

export default EstimateQuestionContent;
