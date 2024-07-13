import styles from "./MenuTitle.module.css";

const MenuTitle = ({ title }) => {
  return <div className={styles.manageTitle}>{title}</div>;
};

export default MenuTitle;
