import { useEffect } from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal = ({ isOpen, onClose, onConfirm }: DeleteModalProps) => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#2E1401]/70 transition-opacity">
      <div className="bg-white w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto border border-[#2e1401] shadow-[4px_4px_0_0px_#000] rounded-[16px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 md:p-8 flex flex-col gap-2">
          <h1 className="font-bold text-[20px] md:text-[24px] leading-tight text-[#2E1401]">
            Delete this card?
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-[#2E1401]/80 leading-relaxed">
            This action cannot be undone. Are you sure you want to remove it
            from your deck?
          </p>
        </div>

        <div className="w-full border-t border-[#231401] bg-gray-50 flex justify-end p-4 gap-3">
          <button
            onClick={onClose}
            className="border border-[#231401] px-4 py-2 cursor-pointer rounded-full text-[#2E1401] font-bold text-sm hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-[#F8CB46] border cursor-pointer border-[#231401] shadow-[2px_2px_0_0px_#000] px-6 py-2 rounded-full text-[#2E1401] font-bold text-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
          >
            Delete Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
