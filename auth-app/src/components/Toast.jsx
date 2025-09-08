import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = {
  success: (msg) => toast.success(msg, { position: "top-right" }),
  error: (msg) => toast.error(msg, { position: "top-right" }),
  info: (msg) => toast.info(msg, { position: "top-right" }),
  warn: (msg) => toast.warn(msg, { position: "top-right" }),
  Container: ToastContainer,
};

export default Toast;
