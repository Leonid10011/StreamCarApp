import React, { createContext, useState, useContext } from 'react';

export const QuizStatusContext = createContext();

export const useQuizStatus = () => useContext(QuizStatusContext);

export const QuizStatusProvider = ({ children }) => {
    
    const [update, setUpdate] = useState(0);
    const [showStatusbar, setShowStatusbar] = useState(false);

    const [disabledButtons, setDisabledButtons] = useState({
        "btn1": false,
        "btn2": false,
        "btn3": false,
        "btn4": false,
        "btn5": false
    });

    const isAButtonEnabled = (b) => {
        let test = false;
        Object.values(b).forEach(
            v => {if(!v) test = true}
        );
        return test;
    }

    const disableButton = (id) => {
        const newDisable = {...disabledButtons, [id]: true} 
        setDisabledButtons(prev => ({...prev, [id]: true}));
        console.log("wer", newDisable)
        if(Object.keys(newDisable).length === 5){
            if(!isAButtonEnabled(newDisable)){
                setDisabledButtons(
                    {
                        "btn1": false,
                        "btn2": false,
                        "btn3": false,
                        "btn4": false,
                        "btn5": false
                    });
            } else {
                console.log("Play on")
            }
        }
    }



    return (
        <QuizStatusContext.Provider value={{ disabledButtons, disableButton, update, setUpdate, showStatusbar, setShowStatusbar }}>
            {children}
        </QuizStatusContext.Provider>
    );
};