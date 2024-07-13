import styles from "./ImageRow.module.css";

const ImageRow = ({ file, onClick }) => {
  return (
    <div className={styles.imageRow} onClick={() => onClick(file)}>
      <img src={URL.createObjectURL(file)} alt={file.name} />
      {file.name}
    </div>
  );
};

export default ImageRow;
