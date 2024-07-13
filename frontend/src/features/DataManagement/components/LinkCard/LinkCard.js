import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./LinkCard.module.css";

const LinkCard = ({ link, imgsrc, title, description }) => {
  return (
    <Card className={styles.linkCard}>
      <Link to={link} className="text-decoration-none">
        {false ? (
          <Card.Img variant="top" src={imgsrc} />
        ) : (
          <div className={styles.cardImgPlaceholder}></div>
        )}
        <Card.Body className={styles.linkCardBody}>
          <Card.Title className={styles.linkCardTitle}>{title}</Card.Title>
          <Card.Text className={styles.linkCardDescription}>
            {description}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default LinkCard;
