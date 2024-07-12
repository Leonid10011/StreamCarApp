import EstimateQuestionContent from "features/QuizModule/components/CategoryModules/EstimateQuestionContent/EstimateQuestionContent";
import ModuleComponent from "features/QuizModule/components/CategoryModules/ModuleComponent/ModuleComponent";
import PlayVideoComponent from "features/QuizModule/components/PlayVideoComponent/PlayVideoComponent";
import useLocalFetch from "hooks/useLocalFetch";
import { useState } from "react";

const BattleRoyalModule = () => {
  const [randomChoice] = useState(Math.floor(Math.random() * 2));

  const { getRandomQuestionsEstimate, getRandomVideosZoom } = useLocalFetch();

  return (
    <ModuleComponent
      fetchFunction={
        randomChoice === 0 ? getRandomQuestionsEstimate : getRandomVideosZoom
      }
      startFrameText={"Start Drücken"}
      ContentComponent={
        randomChoice === 0 ? EstimateQuestionContent : PlayVideoComponent
      }
    />
  );
};

export default BattleRoyalModule;
