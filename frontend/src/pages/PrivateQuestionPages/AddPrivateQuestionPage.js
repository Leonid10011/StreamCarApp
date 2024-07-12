import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import AddPrivateQuestions from "features/DataManagement/components/CategoryModules/PrivateQuestions/AddPrivateQuestions";

const AddPrivateQuestionPage = () => {
  return (
    <MenuContainer title={"Private Fragen Hinzufügen"}>
      <AddPrivateQuestions />
    </MenuContainer>
  );
};

export default AddPrivateQuestionPage;
