import { useEffect, useState } from "react";
import "./AnimatedText.css";

const shuffleArray = (array) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const AnimatedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(
    Array(text.length).fill("_")
  );
  const [shuffledIndexes, setShuffledIndexes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const indexes = shuffleArray([...Array(text.length).keys()]);
    setShuffledIndexes(indexes);
  }, [text]);

  useEffect(() => {
    if (shuffledIndexes.length === 0 || currentIndex >= text.length) {
      return;
    }

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const next = [...prev];
        const indexToUpdate = shuffledIndexes[currentIndex];
        next[indexToUpdate] = text[indexToUpdate];
        return next;
      });
      setCurrentIndex((prev) => prev + 1);
    }, 40);

    return () => clearInterval(interval);
  }, [shuffledIndexes, currentIndex, text]);

  return <div className="animated-text">{displayedText.join("")}</div>;
};

export default AnimatedText;
