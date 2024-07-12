import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizMenu.css";
import { QuizStatusContext } from "context/useQuizStatus";
import QuizMenuContent from "features/QuizModule/components/QuizMenu/QuizMenuContent/QuizMenuContent";
import CategoryFrame from "features/QuizModule/components/CategoryFrame/CategoryFrame";
import { useAction } from "context/useAction";

const QuizMenu = ({ ...props }) => {
  const buttons = [
    { to: "/quizmodule/general", text: "Allgemeinwissen 1", id: "btn1" },
    { to: "/quizmodule/general", text: "Allgemeinwissen 2", id: "btn2" },
    { to: "/quizmodule/private", text: "Private Frage", id: "btn3" },
    { to: "/quizmodule/vs", text: "Alle Gegen Alle", id: "btn4" },
    { to: "/quizmodule/guess", text: "Bilder Erraten", id: "btn5" },
  ];

  // Initialize state to keep track of disabled buttons
  const { disabledButtons, disableButton } = useContext(QuizStatusContext);

  const [currentStyle, setCurrentStyle] = useState("");
  const [randomChoice, setRandomChoice] = useState("");

  const { action } = useAction();

  const navigate = useNavigate();

  const chooseRandomLink = () => {
    const enabledButtons = buttons.filter(
      (button) => !disabledButtons[button.id]
    );
    const randomLink = Math.floor(
      Math.random() * Object.keys(enabledButtons).length
    );
    const randomLinkValue = Object.values(enabledButtons)[randomLink];
    setRandomChoice((prev) => randomLinkValue.id);
    return randomLinkValue;
  };

  const startFunction = () => {
    return new Promise((resolve, reject) => {
      let interval;
      let timeout;

      console.log("Action!: ", action);
      interval = setInterval(() => {
        console.log("Intervall", currentStyle);
        setCurrentStyle((prevStyle) =>
          prevStyle === "btn-out" ? "" : "btn-out"
        );
      }, 200);

      timeout = setTimeout(() => {
        clearInterval(interval);
        const rand = chooseRandomLink();
        disableButton(rand.id);
        setTimeout(() => {
          navigate(rand.to);
          resolve();
        }, 3000);
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
        reject();
      };
    });
  };

  return (
    <CategoryFrame
      content={
        <QuizMenuContent
          currentStyle={currentStyle}
          randomChoice={randomChoice}
          buttons={buttons}
        />
      }
      callback={startFunction}
    />
  );
};

export default QuizMenu;
