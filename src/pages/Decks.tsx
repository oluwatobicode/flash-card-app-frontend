import AllCards from "../components/decks/AllDecks";
import CreateDecks from "../components/decks/CreateDecks";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

const Decks = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-7xl">
        <CreateDecks />
        <AllCards />
      </main>
      <Footer />
    </>
  );
};

export default Decks;
