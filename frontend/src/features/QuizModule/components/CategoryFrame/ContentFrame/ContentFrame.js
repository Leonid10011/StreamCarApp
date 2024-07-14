import "./ContentFrame.css";

const ContentFrame = ({ ...props }) => {
  return (
    <div className="main-content" {...props}>
      {props.content}
    </div>
  );
};

export default ContentFrame;
