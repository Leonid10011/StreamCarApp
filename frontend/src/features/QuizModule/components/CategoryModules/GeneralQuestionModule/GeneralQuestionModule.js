import GeneralQuestionContent from "features/QuizModule/components/CategoryModules/GeneralQuestionModule/GeneralQuestionContent/GeneralQuestionContent";
import ModuleComponent from "features/QuizModule/components/CategoryModules/ModuleComponent/ModuleComponent";
import useLocalFetch from "hooks/useLocalFetch";
import { React } from "react";

const GeneralQuestionModule = () => {
  const { getRandomQuestionsGeneral } = useLocalFetch();

  return (
    <ModuleComponent
      fetchFunction={getRandomQuestionsGeneral}
      noDataText={"Keine Allgemeinwissen Fragen vorhanden"}
      ContentComponent={GeneralQuestionContent}
    />
  );
};

export default GeneralQuestionModule;
