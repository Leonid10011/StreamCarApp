import React from "react";
import "./ManageVideos.css";
import useDeleteFromApiAndLocalStorage from "hooks/useDeleteFromApiAndLocalStorage";
import { deleteVideo, getRemoteVideoZoom } from "services/api";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import ConfirmationModal from "features/QuizModule/components/Modal/ConfirmationModal/ConfirmationModal";
import ActionButtons from "features/DataManagement/components/ActionsButtons/ActionButtons";
import { SET_VIDEOS_ZOOM } from "reducers/actionTypes";
import useManageItems from "features/DataManagement/hooks/useManageItems";
import ManageVideosComponent from "features/DataManagement/components/CategoryModules/Videos/ManageVideos/ManageVideosComponent";

const ManageVideos = () => {
  const { deleteZoom } = useDeleteFromApiAndLocalStorage();

  const {
    currentItem: currentVideo,
    setCurrentItem: setCurrentVideo,
    showModal,
    setShowModal,
    fetchItems: fetchVideos,
    handleDelete,
    state,
  } = useManageItems({
    fetchFunc: () => getRemoteVideoZoom(),
    deleteFunc: (id) => deleteVideo("guess", id),
  });

  const handleClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <>
      <DataManagementContainer
        name={"Zoom Videos Verwalten"}
        destination={"/videos/add/zoom"}
        buttonName={"Zoom Video Hinzufügen"}
        buttons={
          <ActionButtons
            onFetch={() => fetchVideos(SET_VIDEOS_ZOOM)}
            onDelete={handleDelete}
          />
        }
        content={
          <ManageVideosComponent
            videos={state.videosZoom}
            currentVideo={currentVideo}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        }
      />
      <ConfirmationModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={deleteZoom}
      />
    </>
  );
};

export default ManageVideos;
