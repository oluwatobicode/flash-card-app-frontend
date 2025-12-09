import { X } from "lucide-react";
import toast from "react-hot-toast";

type ToastProps = {
  t: any;
  message: string;
  type: "success" | "error" | "info";
};

const toastStyles = {
  success: {
    bg: "bg-[#FFF]",
    borderColor: "border-[#2E1401]",
  },
  error: {
    bg: "bg-[#FFF]",
    borderColor: "border-[#2E1401]",
  },
  info: {
    bg: "bg-[#FFF]",
    borderColor: "border-[#2E1401]",
  },
};

const CustomToast = ({ message, type, t }: ToastProps) => {
  const style = toastStyles[type];

  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-[300px] w-full h-[39px] ${style.bg} border ${
        style.borderColor
      } shadow-[3px_3px_0px_0px_#2E1401] rounded-full pointer-events-auto flex items-center justify-between ring-1 ring-black ring-opacity-5`}
    >
      <div className="ml-5">
        <p className="text-[16px] font-medium leading-0 tracking-[120%] text-[#2E1401]">
          {message}
        </p>
      </div>

      <div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full cursor-pointer border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#2E1401] focus:outline-none"
        >
          <X size={20} color="#6D5B4D" />
        </button>
      </div>
    </div>
  );
};

export default CustomToast;
