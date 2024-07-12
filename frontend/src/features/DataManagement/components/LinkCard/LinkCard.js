import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LinkCard.css";

const LinkCard = ({ link, imgsrc, title, description }) => {
    return (
        <Card className="link-card">
            <Link to={link} className="text-decoration-none">
                {false ? (
                        <Card.Img variant="top" src={imgsrc} />
                    ) : (
                        <div className="card-img-placeholder"></div>
                    )}
                <Card.Body className="link-card-body">
                    <Card.Title className="link-card-title">{title}</Card.Title>
                    <Card.Text className="link-card-description">{description}</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    );
};

export default LinkCard;
