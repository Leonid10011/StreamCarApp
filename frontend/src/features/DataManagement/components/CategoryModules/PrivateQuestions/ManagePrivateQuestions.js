import React from "react";
import useDeleteFromApiAndLocalStorage from "hooks/useDeleteFromApiAndLocalStorage";
import { deleteQuestionFromApi, getRemoteQuestionPrivate } from "services/api";
import ConfirmationModal from "features/QuizModule/components/Modal/ConfirmationModal/ConfirmationModal";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import ListContainer from "features/DataManagement/components/ListComponent/ListContainer/ListContainer";
import useManageItems from "features/DataManagement/hooks/useManageItems";
import ActionButtons from "features/DataManagement/components/ActionsButtons/ActionButtons";
import { SET_QUESTIONS_PRIVATE } from "reducers/actionTypes";

const ManagePrivateQuestions = () => {
  const { deletePrivate } = useDeleteFromApiAndLocalStorage();

  const {
    currentItem: currentQuestion,
    setCurrentItem: setCurrentQuesiton,
    showModal,
    setShowModal,
    fetchItems: fetchQuestions,
    handleDelete,
    state,
  } = useManageItems({
    fetchFunc: () => getRemoteQuestionPrivate("private"),
    deleteFunc: (id) => deleteQuestionFromApi("private", id),
  });

  const handleClick = (question) => {
    setCurrentQuesiton(question);
  };

  return (
    <>
      <DataManagementContainer
        name={"Private Fragen Verwalten"}
        destination={"/questions/add/private"}
        buttonName={"Private Fragen Hinzufügen"}
        buttons={
          <>
            <ActionButtons
              onFetch={() => fetchQuestions(SET_QUESTIONS_PRIVATE)}
              onDelete={() => setShowModal(true)}
            />
          </>
        }
        content={
          <ListContainer
            items={state.questionsPrivate}
            currentItem={currentQuestion}
            handleDelete={(id) => handleDelete(id, "SET_QUESTIONS_PRIVATE")}
            handleClick={handleClick}
          />
        }
      />

      <ConfirmationModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={deletePrivate}
      />
    </>
  );
};

export default ManagePrivateQuestions;
