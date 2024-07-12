import { useState } from "react";
import log from "utils/logger";
import { notify } from "utils/notificationHelper";

const usePostItem = (postFunc) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postItem = async () => {
    setLoading(true);
    log.info("Posting items.");
    try {
      await postFunc();
      notify("Daten erfolgreich hochgeladen");
    } catch (error) {
      log.error(error.message);
      setError(error.message);
      notify(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return { postItem, loading, error };
};

export default usePostItem;
