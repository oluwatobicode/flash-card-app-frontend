import { useState } from "react";
import { useNavigate } from "react-router";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";
import ValidateEmail from "../components/auth/ValidateEmail";
import OtpForm from "../components/auth/OtpForm";

const ResetPassword = () => {
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();

  const handleEmailSuccess = (email: string) => {
    console.log("Email sent to:", email);
    setStep(2);
  };

  const handleOtpSuccess = (otp: string) => {
    console.log("OTP Verified:", otp);
    setStep(3);
  };

  const handlePasswordResetSuccess = () => {
    console.log("Password Reset Successfully");
    navigate("/login");
  };

  return (
    <main className="flex items-center justify-center bg-[#f7f3f0] min-h-screen">
      {step === 1 && <ValidateEmail onSuccess={handleEmailSuccess} />}
      {step === 2 && <OtpForm length={4} onComplete={handleOtpSuccess} />}
      {step === 3 && (
        <ResetPasswordForm onSuccess={handlePasswordResetSuccess} />
      )}
    </main>
  );
};

export default ResetPassword;
