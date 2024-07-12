import {
  getRemoteImagesGuess,
  getRemoteQuestionEstimate,
  getRemoteQuestionGeneral,
  getRemoteQuestionPrivate,
  getRemoteVideoZoom,
} from "./api";

// Integration test
localStorage.setItem("token", process.env.REACT_APP_TEST_TOKEN); // load test token

// Test that general questions are well defined and have 3 answer options
test("fetches guestions general from api", async () => {
  const questions = await getRemoteQuestionGeneral();
  questions.forEach((q) => {
    expect(q._id).toBeDefined();
    expect(q.question).toBeDefined();
    expect(q.answers.length).toEqual(3);
    expect(q.listName).toBeDefined();
  });
});

test("fetches private questions from api", async () => {
  const questions = await getRemoteQuestionPrivate();
  questions.forEach((q) => {
    expect(q._id).toBeDefined();
    expect(q.question).toBeDefined();
    expect(q.listName).toBeDefined();
  });
});

test("fetches estimate questions from api", async () => {
  const questions = await getRemoteQuestionEstimate();
  questions.forEach((q) => {
    expect(q._id).toBeDefined();
    expect(q.question).toBeDefined();
    expect(q.answer).toBeDefined();
    expect(q.listName).toBeDefined();
  });
});

test("fetches guess images from api", async () => {
  const images = await getRemoteImagesGuess();
  images.forEach((img) => {
    expect(img._id).toBeDefined();
    expect(img.location).toBeDefined();
    expect(img.question).toBeDefined();
    expect(img.answer).toBeDefined();
    expect(img.listName).toBeDefined();
  });
});

test("fetches guess videos from api", async () => {
  const videos = await getRemoteVideoZoom();
  videos.forEach((vid) => {
    expect(vid._id).toBeDefined();
    expect(vid.link).toBeDefined();
    expect(vid.question).toBeDefined();
    expect(vid.answer).toBeDefined();
    expect(vid.listName).toBeDefined();
  });
});
