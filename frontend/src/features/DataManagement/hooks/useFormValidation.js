import { isListLengthEqual, hasEachAnswerThreeOptions, isEmpty } from "validation/validationHelpers";

const useFormValidation = (formData) => {
  const validate = () => {
    const questionList = formData.questions.split("\n");
    const answerList = formData.answers.split("\n");

    if (!(isListLengthEqual(questionList, answerList) && hasEachAnswerThreeOptions(answerList) && !isEmpty(questionList) && !isEmpty(answerList))) {
      return { isValid: false, message: "Jede Frage braucht 3 Antworten und Zeilen dürfen nicht leer sein." };
    }

    return { isValid: true };
  };

  return { validate };
};

export default useFormValidation;
