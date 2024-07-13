import "./ShowImageComponent.css";

const ShowImageComponent = ({ url }) => {
  return (
    <div className="image-box">
      <img src={url} alt="Not found" />
    </div>
  );
};

export default ShowImageComponent;
