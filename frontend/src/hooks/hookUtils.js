import logger from "../utils/logger";

// Get random item from local storage for a category
const getRandomData = (category) => {
  logger.info("Getting Random data for '", category, "' from local storage");
  const qData = JSON.parse(localStorage.getItem(category));
  console.log(!qData);
  if (!qData || qData.length <= 0) return null;
  //throw new Error("No data available in locale storage");

  const randomIndex = Math.floor(Math.random() * qData.length);
  const randomItem = qData[randomIndex];
  qData.splice(randomIndex, 1);
  localStorage.setItem(category, JSON.stringify([...qData]));
  logger.info(category, " size: ", qData.length);
  logger.info("Random data chosen: ", randomItem);
  return randomItem;
};

export { getRandomData };
