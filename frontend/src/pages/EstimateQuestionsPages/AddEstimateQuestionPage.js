import AddEstimationQuestions from "features/DataManagement/components/CategoryModules/Schaetzfragen/AddEstimateQuestions/AddEstimateQuestions";
import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";

const AddEstimateQuestionPage = () => {
  return (
    <MenuContainer title={"Schätzfragen Hinzufügen"}>
      <AddEstimationQuestions />
    </MenuContainer>
  );
};

export default AddEstimateQuestionPage;
