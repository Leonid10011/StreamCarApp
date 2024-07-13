import {
  getRemoteImagesGuess,
  getRemoteQuestionEstimate,
  getRemoteQuestionGeneral,
  getRemoteQuestionPrivate,
  getRemoteVideoZoom,
} from "../services/api";
import { useQuizStatus } from "../context/useQuizStatus";
import { getRandomData } from "./hookUtils";
import { useCallback } from "react";

const useLocalFetch = () => {
  const { setUpdate } = useQuizStatus();
  // fetch data from API and store in local storage
  const setLocalData = useCallback(async () => {
    const questionsGeneral = await getRemoteQuestionGeneral();
    const questionsPrivate = await getRemoteQuestionPrivate();
    const questionsEstimate = await getRemoteQuestionEstimate();
    const videosZoom = await getRemoteVideoZoom();
    const imagesGuess = await getRemoteImagesGuess();

    // get the length of the data for status update
    const dataSizes = {
      allgeminWissen: questionsGeneral.length,
      privateFragen: questionsPrivate.length,
      schaetzFragen: questionsEstimate.length,
      zoomVideos: videosZoom.length,
      bilderErraten: imagesGuess.length,
    };
    localStorage.setItem("refetch", JSON.stringify(true));
    localStorage.setItem("grossSizes", JSON.stringify(dataSizes));
    localStorage.setItem("questionsGeneral", JSON.stringify(questionsGeneral));
    localStorage.setItem("questionsPrivate", JSON.stringify(questionsPrivate));
    localStorage.setItem(
      "questionsEstimate",
      JSON.stringify(questionsEstimate)
    );
    localStorage.setItem("videosZoom", JSON.stringify(videosZoom));
    localStorage.setItem("imagesGuess", JSON.stringify(imagesGuess));

    //setUpdate((prev) => prev + 1);
  }, []);

  // specify functions for random items
  const getRandomQuestionsGeneral = () => getRandomData("questionsGeneral");
  const getRandomQuestionsPrivate = () => getRandomData("questionsPrivate");
  const getRandomQuestionsEstimate = () => getRandomData("questionsEstimate");
  const getRandomImagesGuess = () => getRandomData("imagesGuess");
  const getRandomVideosZoom = () => getRandomData("videosZoom");

  // get the length of the data of stored data and of data in database
  // if it doesn't exists set to 0
  const getStatus = () => {
    const netSizes = {
      netQg: localStorage.getItem("questionsGeneral")
        ? JSON.parse(localStorage.getItem("questionsGeneral")).length
        : 0,
      netQp: localStorage.getItem("questionsPrivate")
        ? JSON.parse(localStorage.getItem("questionsPrivate")).length
        : 0,
      netQe: localStorage.getItem("questionsEstimates")
        ? JSON.parse(localStorage.getItem("questionsEstimates")).length
        : 0,
      netVz: localStorage.getItem("videosZoom")
        ? JSON.parse(localStorage.getItem("videosZoom")).length
        : 0,
      netIg: localStorage.getItem("imagesGuess")
        ? JSON.parse(localStorage.getItem("imagesGuess")).length
        : 0,
    };

    const grossSizes = JSON.parse(localStorage.getItem("grossSizes"));

    return { netSizes, grossSizes };
  };

  //
  const firstInit = useCallback(() => {
    const test = JSON.parse(localStorage.getItem("grossSizes"));
    const forceRefetch = JSON.parse(localStorage.getItem("refetch"));
    // if gross size is empty refetech data
    if (test === null || test === "" || forceRefetch === null) {
      setLocalData();
    }
  }, [setLocalData]);

  return {
    setLocalData,
    getRandomQuestionsEstimate,
    getRandomQuestionsGeneral,
    getRandomQuestionsPrivate,
    getRandomImagesGuess,
    getRandomVideosZoom,
    getStatus,
    firstInit,
  };
};

export default useLocalFetch;
