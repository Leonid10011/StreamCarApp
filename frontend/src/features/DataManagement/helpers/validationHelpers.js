// validationHelpers.js
export const isListLengthEqual = (questionList, answerList) => {
  if (questionList.length !== answerList.length) {
    console.log(
      "Questions length does not match Answers length",
      questionList.length,
      " ",
      answerList.length
    );
    return false;
  }
  return true;
};

export const hasEachAnswerThreeOptions = (answerList) => {
  for (let a of answerList) {
    if (a.split(";").length !== 3) {
      console.log("Each answer needs 3 options: " + a);
      return false;
    }
  }
  return true;
};

export const isEmpty = (list) => {
  for (let e of list) {
    if (e.trim() === "") {
      console.log("No empty questions please");
      return true;
    }
  }
  return false;
};
