"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPasswordPage() {
  const router = useRouter();

  // State to hold the password inputs
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset errors on submit

    // Basic validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Pure frontend routing directly to the login page
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-md w-full bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/60">
        
        {/* Headings */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            Set New Password
          </h1>
          <p className="text-sm text-slate-500">
            Your identity has been verified. Please enter your new password below.
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleConfirm} className="space-y-5">
          
          {/* Error Message Display */}
          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100 text-center">
              {error}
            </div>
          )}

          {/* New Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 text-slate-900 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">
              Re-enter Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 text-slate-900 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!password || !confirmPassword}
            className="w-full mt-4 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 disabled:opacity-40 disabled:pointer-events-none disabled:transform-none"
          >
            Confirm Password
          </button>
        </form>

      </div>
    </div>
  );
}