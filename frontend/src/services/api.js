import { handleRequest, removeLeadingNumberDot } from "./apiUtils";
import logger from "utils/logger";

const getRemoteQuestionGeneral = async () => {
  try {
    const response = await handleRequest("get", `/questions/general/`);
    logger.info("Response data", response);

    const freshData = response.map((d) => {
      const answers = d.answers;

      const cleared = answers.map((a, i) => {
        return i === 0 ? removeLeadingNumberDot(a) : a.trim();
      });

      const newData = {
        _id: d._id,
        question: removeLeadingNumberDot(d.question),
        answers: cleared,
        listName: removeLeadingNumberDot(d.question),
      };

      return newData;
    });

    return freshData;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

const getRemoteQuestionPrivate = async () => {
  try {
    const response = await handleRequest("get", `/questions/private/`);
    logger.info("Response data", response);

    const freshData = response.map((d) => ({
      _id: d._id,
      question: removeLeadingNumberDot(d.question),
      listName: removeLeadingNumberDot(d.question),
    }));

    return freshData;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

const getRemoteQuestionEstimate = async () => {
  try {
    const response = await handleRequest("get", `/questions/estimate/`);
    logger.info("Response data", response);

    const freshData = response.map((d) => ({
      _id: d._id,
      question: removeLeadingNumberDot(d.question),
      answer: removeLeadingNumberDot(d.answer),
      listName: removeLeadingNumberDot(d.question),
    }));

    return freshData;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

const postQuestionToApi = (type, questionDocument) =>
  handleRequest("post", `/questions/${type}/`, questionDocument);
const deleteQuestionFromApi = (type, objectId) =>
  handleRequest("delete", `/questions/${type}/${objectId}`);
const deleteQuestionsFromApi = (type) =>
  handleRequest("delete", `/questions/${type}`);

const getRemoteImagesGuess = async () => {
  try {
    const response = await handleRequest("get", "/images/guess");

    const imageData = response.map((d) => ({
      _id: d._id,
      location: d.location,
      question: d.question,
      answer: d.answers,
      listName: d.answers,
    }));

    return imageData;
  } catch (error) {
    logger.info(error.message);
    throw error;
  }
};

const postImage = (type, imageDocument) =>
  handleRequest("post", `/images/${type}/`, imageDocument);
const deleteImage = (type, objectId) =>
  handleRequest("delete", `/images/${type}/${objectId}`);
const deleteImages = (type) => handleRequest("delete", `/images/${type}/`);

const getVideo = (type) => handleRequest("get", `/videos/${type}/`);
const getRemoteVideoZoom = async () => {
  try {
    const response = await handleRequest("get", "/videos/zoom");

    const videoData = response.map((d) => ({
      _id: d._id,
      link: d.link,
      question: d.question,
      answer: d.answer,
      listName: d.link,
    }));

    return videoData;
  } catch (error) {
    logger.info(error.message);
    throw error;
  }
};
const getRandomVideo = (type) => handleRequest("get", `/videos/${type}/random`);
const postVideo = (type, videoDocument) =>
  handleRequest("post", `/videos/${type}/`, videoDocument);
const deleteVideo = (type, objectId) =>
  handleRequest("delete", `/videos/${type}/${objectId}`);
const deleteVideos = (type) => handleRequest("delete", `/videos/${type}/`);

const getNotificationsByUserId = (userId) =>
  handleRequest("get", `/notifications/user/${userId}`);
const markNotificationAsRead = (userId, notificationId) =>
  handleRequest("put", `/notifications/readstatus/${userId}/${notificationId}`);

const loginUser = async (username, password, role) => {
  console.log("env: ", process.env.REACT_APP_USERNAME);
  const loginData = {
    email: username,
    role,
    password,
  };
  const res = await handleRequest("post", "/users/login", loginData);
  if (res.success && res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res;
};

export {
  postQuestionToApi,
  deleteQuestionFromApi,
  postImage,
  deleteImage,
  postVideo,
  getVideo,
  deleteVideo,
  getRandomVideo,
  getRemoteQuestionEstimate,
  getRemoteQuestionPrivate,
  getRemoteQuestionGeneral,
  getRemoteVideoZoom,
  getRemoteImagesGuess,
  getNotificationsByUserId,
  markNotificationAsRead,
  loginUser,
  deleteQuestionsFromApi,
  deleteVideos,
  deleteImages,
};
