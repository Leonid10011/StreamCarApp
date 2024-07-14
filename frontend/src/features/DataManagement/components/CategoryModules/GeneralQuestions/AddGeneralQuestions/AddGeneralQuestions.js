import React, { useState } from "react";
import useManageItems from "features/DataManagement/hooks/useManageItems";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import AddGeneralQuestionsForm from "features/DataManagement/components/CategoryModules/GeneralQuestions/AddGeneralQuestions/AddGeneralQuestionsForm";
import ActionButton from "features/DataManagement/components/ActionButton/ActionButton";
import Spinner from "react-bootstrap/Spinner";
import addQuestion from "features/DataManagement/helpers/addQuestion";

function AddGeneralQuestions() {
  const [formData, setFormData] = useState(null);

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const { loading, postItem } = useManageItems({
    postMessage: "Fragen erfolgreich hochgeladen.",
    postFunc: () => addQuestion(formData, "general"),
  });

  return (
    <>
      <DataManagementContainer
        name={"Allgemeinwissen Hinzufügen"}
        destination={"/questions/manage/general"}
        buttonName={"Allgemeine Fragen verwalten"}
        buttons={
          loading ? (
            <div className="d-flex justify-content-center my-4 p-4 w-100 bg-primary">
              <Spinner animation="border" role="status" />
            </div>
          ) : (
            <ActionButton text={"Fragen Hinzufügen"} onClick={postItem} />
          )
        }
        content={
          <AddGeneralQuestionsForm
            formData={formData}
            updateFormData={updateFormData}
          />
        }
      />
    </>
  );
}

export default AddGeneralQuestions;
