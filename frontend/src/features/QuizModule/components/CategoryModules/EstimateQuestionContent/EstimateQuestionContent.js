import AnimatedText from "features/QuizModule/components/AnimatedText/AnimatedText";
import SingleAnswerComponent from "features/QuizModule/components/SingleAnswerComponent/SingleAnswerComponent";
import styles from "./EstimateQuestionContent.module.css";
const EstimateQuestionContent = ({ data }) => {
  return (
    <div className={styles.mainEstimateQuestionContent} fluid>
      <div className={styles.mainEstimateQuestionUpper}>
        <AnimatedText text={data.question} />
      </div>
      <div className={styles.mainEstimateQuestionLower}>
        <SingleAnswerComponent answer={data.answer} animationFinished={true} />
      </div>
    </div>
  );
};

export default EstimateQuestionContent;
