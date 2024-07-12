import ManageGeneralQuestions from "features/DataManagement/components/CategoryModules/GeneralQuestions/ManageGeneralQuetsions/ManageGeneralQuestions";
import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";

const ManageGeneralQuestionsPage = () => {
  return (
    <MenuContainer title={"Allgemein Verwalten"}>
      <ManageGeneralQuestions />
    </MenuContainer>
  );
};

export default ManageGeneralQuestionsPage;
