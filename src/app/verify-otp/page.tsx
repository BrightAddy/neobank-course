"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VerifyOTPPage() {
  const router = useRouter();

  // State to hold the 6 digits
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  // Refs to control focus shifting between boxes
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Focus the first input box when the page loads
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (isNaN(Number(value))) return; // Only allow numbers

    const newOtp = [...otp];
    // Take only the last character entered (in case they type fast)
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Automatically shift focus to the next box if value is entered
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    // If user hits Backspace and the current box is empty, jump to the previous box
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    // Combine the 6 digits into a single string
    const finalOtp = otp.join("");

    if (finalOtp.length === 6) {
      // Pure frontend routing directly to the login page
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden">
      {/* Soft premium glow on the plain light background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-md w-full bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/60">
        {/* Headings */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            Verify Secure Account
          </h1>
          <p className="text-sm text-slate-500">
            We sent a 6-digit confirmation code to your email. Enter it below to
            activate your access.
          </p>
        </div>

        {/* OTP Input Grid Form */}
        <form onSubmit={handleConfirm} className="space-y-8">
          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                ref={(el) => {
                  if (el) inputRefs.current[index] = el;
                }}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full aspect-square text-center text-xl sm:text-2xl font-bold text-slate-900 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-mono"
              />
            ))}
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            disabled={otp.some((digit) => digit === "")}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 disabled:opacity-40 disabled:pointer-events-none disabled:transform-none"
          >
            Confirm & Activate
          </button>
        </form>

        {/* Resend Helper */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Didn&apos;t get a code?{" "}
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline"
          >
            Resend Code
          </button>
        </p>
      </div>
    </div>
  );
}
