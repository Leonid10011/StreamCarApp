import React from "react";
import { Alert, Container, Col } from "react-bootstrap";
import styles from "./UpdateNotification.module.css";
import { useUserData } from "context/useUserData";
import { useFetchNotifications } from "hooks/useFetchNotifications";
import { markNotificationAsRead } from "services/api";

const UpdateNotification = () => {
  const { userId } = useUserData();
  const { notifications } = useFetchNotifications();

  const handleDismissed = async (notificationId) => {
    await markNotificationAsRead(userId, notificationId);
  };

  return (
    <Container className={styles.updateNotification}>
      <p style={{ textAlign: "center", fontSize: "1.5rem" }}>Neuigkeiten</p>
      <hr />
      <Col className="overflow-scroll h-75">
        {notifications &&
          notifications.map(
            (update) =>
              !update.read && (
                <Alert
                  variant="info"
                  key={update._id}
                  dismissible
                  onClose={() => handleDismissed(update._id)}
                  style={{}}
                >
                  <strong>{update.date}:</strong> {update.description}
                </Alert>
              )
          )}
      </Col>
    </Container>
  );
};

export default UpdateNotification;
