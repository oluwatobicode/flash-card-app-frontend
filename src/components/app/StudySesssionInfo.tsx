import {
  Sparkles,
  Brain,
  AlertCircle,
  Clock,
  Timer,
  Book,
  Info,
} from "lucide-react";

interface StudySessionProps {
  score?: number;
  aiName?: string;
  feedback: string;
}

const StudySessionInfo = ({
  aiName = "Pluto",
  feedback = "Treasure you excel at Math (answering in under 3 seconds with high accuracy). However, you are struggling significantly with Biology, taking long pauses (12-15s) and still failing. My suggestion is that you review Biology concepts in the morning when fresh.",
}: StudySessionProps) => {
  // Kept your original logic, just cleaner formatting
  const formatFeedback = (text: string) => {
    const keywords = ["Math", "Biology", "Review"];
    let formattedText = text;
    keywords.forEach((word) => {
      formattedText = formattedText.replace(
        new RegExp(word, "g"),
        `<b>${word}</b>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <div className="min-h-screen w-full p-6 md:p-10 flex flex-col items-center ">
      <div className="max-w-4xl w-full space-y-10 mt-8">
        {/* Header */}
        <header className="flex flex-col items-center text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-black text-[#2e1401] tracking-tight">
            Session Recap
          </h1>
          <p className="text-[#2e1401]/70 font-medium">
            Here is how you performed today
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-[#fff] border border-[#2E1401] shadow-[3px_3px_0px_0px_#000] rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform">
            <div className="p-2 bg-[#fffdf5] border border-[#2e1401]/20 rounded-full text-[#2e1401]">
              <Book size={20} />
            </div>
            <h3 className="text-2xl font-black text-[#2e1401]">Javascript</h3>
            <h2 className="text-xs font-bold text-[#2e1401]/60 uppercase tracking-wider">
              Deck Name
            </h2>
          </div>

          <div className="bg-[#fff] border border-[#2E1401] shadow-[3px_3px_0px_0px_#000] rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform">
            <div className="p-2 bg-[#fffdf5] border border-[#2e1401]/20 rounded-full text-[#2e1401]">
              <Clock size={20} />
            </div>
            <h3 className="text-2xl font-black text-[#2e1401]">15m 30s</h3>
            <h2 className="text-xs font-bold text-[#2e1401]/60 uppercase tracking-wider">
              Total Time
            </h2>
          </div>

          <div className="bg-[#fff] border border-[#2E1401] shadow-[3px_3px_0px_0px_#000] rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform">
            <div className="p-2 bg-[#fffdf5] border border-[#2e1401]/20 rounded-full text-[#2e1401]">
              <Timer size={20} />
            </div>
            <h3 className="text-2xl font-black text-[#2e1401]">30s</h3>
            <h2 className="text-xs font-bold text-[#2e1401]/60 uppercase tracking-wider">
              Avg Time Per Card
            </h2>
          </div>

          <div className="bg-[#fff] border border-[#2E1401] shadow-[3px_3px_0px_0px_#000] rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform">
            <div className="p-2 bg-[#fffdf5] border border-[#2e1401]/20 rounded-full text-[#2e1401]">
              <Brain size={20} />
            </div>
            <h3 className="text-2xl font-black text-[#2e1401]">70%</h3>
            <h2 className="text-xs font-bold text-[#2e1401]/60 uppercase tracking-wider">
              Mastery
            </h2>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#2e1401] rounded-xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>

          <div className="relative bg-[#fffdf5] border-2 border-[#2e1401] rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-[#2e1401] text-[#fffdf5] rounded-full flex items-center justify-center border-2 border-[#2e1401]">
                <Sparkles size={32} />
              </div>
              <span className="font-bold text-[#2e1401] text-sm uppercase tracking-wider">
                {aiName}
              </span>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-lg font-bold text-[#2e1401]">
                  AI Analysis
                </h2>
                <div className="h-px flex-1 bg-[#2e1401]/20"></div>
              </div>

              <blockquote className="text-base md:text-lg leading-relaxed text-[#2e1401] font-medium opacity-90">
                "{formatFeedback(feedback)}"
              </blockquote>

              <div className="flex flex-wrap gap-2 pt-2">
                <div className="flex items-center gap-1 px-3 py-1 bg-[#e6ffe6] border border-[#2e1401] text-[#2e1401] text-xs font-bold rounded-md shadow-[2px_2px_0px_0px_#2e1401]">
                  <Brain size={12} /> Strong: Math
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-[#ffe6e6] border border-[#2e1401] text-[#2e1401] text-xs font-bold rounded-md shadow-[2px_2px_0px_0px_#2e1401]">
                  <AlertCircle size={12} /> Weak: Biology
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 mt-2 border-t border-[#2e1401]/10">
                <Info size={14} className="text-[#2e1401]/50" />
                <p className="text-xs text-[#2e1401]/50 font-medium">
                  Pluto can make mistakes. Please check important info.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySessionInfo;
