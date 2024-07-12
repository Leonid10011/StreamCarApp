import { initialState } from "reducers/initialState";
import { imageReducer } from "reducers/imagesReducer";
import { videosReducer } from "reducers/videosReducer";
import { questionsReducer } from "reducers/questionsReducer";

export const rootReducer = (state = initialState, action) => {
    let newState = state;
    newState = questionsReducer(newState, action);
    newState = imageReducer(newState, action);
    newState = videosReducer(newState, action);
    return newState;
}