import ActionButtons from "features/DataManagement/components/ActionsButtons/ActionButtons";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import ListContainer from "features/DataManagement/components/ListComponent/ListContainer/ListContainer";
import useManageItems from "features/DataManagement/hooks/useManageItems";
import ConfirmationModal from "features/QuizModule/components/Modal/ConfirmationModal/ConfirmationModal";
import useDeleteFromApiAndLocalStorage from "hooks/useDeleteFromApiAndLocalStorage";
import React from "react";
import { SET_QUESTIONS_GENERAL } from "reducers/actionTypes";
import { deleteQuestionFromApi, getRemoteQuestionGeneral } from "services/api";

const ManageGeneralQuestions = () => {
  const { deleteGeneral } = useDeleteFromApiAndLocalStorage();

  const {
    currentItem: currentQuestion,
    setCurrentItem: setCurrentQuestion,
    showModal,
    setShowModal,
    fetchItems: fetchQuestions,
    handleDelete,
    state,
  } = useManageItems({
    fetchFunc: () => getRemoteQuestionGeneral(),
    deleteFunc: (id) => deleteQuestionFromApi("general", id),
  });

  const handleClick = (question) => {
    setCurrentQuestion(question);
  };

  return (
    <>
      <DataManagementContainer
        title="Allgemeinwissen Verwalten"
        destination="/questions/add/general"
        buttonName="Fragen Hinzufügen"
        buttons={
          <ActionButtons
            onFetch={() => fetchQuestions(SET_QUESTIONS_GENERAL)}
            onDelete={() => setShowModal(true)}
          />
        }
        content={
          <ListContainer
            items={state.questionsGeneral}
            currentItem={currentQuestion}
            handleDelete={(id) => handleDelete(id, "SET_QUESTIONS_GENERAL")}
            handleClick={handleClick}
          />
        }
      />
      <ConfirmationModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={deleteGeneral}
      />
    </>
  );
};

export default ManageGeneralQuestions;
