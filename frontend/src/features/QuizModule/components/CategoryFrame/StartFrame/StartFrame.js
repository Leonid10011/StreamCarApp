import "./StartFrame.css";

const StartFrame = ({text}) => {
    return (
        <div className="main-start-frame d-flex align-items-center justify-content-center"> 
            <p>
                {text}
            </p>
        </div>
    );
}

export default StartFrame;