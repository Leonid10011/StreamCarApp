import AddGeneralQuestions from "features/DataManagement/components/CategoryModules/GeneralQuestions/AddGeneralQuestions/AddGeneralQuestions";
import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";

const AddGeneralQuestionPage = () => {
  return (
    <MenuContainer title={"Allgemeinwissen Hinzufügen"}>
      <AddGeneralQuestions />
    </MenuContainer>
  );
};

export default AddGeneralQuestionPage;
