import AnimatedText from "features/QuizModule/components/AnimatedText/AnimatedText";
import "./PrivateQuestionContent.css";

const PrivateQuestionContent = ({ data }) => {
  return (
    <div className="main-general-question-content">
      <div>
        <AnimatedText text={data.question} />
      </div>
    </div>
  );
};

export default PrivateQuestionContent;
