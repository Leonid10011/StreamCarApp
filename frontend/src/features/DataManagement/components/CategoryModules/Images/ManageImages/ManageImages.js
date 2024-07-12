import ActionButtons from "features/DataManagement/components/ActionsButtons/ActionButtons";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import useManageItems from "features/DataManagement/hooks/useManageItems";
import React from "react";
import { deleteImage, getRemoteImagesGuess } from "services/api";
import { SET_IMAGES_GUESS } from "reducers/actionTypes";
import ManageImagesContent from "features/DataManagement/components/CategoryModules/Images/ManageImages/ManageImagesContent";
import ConfirmationModal from "features/QuizModule/components/Modal/ConfirmationModal/ConfirmationModal";
import useDeleteFromApiAndLocalStorage from "hooks/useDeleteFromApiAndLocalStorage";

const ManageImage = () => {
  const { deleteGuess } = useDeleteFromApiAndLocalStorage();

  const {
    currentItem: currentImage,
    setCurrentItem: setCurrentImage,
    showModal,
    setShowModal,
    fetchItems: fetchImages,
    handleDelete,
    state,
  } = useManageItems({
    fetchFunc: () => getRemoteImagesGuess(),
    deleteFunc: (id) => deleteImage("guess", id),
  });

  return (
    <>
      <DataManagementContainer
        title="Bilder Verwalten"
        destination="/images/add/guess"
        buttonName="Bilder Hinzufügen"
        buttons={
          <ActionButtons
            onFetch={() => fetchImages(SET_IMAGES_GUESS)}
            onDelete={() => setShowModal(true)}
          />
        }
        content={
          <ManageImagesContent
            items={state.imagesGuess}
            currentItem={currentImage}
            handleDelete={handleDelete}
            handleClick={setCurrentImage}
          />
        }
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={fetchImages}
      />
      <ConfirmationModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={deleteGuess}
      />
    </>
  );
};

export default ManageImage;
