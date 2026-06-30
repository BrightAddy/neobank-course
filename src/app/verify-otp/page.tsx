"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { sendEmailOtp, verifyEmailOtp } from "@/lib/auth";

type AuthMode = "signup" | "login";

export default function VerifyOTPPage() {
  const router = useRouter();

  // State to hold the 6 digits
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState<AuthMode>("signup");
  const [authError, setAuthError] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);

  // Refs to control focus shifting between boxes
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Focus the first input box when the page loads
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    const timer = window.setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const queryEmail = searchParams.get("email");
      const queryMode = searchParams.get("mode");
      const storedEmail = window.sessionStorage.getItem("neobank-auth-email");
      const storedMode = window.sessionStorage.getItem("neobank-auth-mode");

      setEmail(queryEmail || storedEmail || "");
      if (queryMode === "login" || storedMode === "login") {
        setMode("login");
      }
    }, 0);

    return () => window.clearTimeout(timer);
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

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setAuthMessage("");

    // Combine the 6 digits into a single string
    const finalOtp = otp.join("");

    if (!email) {
      setAuthError("Your email is missing. Go back and request a new code.");
      return;
    }

    if (finalOtp.length !== 6) return;

    setIsSubmitting(true);
    const { error } = await verifyEmailOtp(email, finalOtp);
    setIsSubmitting(false);

    if (error) {
      setAuthError(
        "That code is not valid. Use the 6-digit code from the latest Supabase email, or click Resend Code to generate a new one.",
      );
      return;
    }

    window.sessionStorage.removeItem("neobank-auth-email");
    window.sessionStorage.removeItem("neobank-auth-mode");
    router.replace("/dashboard");
  };

  const handleResend = async () => {
    setAuthError("");
    setAuthMessage("");

    if (!email) {
      setAuthError("Your email is missing. Go back and request a new code.");
      return;
    }

    setIsResending(true);
    const { error } = await sendEmailOtp({
      email,
      shouldCreateUser: mode === "signup",
    });
    setIsResending(false);

    if (error) {
      setAuthError(error.message);
      return;
    }

    setAuthMessage("We sent a fresh code to your email.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none"></div>
 
      <div className="relative z-10 max-w-md w-full bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/60">
        {/* Headings */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            Verify Secure Account
          </h1>
          <p className="text-sm text-slate-500">
            We sent a 6-digit confirmation code
            {email ? ` to ${email}` : " to your email"}. Enter it below to
            activate your access.
          </p>
        </div>

        {(authError || authMessage) && (
          <p
            className={`mb-6 rounded-xl px-4 py-3 text-sm font-semibold ${
              authError
                ? "bg-red-50 text-red-600"
                : "bg-emerald-50 text-emerald-700"
            }`}
          >
            {authError || authMessage}
          </p>
        )}

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
            disabled={otp.some((digit) => digit === "") || isSubmitting}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 disabled:opacity-40 disabled:pointer-events-none disabled:transform-none"
          >
            {isSubmitting ? "Verifying..." : "Confirm & Activate"}
          </button>
        </form>

        {/* Resend Helper */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Didn&apos;t get a code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className="text-blue-600 font-semibold hover:underline"
          >
            {isResending ? "Sending..." : "Resend Code"}
          </button>
        </p>
      </div>
    </div>
  );
}
