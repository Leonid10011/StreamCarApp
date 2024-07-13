import ListItem from "features/DataManagement/components/ListComponent/ListItem/ListItem";
import styles from "./ListContainer.module.css";

const ListContainer = ({ items, currentItem, handleClick, handleDelete }) => {
  return (
    <div className={styles.listContainer}>
      {items.map((q) => (
        <ListItem
          key={q._id}
          data={q}
          onDelete={() => handleDelete(q._id)}
          onClick={() => handleClick(q)}
          isSelected={currentItem._id === q._id}
        />
      ))}
    </div>
  );
};

export default ListContainer;
