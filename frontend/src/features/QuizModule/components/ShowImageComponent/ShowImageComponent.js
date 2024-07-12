import "./ShowImageComponent.css";

const ShowImageComponent = ({url}) => {

    return(
        <div className="image-box">
            <img src={url} alt="Image" />
        </div>
    );
}

export default ShowImageComponent;