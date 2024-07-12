import { Button } from "react-bootstrap";
import { useState } from "react";
import "./SingleAnswerComponent.css";

const SingleAnswerComponent = ({answer, animationFinished}) => {

    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(true);
    }

    return(
        <div>
            {
                showAnswer 
                ? <div className="answer-box">{answer}</div>
                : <Button 
                    className="answer-button"
                    disabled={!animationFinished}
                    onClick={handleClick}
                    >Antwort</Button>
            }
        </div>
    );
}   

export default SingleAnswerComponent;