import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import ManageEstimateQuestions from "features/DataManagement/components/CategoryModules/Schaetzfragen/ManageEstimateQuestions";

const ManageEstimateQuestionsPage = () => {
  return (
    <MenuContainer title={"Schätzfragen Verwalten"}>
      <ManageEstimateQuestions />
    </MenuContainer>
  );
};

export default ManageEstimateQuestionsPage;
