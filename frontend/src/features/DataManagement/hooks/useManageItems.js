import { useQuizData } from "context/useQuizData";
import { useQuizStatus } from "context/useQuizStatus";
import useDeleteItem from "features/DataManagement/hooks/useDeleteItem";
import useFetchItems from "features/DataManagement/hooks/useFetchItems";
import usePostItem from "features/DataManagement/hooks/usePostItem";
import { useState } from "react";

const useManageItems = ({ fetchFunc, deleteFunc, postFunc }) => {
  const { state, dispatch } = useQuizData();
  const [currentItem, setCurrentItem] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { loading } = useQuizStatus();
  const { fetchItems, fetchLoading, fetchError } = useFetchItems(fetchFunc);
  const { postItem, postLoading, postError } = usePostItem(postFunc);
  const { deleteItem, deleteLoading, deleteError } = useDeleteItem(deleteFunc);

  //const loading = fetchLoading || postLoading || deleteLoading;
  const error = fetchError || postError || deleteError;

  return {
    currentItem,
    setCurrentItem,
    showModal,
    setShowModal,
    fetchItems: (actionType) => fetchItems(dispatch, actionType),
    postItem,
    handleDelete: async (id, actionType) => {
      await deleteItem(id);
      await fetchItems(dispatch, actionType);
    }, // Delete the item and refetch to trigger rerender
    loading,
    error,
    state,
  };
};

export default useManageItems;
