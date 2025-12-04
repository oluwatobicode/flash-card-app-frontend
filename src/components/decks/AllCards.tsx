import { Trash } from "lucide-react";

interface DeckCard {
  title: string;
  cardsTotal: number;
}

const deckCards: DeckCard[] = [
  { title: "CSC 407", cardsTotal: 9 },
  { title: "MAT 303", cardsTotal: 40 },
  { title: "CSC 401", cardsTotal: 10 },
  { title: "CSC 403", cardsTotal: 30 },
  { title: "ANA 301", cardsTotal: 50 },
  { title: "ANA 309", cardsTotal: 10 },
];

const AllCards = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-5 py-10 border-t border-black/10">
      <div className="mb-10 text-center">
        <h1 className="font-bold lg:text-[32px] md:text-[24px] text-[20px] text-[#2E1401]">
          Your Decks
        </h1>
        <p className="text-gray-500 mt-2">Select a deck to start studying</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {deckCards.map((deck, index) => (
          <div
            key={index}
            className="flex flex-col border border-black bg-white shadow-[3px_3px_0px_0_#000] w-full h-[258px] rounded-[16px] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0_#000] transition-all"
          >
            <div className="border-b border-black/10 p-4 flex justify-between items-center bg-gray-50 rounded-t-[15px]">
              <h2 className="font-bold text-lg truncate text-[#2E1401]">
                {deck.title}
              </h2>

              <button className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors p-1">
                <Trash />
              </button>
            </div>

            <div className="p-5 flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-black text-[#2E1401]">
                  {deck.cardsTotal}
                </span>
                <span className="text-sm font-medium text-gray-500 mt-2">
                  cards
                </span>
              </div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Last Studied: 2 days ago
              </p>
            </div>

            <div className="p-4 grid grid-cols-2 gap-3">
              <button className="flex items-center cursor-pointer justify-center gap-2 border border-black rounded-lg h-[40px] font-semibold text-sm hover:bg-gray-100 transition-colors">
                View
              </button>
              <button className="flex items-center cursor-pointer justify-center gap-2 bg-[#F8CB46] border border-black rounded-lg h-[40px] font-bold text-sm shadow-[2px_2px_0px_0_#000] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all">
                Study Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllCards;
