import React from "react";
import InputArea from "features/DataManagement/components/InputArea/InputArea";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import { postQuestionToApi } from "services/api";
import ActionButton from "features/DataManagement/components/ActionButton/ActionButton";
import useManageItems from "features/DataManagement/hooks/useManageItems";

const AddPrivateQuestions = () => {
  const [formData, setFormData] = React.useState("");

  const handleUpload = () => {
    if (formData === "") {
      throw new Error("Mindestens eine Frage eingeben");
    }
    const questionList = formData.split("\n");

    for (let i = 0; i < questionList.length; i++) {
      const reqDocument = {
        question: questionList[i],
      };
      postQuestionToApi("private", reqDocument);
    }
  };

  const { postItem } = useManageItems({
    postFunc: handleUpload,
  });

  return (
    <DataManagementContainer
      name={"Private Fragen Hinzufügen"}
      destination={"/questions/manage/private"}
      buttonName={"Private Fragen Verwalten"}
      buttons={<ActionButton text={"Fragen Hinzufügen"} onClick={postItem} />}
      content={<InputArea data={formData} setData={setFormData} />}
    />
  );
};

export default AddPrivateQuestions;
