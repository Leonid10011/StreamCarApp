import { useQuizStatus } from "context/useQuizStatus";
import useLocalFetch from "hooks/useLocalFetch";
import { useState } from "react";
import log from "utils/logger";
import { notify } from "utils/notificationHelper";

const usePostItem = (postFunc) => {
  const { setLoading } = useQuizStatus();
  const [error, setError] = useState(null);
  const { setLocalData } = useLocalFetch();

  const postItem = async () => {
    setLoading(true);
    log.info("Posting items.");
    try {
      notify("Daten werden hochgeladen. Bitte warten.", "info");
      await postFunc();
      setLocalData(); // load data to enable in QuizModule
      notify("Daten erfolgreich hochgeladen");
    } catch (error) {
      log.error(error.message);
      setError(error.message);
      notify(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return { postItem, error };
};

export default usePostItem;
