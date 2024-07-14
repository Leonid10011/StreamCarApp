import { useQuizStatus } from "context/useQuizStatus";
import { useState } from "react";
import log from "utils/logger";
import { notify } from "utils/notificationHelper";

const useFetchItems = (fetchFunc) => {
  const { setLoading } = useQuizStatus();
  const [error, setError] = useState(null);

  const fetchItems = async (dispatch, actionType) => {
    setLoading(true);
    log.info("Fetching items for ", actionType);
    try {
      notify("Daten werden bezogen. Bitte warten.", "info");
      const data = await fetchFunc();
      dispatch({ type: actionType, payload: data });
      notify(`${data.length} Datensätze erfolgreich geladen.`);
    } catch (error) {
      log.error(error.message);
      setError(error.message);
      notify(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return { fetchItems, error };
};

export default useFetchItems;
