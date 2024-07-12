import "./PrivateQuestionModule.css";
import useLocalFetch from "hooks/useLocalFetch";
import PrivateQuestionContent from "features/QuizModule/components/CategoryModules/PrivateQuestionModule/PrivateQuestionContent/PrivateQuestionContent";
import ModuleComponent from "features/QuizModule/components/CategoryModules/ModuleComponent/ModuleComponent";

const PrivateQuestionModule = () => {
  const { getRandomQuestionsPrivate } = useLocalFetch();

  return (
    <ModuleComponent
      fetchFunction={getRandomQuestionsPrivate}
      noDataText={"Keine privaten Fragen vorhanden"}
      ContentComponent={PrivateQuestionContent}
    />
  );
};

export default PrivateQuestionModule;
