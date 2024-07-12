import { DELETE_IMAGES_GUESS, SET_IMAGES_GUESS } from "reducers/actionTypes";

export const imageReducer = (state, action) => {
  switch (action.type) {
    case SET_IMAGES_GUESS:
      return { ...state, imagesGuess: action.payload };
    case DELETE_IMAGES_GUESS:
      return {...state, imagesGuess: []};
    default:
      return state;
  }
};