import ActionButtons from "features/DataManagement/components/ActionsButtons/ActionButtons";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import ListContainer from "features/DataManagement/components/ListComponent/ListContainer/ListContainer";
import useManageItems from "features/DataManagement/hooks/useManageItems";
import ConfirmationModal from "features/QuizModule/components/Modal/ConfirmationModal/ConfirmationModal";
import useDeleteFromApiAndLocalStorage from "hooks/useDeleteFromApiAndLocalStorage";
import { SET_ESTIMATE_QUESTIONS } from "reducers/actionTypes";
import { deleteQuestionFromApi, getRemoteQuestionEstimate } from "services/api";

const ManageEstimateQuestions = () => {
  const { deleteEstimate } = useDeleteFromApiAndLocalStorage();

  const {
    currentItem: currentQuestion,
    setCurrentItem: setCurrentQuesiton,
    showModal,
    setShowModal,
    fetchItems: fetchQuestions,
    handleDelete,
    state,
  } = useManageItems({
    fetchFunc: () => getRemoteQuestionEstimate(),
    deleteFunc: (id) => deleteQuestionFromApi("estimate", id),
  });

  const handleClick = (question) => {
    setCurrentQuesiton(question);
  };

  return (
    <>
      <DataManagementContainer
        name={"Schätzfragen Verwalten"}
        destination={"/questions/add/estimate"}
        buttonName={"Schätzfragen Hinzufügen"}
        buttons={
          <ActionButtons
            onFetch={() => fetchQuestions(SET_ESTIMATE_QUESTIONS)}
            onDelete={() => setShowModal(true)}
          />
        }
        content={
          <ListContainer
            items={state.questionsEstimate}
            currentItem={currentQuestion}
            handleClick={handleClick}
            handleDelete={(id) => handleDelete(id, "SET_ESTIMATE_QUESTIONS")}
          />
        }
      />
      <ConfirmationModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={deleteEstimate}
      />
    </>
  );
};

export default ManageEstimateQuestions;
