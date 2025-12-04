import { useForm } from "react-hook-form";

// Define the form data type
type FormData = {
  deckName: string;
};

const CreateDecks = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Deck Created:", data);
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex flex-col px-10 py-10 items-center">
        <div className="w-full max-w-[500px] bg-white shadow-[3px_3px_0px_0_#000] rounded-[16px] border border-black p-[32px]">
          <div className="mb-6 border-b border-black/10 pb-2">
            <h2 className="text-2xl font-bold text-[#2E1401]">
              Create New Deck
            </h2>
            <p className="text-sm text-gray-500">
              Organize your flashcards into a new topic.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="deckName"
                className="block font-bold text-[#2E1401]"
              >
                Deck Name
              </label>

              <input
                {...register("deckName", { required: "Deck name is required" })}
                type="text"
                id="deckName"
                placeholder="e.g. Biology 101, React Interviews"
                className={`w-full border p-3 py-2 rounded-md outline-none transition-all
                  ${
                    errors.deckName
                      ? "border-red-500 bg-red-50"
                      : "border-[#2E1401]"
                  }
                  focus:shadow-[2px_2px_0px_0_#2E1401] focus:translate-x-[-1px] focus:translate-y-[-1px]
                `}
              />

              {errors.deckName && (
                <span className="text-red-500 text-sm font-medium animate-pulse">
                  * {errors.deckName.message}
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#F8CB46] shadow-[3px_3px_0px_0_#2E1401] hover:shadow-[1px_1px_0px_0_#2E1401] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer rounded-full h-[43px] border border-[#2E1401] font-medium text-[#2E1401]"
              >
                <span className="text-lg font-bold">+</span>
                Create Deck
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDecks;
