import styles from "./StartFrame.module.css";

const StartFrame = ({ text }) => {
  return (
    <div
      className={`${styles.mainStartFrame} d-flex align-items-center justify-content-center`}
    >
      <p>{text}</p>
    </div>
  );
};

export default StartFrame;
