import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";

const ValidateEmailSchema = z.object({
  email: z.string().email({ message: "Put in a valid email address" }),
});

type ValidateEmailFormData = z.infer<typeof ValidateEmailSchema>;

// Add Prop Type
type ValidateEmailProps = {
  onSuccess: (email: string) => void;
};

const ValidateEmail = ({ onSuccess }: ValidateEmailProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidateEmailFormData>({
    resolver: zodResolver(ValidateEmailSchema),
  });

  const onSubmit: SubmitHandler<ValidateEmailFormData> = (data) => {
    onSuccess(data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-[300px] justify-center gap-6 items-center mx-4 px-6 sm:px-8 border-[3px] border-[#2e1401] shadow-[4px_4px_0px_0_#2E1401] bg-white rounded-2xl w-full max-w-[450px]"
    >
      <div className="flex justify-center w-full">
        <img
          src="/Logo.svg"
          alt="Flashcard logo"
          className="h-auto max-w-[150px]"
        />
      </div>
      <div className="space-y-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <input
            type="email"
            className="w-full p-4 h-[50px] rounded-md border border-[#2E1401] text-base focus:outline-none focus:ring-2 focus:ring-[#2E1401]/20 transition-all"
            placeholder="Email Address"
            id="email"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-red-600 text-xs font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="w-full mt-5">
          <button
            type="submit"
            className="w-full bg-[#F8CB46] shadow-[3px_3px_0px_0_#2E1401] hover:shadow-[1px_1px_0px_0_#2E1401] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer rounded-full h-[43px] border border-[#2E1401] font-medium"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default ValidateEmail;
