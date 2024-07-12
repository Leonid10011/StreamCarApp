import {DELETE_VIDEOS_ZOOM, SET_VIDEOS_ZOOM } from "reducers/actionTypes";

export const videosReducer = (state, action) => {
  switch (action.type) {
    case SET_VIDEOS_ZOOM:
      return { ...state, videosZoom: action.payload };
    case DELETE_VIDEOS_ZOOM:
      return {...state, videosZoom: []};
    default:
      return state;
  }
};