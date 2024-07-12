import { useEffect, useState } from "react";
import "./GuessImageContent.css";
import ShowImageComponent from "features/QuizModule/components/ShowImageComponent/ShowImageComponent";
import SingleAnswerComponent from "features/QuizModule/components/SingleAnswerComponent/SingleAnswerComponent";
import { TIME_TO_SHOW_ANSWER } from "config/config";

const GuessImageContent = ({ data }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationFinished(true);
    }, TIME_TO_SHOW_ANSWER);
  }, []);

  return (
    <div className="main-guess-image-content">
      <div className="main-guess-image-upper">
        <ShowImageComponent url={data.location} />
      </div>
      <div className="main-guess-image-lower">
        <SingleAnswerComponent
          answer={data.answer.slice(0, -4)}
          animationFinished={animationFinished}
        />
      </div>
    </div>
  );
};

export default GuessImageContent;
