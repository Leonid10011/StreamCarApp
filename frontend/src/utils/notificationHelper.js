import { toast } from "react-toastify";

export const notify = (message, type = 'success') => {
  const notifyFunc = {
    success: toast.success,
    error: toast.error,
    info: toast.info
  }[type];
  notifyFunc(message);
};
