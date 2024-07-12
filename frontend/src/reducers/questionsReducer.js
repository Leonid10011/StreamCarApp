import {DELETE_ESTIMATE_QUESTIONS, DELETE_GENERAL_QUESTIONS, DELETE_PRIVATE_QUESTIONS, SET_ESTIMATE_QUESTIONS, SET_GENERAL_QUESTIONS, SET_PRIVATE_QUESTIONS } from "reducers/actionTypes";

export const questionsReducer = (state, action) => {
  switch (action.type) {
    case SET_GENERAL_QUESTIONS:
      return { ...state, questionsGeneral: action.payload };
    case SET_PRIVATE_QUESTIONS:
      return { ...state, questionsPrivate: action.payload };
    case SET_ESTIMATE_QUESTIONS:
      return { ...state, questionsEstimate: action.payload };
    case DELETE_ESTIMATE_QUESTIONS:
      return {...state, questionsEstimate: []};
    case DELETE_PRIVATE_QUESTIONS:
      return {...state, questionsPrivate: []};
    case DELETE_GENERAL_QUESTIONS:
      return {...state, questionsGeneral: []};
    default:
      return state;
  }
};