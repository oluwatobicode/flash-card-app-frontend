import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

const StudyMode = () => {
  const btnBase =
    "border border-[#2E1401] shadow-[3px_3px_0_0px_#000] rounded-full cursor-pointer transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";

  return (
    <div className="w-full max-w-[816px] mx-auto border border-[#2E1401] bg-white shadow-[4px_4px_0_0px_#000] rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between p-5 border-b border-[#2E1401] gap-4">
        <div className="flex flex-row items-center gap-4">
          <div className="px-5 py-1 shadow-[3px_3px_0_0px_#000] rounded-full border border-[#2e1401] bg-white">
            <h1 className="font-bold text-sm md:text-base">Javascript</h1>
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-5 h-5 border-2 border-[#2e1401] rounded text-[#2e1401] focus:ring-0 accent-[#2e1401]"
            />
            <span className="font-bold text-sm md:text-base">
              Hide Mastered
            </span>
          </label>
        </div>

        <button
          className={`px-7 py-2 flex items-center gap-2 bg-white ${btnBase}`}
        >
          <Shuffle size={18} color="#2E1401" />
          <span className="font-bold text-[#2E1401]">Shuffle</span>
        </button>
      </div>

      <div className="p-4 md:p-8 flex justify-center w-full">
        <button className="relative w-full max-w-[776px] min-h-[360px] rounded-2xl bg-[#FC8AE5] bg-[url('/pattern-flashcard-bg.svg')] bg-cover border-2 border-[#231401] shadow-[4px_4px_0_0px_#000] flex flex-col items-center justify-center p-8 transition-transform active:scale-[0.99]">
          <h1 className="text-2xl md:text-[40px] font-bold text-center mb-4">
            What does HTML mean?
          </h1>

          <p className="text-base font-medium text-[#2E1401]">
            Click to reveal answer
          </p>

          <div className="absolute top-6 right-6">
            <img className="w-[35px]" src="/bottom-right.svg" alt="" />
          </div>
          <div className="absolute bottom-6 left-6">
            <img className="w-[35px]" src="/bottom-star.svg" alt="" />
          </div>
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 px-4 pb-4">
        {["Easy", "Hard", "Very Hard", "Again"].map((label, i) => (
          <button
            key={label}
            className={`px-6 py-2 font-medium text-[#2e1401] bg-white ${btnBase} ${
              i === 0 ? "bg-[#F8CB46]" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="border-t border-[#2E1401] p-5 mt-5 flex items-center justify-between bg-gray-50">
        <button
          className={`px-5 md:px-7 py-2 flex items-center gap-2 bg-white ${btnBase}`}
        >
          <ChevronLeft size={20} color="#2e1401" />
          <span className="hidden md:inline font-bold">Previous</span>
        </button>

        <p className="font-bold text-[#6D5B4D]">Card 1 of 40</p>

        <button
          className={`px-5 md:px-7 py-2 flex items-center gap-2 bg-white ${btnBase}`}
        >
          <span className="hidden md:inline font-bold">Next</span>
          <ChevronRight size={20} color="#2e1401" />
        </button>
      </div>
    </div>
  );
};

export default StudyMode;
