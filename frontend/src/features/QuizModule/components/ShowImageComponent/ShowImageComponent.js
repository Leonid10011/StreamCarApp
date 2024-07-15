import styles from "./ShowImageComponent.module.css";

const ShowImageComponent = ({ url }) => {
  return (
    <div className={styles.imageBox}>
      <img src={url} alt="Not found" />
    </div>
  );
};

export default ShowImageComponent;
