import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import z from "zod";

const UserSignupSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must not be less than 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type UserSignupFormData = z.infer<typeof UserSignupSchema>;

const SignUpForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignupFormData>({
    resolver: zodResolver(UserSignupSchema),
  });

  const onSubmit: SubmitHandler<UserSignupFormData> = (data) => {
    console.log("Login Data Submitted:", data);
    navigate("/decks");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-6 w-full max-w-[450px] p-6 sm:p-8 border-[3px] border-[#2E1401] rounded-2xl shadow-[4px_4px_0px_0_#2E1401] bg-white mx-4"
    >
      <div className="flex justify-center w-full">
        <img
          src="/Logo.svg"
          alt="Flashcard logo"
          className="h-auto max-w-[150px]"
        />
      </div>

      <div className="w-full space-y-4">
        <div className="flex flex-col gap-1 w-full">
          <input
            type="username"
            className="w-full p-4 h-[50px] rounded-md border border-[#2E1401] text-base focus:outline-none focus:ring-2 focus:ring-[#2E1401]/20 transition-all"
            placeholder="Username"
            id="username"
            {...register("username")}
          />

          {errors.username && (
            <p className="text-red-600 text-xs font-medium">
              {errors.username.message}
            </p>
          )}
        </div>

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

        <div className="flex flex-col gap-1 w-full">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-4 h-[50px] rounded-md border border-[#2E1401] text-base focus:outline-none focus:ring-2 focus:ring-[#2E1401]/20 transition-all"
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
      </div>

      <div className="w-full mt-5">
        <button
          type="submit"
          className="w-full bg-[#F8CB46] shadow-[3px_3px_0px_0_#2E1401] hover:shadow-[1px_1px_0px_0_#2E1401] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer rounded-full h-[43px] border border-[#2E1401] font-medium"
        >
          Sign Up
        </button>
      </div>

      <div className="flex items-end justify-end w-full">
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
          className="text-right cursor-pointer text-sm sm:text-base"
        >
          Already have an account?{" "}
          <span className="underline font-medium">Log in</span>
        </button>
      </div>
    </form>
  );
};
export default SignUpForm;
