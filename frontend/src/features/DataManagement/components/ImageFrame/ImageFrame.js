import "./ImageFrame.css";

const ImageFrame = ({url}) => {

    return(
        <div className="image-frame-box">
            <img src={url} alt="Image" />
        </div>
    );
}

export default ImageFrame;

