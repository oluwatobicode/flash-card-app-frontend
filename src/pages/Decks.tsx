import AllCards from "../components/decks/AllDecks";
import CreateDecks from "../components/decks/CreateDecks";
import Navbar from "../ui/Navbar";

const Decks = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-7xl">
        <CreateDecks />
        <AllCards />
      </main>
    </>
  );
};

export default Decks;
