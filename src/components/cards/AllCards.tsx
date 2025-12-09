import {
  ArrowLeft,
  Brain,
  EllipsisVertical,
  SquarePen,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import AddCardForm from "./AddCardForm";
import EditModal from "../../ui/EditModal";
import DeleteModal from "../../ui/DeleteModal";
import { useNavigate, useParams } from "react-router";
import { notify } from "../../utils/notify";

interface Cards {
  question: string;
  answer: string;
  deck: string;
  isMastered: boolean;
}

const allCards: Cards[] = [
  {
    question: "What is the difference between 'let' and 'const' in JavaScript?",
    answer:
      "'let' allows you to reassign the variable, while 'const' creates a constant reference that cannot be reassigned. Both are block-scoped.",
    deck: "Javascript",
    isMastered: false,
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.",
    deck: "Javascript",
    isMastered: true,
  },
  {
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    answer:
      "The 'async' keyword declares an asynchronous function that returns a Promise and allows the use of 'await' inside it.",
    deck: "Javascript",
    isMastered: false,
  },
];

const AllCards = () => {
  const params = useParams();
  console.log(params);
  const id = params.id;
  const navigate = useNavigate();

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const openModal = (state: boolean) => {
    setIsDeleteOpen(!state);
  };

  const closeModal = () => {
    setIsDeleteOpen(false);
  };

  const openEdtModal = (state: boolean) => {
    setIsEditOpen(!state);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
  };

  const onConfirmDelete = () => {
    console.log("Deleted it");
    setIsDeleteOpen(false);
    setActiveMenuIndex(null);
    notify.success("Card deleted.");
  };

  const toggleMenu = (index: number) => {
    if (activeMenuIndex === index) {
      setActiveMenuIndex(null);
    } else {
      setActiveMenuIndex(index);
    }
  };

  return (
    <div className="w-full min-h-screen pb-20">
      {activeMenuIndex !== null && (
        <div
          className="fixed inset-0 z-0 cursor-default"
          onClick={() => setActiveMenuIndex(null)}
        />
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 flex flex-col space-y-8 relative z-10">
        <div className="flex items-center justify-between w-full">
          <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-[#231401] bg-white shadow-[3px_3px_0_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0px_#000] transition-all">
            <ArrowLeft color="#000" size={20} />
          </button>

          <div>
            <h1 className="text-[18px] md:text-[24px] lg:text-[32px] font-bold text-[#2E1401]">
              JavaScript Deck
            </h1>
          </div>

          <button
            onClick={() => {
              navigate(`/study/${id}`);
            }}
            className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white border border-[#2e1401] shadow-[3px_3px_0_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0px_#000] transition-all font-medium text-sm sm:text-base"
          >
            Study now
          </button>
        </div>

        <div className="flex items-center mt-4 justify-center w-full">
          {isFormOpen ? (
            <AddCardForm
              currentDeck="Javascript "
              onClose={() => {
                setIsFormOpen(false);
              }}
            />
          ) : (
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-3 rounded-full border border-[#2E1401] bg-[#F8CB46] font-bold shadow-[3px_3px_0_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0_#000] transition-all cursor-pointer"
            >
              Click To Add More Cards
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allCards.map((card, index) => (
            <div
              key={index}
              className="flex relative flex-col h-full border border-black bg-white shadow-[3px_3px_0px_0_#000] rounded-[16px] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0_#000] transition-all duration-200"
            >
              <div className="border-b border-[#2E1401] p-4 flex justify-between items-start rounded-t-[15px] bg-gray-50/50">
                <h2 className="font-bold text-[16px] leading-tight text-[#2E1401] line-clamp-2">
                  {card.question}
                </h2>
              </div>

              <div className="p-5 flex-grow">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Answer
                  </span>
                  <p className="text-[14px] font-medium text-[#2e1401] leading-relaxed">
                    {card.answer}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_1fr_auto] border-t border-[#2E1401] divide-x divide-[#2E1401]">
                <div className="p-3 flex items-center justify-center">
                  <div className="max-w-full text-[12px] px-2 py-0.5 border border-black bg-white shadow-[2px_2px_0_0px_#000] rounded-[12px] truncate font-medium">
                    {card.deck}
                  </div>
                </div>

                <div className="p-3 flex items-center justify-center">
                  {card.isMastered ? (
                    <div className="text-[12px] gap-1.5 flex items-center px-2 py-0.5 border border-black bg-[#47D9C9] shadow-[2px_2px_0_0px_#000] rounded-[12px]">
                      <Brain size={14} className="shrink-0" />
                      <span className="text-[11px] font-bold">Mastered</span>
                    </div>
                  ) : (
                    <div className="text-[12px] px-2 py-0.5 text-gray-500 font-medium">
                      Not Mastered
                    </div>
                  )}
                </div>

                <div className="relative p-3 flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu(index);
                    }}
                    className={`p-1 rounded-full cursor-pointer hover:bg-gray-100 transition-colors ${
                      activeMenuIndex === index ? "bg-gray-100" : ""
                    }`}
                  >
                    <EllipsisVertical size={20} />
                  </button>

                  {activeMenuIndex === index && (
                    <div className="absolute bottom-[110%] right-2 w-[140px] bg-white border border-[#2e1401]  rounded-[12px] overflow-hidden z-20 flex flex-col animate-in fade-in zoom-in-95 duration-100 origin-bottom-right">
                      <button
                        onClick={() => openEdtModal(isEditOpen)}
                        className="flex items-center cursor-pointer gap-3 w-full px-4 py-3 text-sm font-bold text-[#2E1401] transition-colors text-left border-b border-[#2e1401]"
                      >
                        <SquarePen size={16} />
                        Edit
                      </button>

                      <button
                        onClick={() => openModal(isDeleteOpen)}
                        className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-red-600 cursor-pointer transition-colors text-left"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center mt-12 justify-center w-full pb-10">
          <button className="px-10 py-3 rounded-full border border-[#2E1401] bg-[#F8CB46] font-bold shadow-[3px_3px_0_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0_#000] transition-all cursor-pointer">
            Load More
          </button>
        </div>

        {isEditOpen && (
          <EditModal isOpen={isEditOpen} onClose={closeEditModal} />
        )}

        {isDeleteOpen && (
          <DeleteModal
            isOpen={isDeleteOpen}
            onClose={closeModal}
            onConfirm={onConfirmDelete}
          />
        )}
      </div>
    </div>
  );
};

export default AllCards;
