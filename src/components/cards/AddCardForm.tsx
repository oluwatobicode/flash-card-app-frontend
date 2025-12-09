import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud, FileText, Loader2, X } from "lucide-react";
import { useState, useCallback } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { useDropzone } from "react-dropzone";
import { notify } from "../../utils/notify";

const CardFormSchema = z.object({
  cardQuestion: z.string().min(3, { message: "Question is too short" }),
  cardAnswer: z.string().min(3, { message: "Answer is too short" }),
});

type CardFormData = z.infer<typeof CardFormSchema>;

interface AddCardFormProps {
  currentDeck: string;
  onClose: () => void;
}

const AddCardForm = ({ currentDeck, onClose }: AddCardFormProps) => {
  const [activeTab, setActiveTab] = useState<"manual" | "pdf">("manual");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CardFormData>({
    resolver: zodResolver(CardFormSchema),
  });

  const onManualSubmit: SubmitHandler<CardFormData> = (data) => {
    notify.success("Card created successfully.");
    console.log("Adding Manual Card to", currentDeck, ":", data);
    reset();
    // Add logic to refresh list
  };

  //  PDF DROPZONE LOGIC
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) setUploadedFile(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
  });

  // --- PDF SUBMIT ---
  const handlePdfUpload = async () => {
    if (!uploadedFile) return;
    setIsUploading(true);
    notify.success("Card created successfully.");

    // Simulate API Call
  };

  return (
    <div className="w-full max-w-[600px] mx-auto bg-white shadow-[4px_4px_0px_0_#000] rounded-[16px] border border-black overflow-hidden mb-8 relative">
      <button
        onClick={onClose}
        className="absolute cursor-pointer top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
      >
        <X size={20} />
      </button>

      <div className="border-b border-black">
        <div className="p-[32px] pb-4">
          <h2 className="text-2xl font-bold text-[#2E1401]">
            Add to {currentDeck}
          </h2>
        </div>

        <div className="flex w-full ">
          <button
            onClick={() => setActiveTab("manual")}
            className={`flex-1 p-3 font-bold  text-sm border-r border-black transition-colors ${
              activeTab === "manual"
                ? "bg-[#F8CB46] text-black"
                : "bg-gray-50 text-gray-500 hover:bg-gray-100"
            }`}
          >
            Manual Entry
          </button>
          <button
            onClick={() => setActiveTab("pdf")}
            className={`flex-1 p-3 font-bold text-sm transition-colors ${
              activeTab === "pdf"
                ? "bg-[#F8CB46] text-black"
                : "bg-gray-50 text-gray-500 hover:bg-gray-100"
            }`}
          >
            Upload PDF (AI)
          </button>
        </div>
      </div>

      <div className="p-[32px]">
        {activeTab === "manual" && (
          <form
            onSubmit={handleSubmit(onManualSubmit)}
            className="animate-in fade-in slide-in-from-top-2 duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#2E1401]">Question</label>
                <input
                  {...register("cardQuestion")}
                  placeholder="e.g. What is the powerhouse of the cell?"
                  className={`w-full border p-3 rounded-md outline-none transition-all
                        ${
                          errors.cardQuestion
                            ? "border-red-500 bg-red-50"
                            : "border-[#2E1401]"
                        }
                        focus:shadow-[2px_2px_0px_0_#2E1401] focus:translate-x-[-1px] focus:translate-y-[-1px]
                    `}
                />
                {errors.cardQuestion && (
                  <span className="text-red-500 text-xs font-bold">
                    {errors.cardQuestion.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#2E1401]">Answer</label>
                <textarea
                  {...register("cardAnswer")}
                  rows={3}
                  placeholder="The answer is..."
                  className={`w-full border p-3 rounded-md outline-none transition-all resize-none
                        ${
                          errors.cardAnswer
                            ? "border-red-500 bg-red-50"
                            : "border-[#2E1401]"
                        }
                        focus:shadow-[2px_2px_0px_0_#2E1401] focus:translate-x-[-1px] focus:translate-y-[-1px]
                    `}
                />
                {errors.cardAnswer && (
                  <span className="text-red-500 text-xs font-bold">
                    {errors.cardAnswer.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#2E1401] text-white hover:shadow-[1px_1px_0px_0_#888] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer rounded-full h-[48px] font-bold"
              >
                Add Flashcard
              </button>
            </div>
          </form>
        )}

        {/* --- TAB 2: PDF UPLOAD --- */}
        {activeTab === "pdf" && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            {!uploadedFile ? (
              // 1. DROP ZONE
              <div
                {...getRootProps()}
                className={`
                            border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all
                            ${
                              isDragActive
                                ? "border-[#F8CB46] bg-yellow-50 scale-[0.99]"
                                : "border-gray-300 hover:border-black hover:bg-gray-50"
                            }
                        `}
              >
                <input {...getInputProps()} />
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-black">
                  <UploadCloud className="text-black" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Click or Drag PDF here
                </h3>
                <p className="text-sm text-gray-500">
                  We'll use AI to generate cards from your notes.
                </p>
              </div>
            ) : (
              // 2. FILE SELECTED VIEW
              <div className="border border-black rounded-xl p-6 bg-gray-50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#F8CB46] border border-black rounded-lg flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bold truncate">{uploadedFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    onClick={() => setUploadedFile(null)}
                    className="ml-auto text-gray-400 hover:text-red-500"
                  >
                    <X size={20} />
                  </button>
                </div>

                <button
                  onClick={handlePdfUpload}
                  disabled={isUploading}
                  className="w-full flex items-center justify-center gap-2 bg-[#2E1401] text-white hover:shadow-[1px_1px_0px_0_#888] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer rounded-full h-[48px] font-bold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="animate-spin" /> Generating Cards...
                    </>
                  ) : (
                    "Generate Cards with AI"
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCardForm;
