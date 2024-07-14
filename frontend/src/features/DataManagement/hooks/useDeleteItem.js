import { useState } from "react";
import { notify } from "utils/notificationHelper";
import log from "utils/logger";
import { useQuizStatus } from "context/useQuizStatus";

const useDeleteItem = (deleteFunc) => {
  const { setLoading } = useQuizStatus();
  const [error, setError] = useState(null);

  const deleteItem = async (id) => {
    setLoading(true);
    setError(null);
    log.info("Deleting item with id ", id);
    try {
      notify("Daten werden gelöscht. Bitte warten.", "info");
      await deleteFunc(id);
      notify("Erfolgreich gelöscht", "info");
    } catch (error) {
      log.error(error);
      setError(error.message);
      notify(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return { deleteItem, error };
};

export default useDeleteItem;
