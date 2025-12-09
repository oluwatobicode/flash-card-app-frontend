import { useEffect, useRef, useState } from "react";

type InputProps = {
  length?: number;
  onComplete: (pin: string) => void;
};

const OtpForm = ({ length = 4, onComplete }: InputProps) => {
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    // Auto-submit if fully filled
    if (newPin.every((digit) => digit !== "")) {
      // You might want to verify with API first, then call onComplete
      onComplete(newPin.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && OTP[index] === "" && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  // Focus first input on load
  useEffect(() => {
    if (inputRef.current[0]) inputRef.current[0].focus();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full shadow-[3px_3px_0_0px_#2e1401] rounded-2xl bg-white max-w-[450px] p-6 sm:p-8 border-[3px] border-[#231401] mx-4">
      <div className="flex justify-center w-full mb-2">
        <img src="/Logo.svg" alt="Flashcard Logo" className="h-10 w-auto" />
      </div>

      <div className="text-center">
        <h1 className="text-xl font-bold text-[#2E1401]">
          Enter Verification Code
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          We sent a code to your email.
        </p>
      </div>

      <div className="flex gap-3 sm:gap-4 justify-center w-full">
        {OTP.map((_, index) => (
          <input
            key={index}
            type="text"
            ref={(el) => {
              inputRef.current[index] = el;
            }}
            maxLength={1}
            value={OTP[index]}
            onChange={(e) => handleTextChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-bold rounded-lg border-2 border-[#2E1401] shadow-[2px_2px_0_0px_#2E1401] focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] focus:outline-none transition-all bg-[#FFFBF6]"
          />
        ))}
      </div>

      <button
        onClick={() => onComplete(OTP.join(""))}
        className="w-full mt-4 bg-[#F8CB46] shadow-[3px_3px_0px_0_#2E1401] hover:shadow-[1px_1px_0px_0_#2E1401] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer rounded-full h-[45px] border border-[#2E1401] font-bold text-[#2E1401]"
      >
        Verify Code
      </button>
    </div>
  );
};

export default OtpForm;
