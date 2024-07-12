import { useQuizData } from "context/useQuizData";
import {
  deleteImages,
  deleteQuestionsFromApi,
  deleteVideos,
} from "../services/api";

const useDeleteFromApiAndLocalStorage = () => {
  const { dispatch } = useQuizData();

  const deleteGeneral = async () => {
    try {
      await deleteQuestionsFromApi("general");
      localStorage.removeItem("questionsGeneral");
      dispatch({ type: "DELETE_GENERAL_QUESTIONS" });
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteEstimate = async () => {
    try {
      await deleteQuestionsFromApi("estimate");
      localStorage.removeItem("questionsEstimate");
      dispatch({ type: "DELETE_ESTIMATE_QUESTIONS" });
    } catch (error) {
      throw new Error(error);
    }
  };

  const deletePrivate = async () => {
    try {
      await deleteQuestionsFromApi("private");
      localStorage.removeItem("questionsPrivate");
      dispatch({ type: "DELETE_PRIVATE_QUESTIONS" });
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteGuess = async () => {
    try {
      await deleteImages("guess");
      localStorage.removeItem("imagesGuess");
      dispatch({ type: "DELETE_IMAGES_GUESS" });
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteZoom = async () => {
    try {
      await deleteVideos("zoom");
      localStorage.removeItem("videosZoom");
      dispatch({ type: "DELETE_VIDEOS_ZOOM" });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    deleteGeneral,
    deleteEstimate,
    deletePrivate,
    deleteZoom,
    deleteGuess,
  };
};

export default useDeleteFromApiAndLocalStorage;
