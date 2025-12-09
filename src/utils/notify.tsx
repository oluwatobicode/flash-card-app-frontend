import toast from "react-hot-toast";
import CustomToast from "../ui/CustomToast";

export const notify = {
  success: (message: string) =>
    toast.custom((t) => <CustomToast t={t} type="success" message={message} />),

  error: (message: string) =>
    toast.custom((t) => <CustomToast t={t} type="error" message={message} />),

  info: (message: string) =>
    toast.custom((t) => <CustomToast t={t} type="info" message={message} />),
};
