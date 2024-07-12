import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import ManagePrivateQuestions from "features/DataManagement/components/CategoryModules/PrivateQuestions/ManagePrivateQuestions";

const ManagePrivateQuestionsPage = () => {
  return (
    <MenuContainer title={"Private Fragen Verwalten"}>
      <ManagePrivateQuestions />
    </MenuContainer>
  );
};

export default ManagePrivateQuestionsPage;
