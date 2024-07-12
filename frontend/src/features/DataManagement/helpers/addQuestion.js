import {
  hasEachAnswerThreeOptions,
  isEmpty,
  isListLengthEqual,
} from "features/DataManagement/helpers/validationHelpers";

const { postQuestionToApi } = require("services/api");

const addQuestion = async (formData, type) => {
  try {
    const questionList = formData.questions.split("\n");
    const answerList =
      type === "general"
        ? formData.answers.split("\n")
        : formData.answer.split("\n");

    if (
      !(
        isListLengthEqual(questionList, answerList) &&
        (type === "general" ? hasEachAnswerThreeOptions(answerList) : true) && // only when dealing with general questions check for 3 answers
        !isEmpty(questionList) &&
        !isEmpty(answerList)
      )
    ) {
      throw new Error(
        "Jede Frage braucht 3 Antworten und Zeilen dürfen nicht leer sein."
      );
    }

    for (let i = 0; i < questionList.length; i++) {
      let tmpAnswers;
      if (type === "general") {
        tmpAnswers = answerList[i].split(";");
      } else {
        tmpAnswers = answerList[i];
      }

      const reqDocument =
        type === "general"
          ? {
              question: questionList[i],
              answers: tmpAnswers,
            }
          : {
              question: questionList[i],
              answer: tmpAnswers,
            };
      await postQuestionToApi(type, reqDocument);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default addQuestion;
