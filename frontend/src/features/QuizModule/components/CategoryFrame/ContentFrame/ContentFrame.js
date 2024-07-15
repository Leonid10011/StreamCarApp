import styles from "./ContentFrame.module.css";

const ContentFrame = ({ ...props }) => {
  return (
    <div className={styles.mainContent} {...props}>
      {props.content}
    </div>
  );
};

export default ContentFrame;
