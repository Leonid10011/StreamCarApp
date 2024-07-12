import { useState } from "react";
import { notify } from "utils/notificationHelper";
import log from "utils/logger";

const useDeleteItem = (deleteFunc) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteItem = async (id) => {
    setLoading(true);
    setError(null);
    log.info("Deleting items");
    try {
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

  return { deleteItem, loading, error };
};

export default useDeleteItem;
