import StudySessionInfo from "../components/app/StudySesssionInfo";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

const StudySession = () => {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <StudySessionInfo
        aiName="Pluto"
        feedback="Treasure you excel at Math (answering in under 3 seconds with high accuracy). However, you are struggling significantly with Biology, taking long pauses (12-15s) and still failing. My suggestion is that you review Biology concepts in the morning when fresh."
      />
      <Footer />
    </main>
  );
};

export default StudySession;
