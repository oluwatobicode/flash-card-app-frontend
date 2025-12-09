import StudySessionInfo from "../components/app/StudySesssionInfo";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

const StudySession = () => {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <StudySessionInfo />
      <Footer />
    </main>
  );
};

export default StudySession;
