import DeckStatistics from "../components/app/DeckStatistics";
import StudyMode from "../components/app/StudyMode";
import Navbar from "../ui/Navbar";

const Study = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF6]">
      {" "}
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:flex-1">
          <StudyMode />
        </div>
        <DeckStatistics />
      </div>
    </div>
  );
};

export default Study;
