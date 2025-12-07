import AllCards from "../components/cards/AllCards";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

const Cards = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <AllCards />
      <Footer />
    </div>
  );
};
export default Cards;
