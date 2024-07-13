import styles from "./ImageFrame.module.css";

const ImageFrame = ({ url }) => {
  return (
    <div className={styles.imageFrameBox}>
      <img src={url} alt="Image" />
    </div>
  );
};

export default ImageFrame;
