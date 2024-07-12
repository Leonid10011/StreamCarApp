import InputArea from "features/DataManagement/components/InputArea/InputArea";
import React from "react";
import { Form } from "react-bootstrap";

const AddGeneralQuestionsForm = ({ formData, updateFormData }) => {
  return (
    <Form>
      <InputArea
        data={formData ? formData.questions : ""}
        setData={(data) => updateFormData("questions", data ? data : "")}
        ph={
          'Format: Jede Zeile eine Frage.\nHinweis: Fragen und Antworten aus einer Text Datei jeweils \nmit copy paste kopieren.\nSätze dürfen mit Nummer, z.B. "12. Beispielsatz" anfangen'
        }
      />
      <InputArea
        data={formData ? formData.answers : ""}
        setData={(data) => updateFormData("answers", data ? data : "")}
        ph={
          'Format: Jede Zeile 3 Antworten\n1. Antwort1;#Antwort2;Antwort3 (Semicolon Trennzeichen)\n";" Nicht in Antworten selbst verwenden!\n2. Richtige Antwort fängt mit Raute(#) an\n3. Wenn keine oder mehr als eine Raute,\ndann ist die Frage im Quiz fehlerhaft'
        }
      />
    </Form>
  );
};

export default AddGeneralQuestionsForm;
