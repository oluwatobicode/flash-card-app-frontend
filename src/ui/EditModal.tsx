import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";

const EditFormSchema = z.object({
  cardQuestion: z.string().min(3, { message: "Question is too short" }),
  cardAnswer: z.string().min(3, { message: "Answer is too short" }),
});

type EditFormData = z.infer<typeof EditFormSchema>;

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: { question: string; answer: string };
}

const EditModal = ({ isOpen, onClose, initialData }: EditModalProps) => {
  // 1. Lock Body Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditFormData>({
    resolver: zodResolver(EditFormSchema),
    defaultValues: {
      cardQuestion: initialData?.question || "",
      cardAnswer: initialData?.answer || "",
    },
  });

  const onSubmit: SubmitHandler<EditFormData> = (data) => {
    console.log("Updated Data:", data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#2e1401]/70  transition-opacity">
      <div className="bg-white w-full max-w-[350px] md:max-w-[450px] h-auto border border-[#2e1401] shadow-[4px_4px_0_0px_#000] rounded-[16px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-5 flex items-center justify-between border-b border-[#231401]/10">
          <h1 className="font-bold text-[20px] md:text-[24px] leading-tight text-[#2E1401]">
            Edit Card
          </h1>

          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <X size={24} color="#2E1401" />
          </button>
        </div>

        <div className="w-full bg-gray-50 flex flex-col p-6 gap-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="cardQuestion"
                className="block font-bold text-[#2E1401] mb-1.5 text-sm"
              >
                Question
              </label>
              <input
                id="cardQuestion"
                type="text"
                {...register("cardQuestion")}
                placeholder="What does HTML stand for?"
                className={`w-full border p-3 rounded-md outline-none transition-all bg-white
                    ${
                      errors.cardQuestion
                        ? "border-red-500 bg-red-50"
                        : "border-[#2E1401]"
                    }
                    focus:shadow-[2px_2px_0px_0_#2E1401] focus:translate-x-[-1px] focus:translate-y-[-1px]
                `}
              />
              {errors.cardQuestion && (
                <p className="text-red-600 text-xs font-bold mt-1">
                  * {errors.cardQuestion.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="cardAnswer"
                className="block font-bold text-[#2E1401] mb-1.5 text-sm"
              >
                Answer
              </label>
              <textarea
                id="cardAnswer"
                rows={4}
                {...register("cardAnswer")}
                placeholder="Hyper Text Markup Language..."
                className={`w-full border p-3 rounded-md outline-none transition-all resize-none bg-white
                    ${
                      errors.cardAnswer
                        ? "border-red-500 bg-red-50"
                        : "border-[#2E1401]"
                    }
                    focus:shadow-[2px_2px_0px_0_#2E1401] focus:translate-x-[-1px] focus:translate-y-[-1px]
                `}
              />
              {errors.cardAnswer && (
                <p className="text-red-600 text-xs font-bold mt-1">
                  * {errors.cardAnswer.message}
                </p>
              )}
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 font-bold cursor-pointer text-[#2E1401] text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#F8CB46] border border-[#231401] shadow-[2px_2px_0_0px_#000] px-6 py-2 rounded-full text-[#2E1401] font-bold text-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
