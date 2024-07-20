import { createContext, useContext, useState, useCallback } from "react";

export const ActionContext = createContext();

export const useAction = () => useContext(ActionContext);

export const ActionProvider = ({ children }) => {
  const [showStartButton, setShowStartButton] = useState(true);
  const [showBackButton, setShowBackButton] = useState(true);
  const [showStartFrame, setShowStartFrame] = useState(true);

  /**
   * Disables the buttons and waits for the callback function to finish.
   * Enable the buttons again after function is processed.
   * @param {function} callback
   */
  const actionFunction = async (callback) => {
    setShowStartButton(false);
    setShowBackButton(false);
    try {
      await callback();
    } catch (error) {
      console.log("ActionFunction Error: ", error);
    } finally {
      setShowStartButton(true);
      setShowBackButton(true);
    }
  };

  const enableStartButton = useCallback(() => {
    setShowStartButton(true);
  }, []);

  const disableStartButton = useCallback(() => {
    setShowStartButton(false);
  }, []);

  const enableBackButton = useCallback(() => {
    setShowBackButton(true);
  }, []);

  const disableBackButton = useCallback(() => {
    setShowBackButton(false);
  }, []);

  return (
    <ActionContext.Provider
      value={{
        actionFunction,
        showStartButton,
        showBackButton,
        enableStartButton,
        enableBackButton,
        disableStartButton,
        disableBackButton,
        showStartFrame,
        setShowStartFrame,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};
