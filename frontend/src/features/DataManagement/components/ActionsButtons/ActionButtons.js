import React from "react";
import ActionButton from "features/DataManagement/components/ActionButton/ActionButton";

/**
 * Component for action buttons in a category component
 */
const ActionButtons = ({ onFetch, onDelete }) => (
  <>
    <ActionButton text="Ansehen" onClick={onFetch} />
    <ActionButton text="Alle Löschen" onClick={onDelete} />
  </>
);

export default ActionButtons;
