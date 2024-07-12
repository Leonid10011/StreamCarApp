import AnimatedText from "features/QuizModule/components/AnimatedText/AnimatedText";
import SingleAnswerComponent from "features/QuizModule/components/SingleAnswerComponent/SingleAnswerComponent";
import { useState } from "react";
import "./EstimateQuestionContent.css";
const EstimateQuestionContent = ({ ...props }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <div className="main-estiamte-question-content" fluid>
      <div className="main-estiamte-question-upper">
        <AnimatedText
          text={props.question}
          setAnimStop={setAnimationFinished}
        />
      </div>
      <div className="main-estiamte-question-lower">
        <SingleAnswerComponent
          answer={props.answer}
          animationFinished={animationFinished}
        />
      </div>
    </div>
  );
};

export default EstimateQuestionContent;
