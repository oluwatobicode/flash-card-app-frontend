import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";

const ResetPassWordFormData = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type ResetPasswordSchema = z.infer<typeof ResetPassWordFormData>;

type ResetPasswordFormProps = {
  onSuccess: () => void;
};

const ResetPasswordForm = ({ onSuccess }: ResetPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(ResetPassWordFormData),
  });

  const onSubmit: SubmitHandler<ResetPasswordSchema> = (data) => {
    // API Call to reset password...
    console.log("Password reset data:", data);
    // On Success:
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-6 w-full shadow-[3px_3px_0_0px_#2e1401] rounded-2xl bg-white max-w-[450px] p-6 sm:p-8 border-[3px] border-[#231401] mx-4"
    >
      <div className="flex justify-center w-full">
        <img
          src="/Logo.svg"
          className="h-auto max-w-[150px]"
          alt="Flashcard Logo"
        />
      </div>

      <div>
        <h1 className="text-base text-[#2E1401] text-semibold">
          Update Your Password
        </h1>
      </div>

      <div className="w-full space-y-4">
        <div className="flex flex-col gap-1 w-full">
          <input
            type="password"
            className="w-full p-4 h-[50px] rounded-md border border-[#2E1401] text-base focus:outline-none focus:ring-2 focus:ring-[#2E1401]/20 transition-all"
            placeholder="Password"
            id="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-600 text-xs font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-4 h-[50px] rounded-md border border-[#2E1401] text-base focus:outline-none focus:ring-2 focus:ring-[#2E1401]/20 transition-all"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <p className="text-red-600 text-xs font-medium">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="w-full mt-5">
          <button
            type="submit"
            className="w-full bg-[#F8CB46] shadow-[3px_3px_0px_0_#2E1401] hover:shadow-[1px_1px_0px_0_#2E1401] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer rounded-full h-[43px] border border-[#2E1401] font-medium"
          >
            Reset Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
