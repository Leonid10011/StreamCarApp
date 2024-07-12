import InputArea from "features/DataManagement/components/InputArea/InputArea";
import { Form } from "react-bootstrap";

const AddEstimateQuestionsForm = ({ formData, updateFormData }) => {
  return (
    <Form>
      <InputArea
        data={formData.questions}
        setData={(data) => updateFormData("questions", data ? data : "")}
        ph={"Jede Zeile eine Frage"}
      />
      <InputArea
        data={formData.answer}
        setData={(data) => updateFormData("answer", data ? data : "")}
        ph={"Jede Zeile eine Antwort"}
      />
    </Form>
  );
};

export default AddEstimateQuestionsForm;
