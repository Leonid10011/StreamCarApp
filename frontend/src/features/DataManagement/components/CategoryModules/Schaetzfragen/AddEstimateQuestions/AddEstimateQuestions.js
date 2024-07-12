import { Spinner } from "react-bootstrap";
import React, { useState } from "react";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import AddEstimateQuestionsForm from "features/DataManagement/components/CategoryModules/Schaetzfragen/AddEstimateQuestions/AddEstimateQuestionsForm";
import ActionButton from "features/DataManagement/components/ActionButton/ActionButton";
import useManageItems from "features/DataManagement/hooks/useManageItems";
import addQuestion from "features/DataManagement/helpers/addQuestion";

function AddEstimationQuestions() {
  const [formData, setFormData] = useState({
    questions: "",
    answer: "",
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const { loading, postItem } = useManageItems({
    postFunc: () => addQuestion(formData, "estimate"),
  });

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <DataManagementContainer
          name={"Schätzfragen Hinzufügen"}
          destination={"/questions/manage/estimate"}
          buttonName={"Schätzfragen Verwalten"}
          buttons={
            <ActionButton text={"Fragen Hinzufügen"} onClick={postItem} />
          }
          content={
            <AddEstimateQuestionsForm
              formData={formData}
              updateFormData={updateFormData}
            />
          }
        />
      )}
    </>
  );
}

export default AddEstimationQuestions;
