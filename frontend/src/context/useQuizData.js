import { createContext, useContext, useReducer } from "react";
import { initialState } from "reducers/initialState";
import { rootReducer } from "reducers/rootReducer";

export const QuizDataContext = createContext();

export const useQuizData = () => useContext(QuizDataContext);

export const QuizDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <QuizDataContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizDataContext.Provider>
  );
};
