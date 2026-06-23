"use client";

export default function CenteredPremiumLogin() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b14] p-4 font-sans sm:p-8">
      {/* Subtle Premium Animated Background */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-[#2563eb] opacity-20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 animate-[pulse_8s_ease-in-out_infinite_reverse] rounded-full bg-[#3b82f6] opacity-10 blur-[100px]"></div>

      {/* Premium White Form Card - Extra Curved Edges & 400px Max Width */}
      <div className="relative z-10 w-full max-w-[400px] rounded-[32px] bg-white p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] sm:p-10">
        <div className="mb-8 text-center">
          {/* Logo */}
          <div className="mx-auto mb-5 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#2563eb] text-[20px] font-black text-white shadow-[0_0_24px_rgba(37,99,235,0.45)]">
            N
          </div>
          <h1 className="mb-2 text-[24px] font-black tracking-[-0.5px] text-[#0f172a]">
            Welcome Back
          </h1>
          <p className="text-[14px] text-[#64748b]">Sign in to your account</p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5"
        >
          {/* Field 1: Email or Phone */}
          <div>
            <label className="mb-[8px] block text-[13px] font-bold text-[#1e293b]">
              Email or Phone Number
            </label>
            <input
              className="w-full rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-white px-[16px] py-[14px] text-[15px] text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
              type="text"
              placeholder="baah23064@gmail.com..."
            />
          </div>

          {/* Field 2: Password */}
          <div>
            <label className="mb-[8px] block text-[13px] font-bold text-[#1e293b]">
              Password
            </label>
            <input
              className="w-full rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-white px-[16px] py-[14px] text-[15px] text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
              type="password"
              placeholder="••••••••"
            />
            {/* Forgot Password Link - Positioned Neatly Beneath Input */}
            <div className="mt-[8px] text-right">
              <a
                href="#"
                className="text-[13px] font-bold text-[#2563eb] transition-colors hover:text-[#1d4ed8]"
              >
                Forgot?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button className="mt-2 w-full rounded-[12px] bg-[#2563eb] px-[16px] py-[14px] text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all hover:bg-[#1d4ed8] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] active:scale-[0.98]">
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-[14px] text-[#64748b]">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="font-bold text-[#0f172a] transition-colors hover:text-[#2563eb]"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
