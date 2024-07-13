import { Button } from "react-bootstrap";
import React from "react";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import AddImagesForm from "features/DataManagement/components/CategoryModules/Images/AddImages/AddImagesForm";
import { uploadOneFile } from "features/DataManagement/components/CategoryModules/Images/AddImages/uploadHelper";
import useManageItems from "features/DataManagement/hooks/useManageItems";
import styles from "./AddImages.module.css";

const AddImages = () => {
  const [acceptedFiles, setAcceptedFiles] = React.useState([]);

  const handleUpload = () => {
    acceptedFiles.forEach((f) => uploadOneFile(f));
  };

  const { postItem } = useManageItems({
    postFunc: handleUpload,
  });

  return (
    <DataManagementContainer
      destination={"/images/manage/guess"}
      buttonName={"Gehe zu: Bilder Verwalten"}
      buttons={
        <Button className={styles.buttonUpload} onClick={postItem}>
          Bilder Hinzufügen
        </Button>
      }
      content={
        <AddImagesForm
          acceptedFiles={acceptedFiles}
          setAcceptedFiles={setAcceptedFiles}
        />
      }
    />
  );
};

export default AddImages;
