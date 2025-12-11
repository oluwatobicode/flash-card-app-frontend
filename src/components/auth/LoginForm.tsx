import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { notify } from "../../utils/notify";

const UserLoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

type UserLoginFormData = z.infer<typeof UserLoginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormData>({
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      email: "odetokuntreasure6@gmail.com",
      password: "Treasure@123",
    },
  });

  const onSubmit: SubmitHandler<UserLoginFormData> = (data) => {
    console.log("Login Data Submitted:", data);
    navigate("/decks");
    notify.success("Logged in successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-6 w-full max-w-[450px] p-6 sm:p-8 border-[3px] border-[#2E1401] rounded-2xl shadow-[4px_4px_0px_0_#2E1401] bg-white mx-4"
    >
      <div className="flex justify-center w-full mb-5">
        <img
          src="/Logo.svg"
          alt="Flashcard logo"
          className="h-auto max-w-[150px]"
        />
      </div>

      <div className="w-full space-y-4">
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
      </div>

      <div className="w-full mt-5">
        <button
          type="submit"
          className="w-full bg-[#F8CB46] shadow-[3px_3px_0px_0_#2E1401] hover:shadow-[1px_1px_0px_0_#2E1401] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer rounded-full h-[43px] border border-[#2E1401] font-medium"
        >
          Login
        </button>
      </div>

      <div className="flex items-end justify-end w-full">
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
          className="text-right cursor-pointer text-sm sm:text-base"
        >
          Don't have an Account?{" "}
          <span className="underline font-medium">Sign Up</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
