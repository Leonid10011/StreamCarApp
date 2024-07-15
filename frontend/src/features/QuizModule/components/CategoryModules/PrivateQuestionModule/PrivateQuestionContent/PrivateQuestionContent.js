import AnimatedText from "features/QuizModule/components/AnimatedText/AnimatedText";

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
