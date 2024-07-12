import { useCallback, useEffect, useState } from "react";
import { getNotificationsByUserId } from "../services/api";
import { useUserData } from "../context/useUserData";
import { notify } from "utils/notificationHelper";

const useFetchNotifications = () => {
  const { notifications, setNotifications } = useUserData();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userId } = useUserData();

  const fetchNotifications = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getNotificationsByUserId(userId);
      setNotifications(response);
    } catch (error) {
      setError(error);
      notify(error, "info");
    } finally {
      console.log("Finally");
      setLoading(false);
    }
  }, [userId, setNotifications]);

  useEffect(() => {
    // Only fetch notifications if userId is available
    if (userId) {
      fetchNotifications();
    }
  }, [fetchNotifications, userId]);

  return { notifications, loading, error };
};

export { useFetchNotifications };
