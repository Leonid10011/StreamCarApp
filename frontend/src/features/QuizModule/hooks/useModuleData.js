const { useAction } = require("context/useAction");
const { useState, useEffect } = require("react");

const useModuleData = (fetchFunction) => {
  const [data, setData] = useState(null);

  const {
    setShowStartFrame,
    showStartFrame,
    enableStartButton,
    disableStartButton,
    enableBackButton,
  } = useAction();

  useEffect(() => {
    const getData = () => {
      const randomData = fetchFunction();

      if (!randomData) {
        disableStartButton();
        setData(null);
      }

      setData(randomData);
      enableStartButton();
      enableBackButton();
    };

    getData();

    return () => setShowStartFrame(true);
  }, []);

  return { data, showStartFrame, setShowStartFrame };
};

export default useModuleData;
