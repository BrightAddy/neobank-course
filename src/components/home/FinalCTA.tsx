"use client";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-28 sm:py-36 font-sans">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      {/* Top border line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Cohort 1 — Enrolling now
        </div>

        {/* Headline */}
        <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-[1.08]">
          Build the app that proves <br className="hidden sm:block" />
          <span className="text-blue-600">you are production-ready.</span>
        </h2>

        {/* Supporting line */}
        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-12">
          24 modules. A complete banking app. Four portfolio deliverables. Join
          engineers who are done practising and ready to ship the real thing.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#0f172a] px-9 py-4 text-[15px] font-bold text-white transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5"
          >
            Register now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>

          <Link
            href="/curriculum"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[14px] border border-slate-200 bg-slate-50 px-9 py-4 text-[15px] font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-100 hover:-translate-y-0.5"
          >
            View curriculum
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Trust line */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[13px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              />
            </svg>
            Secure checkout
          </span>
          <span className="hidden sm:block text-slate-200">·</span>
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Cohort 1 starts August 2025
          </span>
          <span className="hidden sm:block text-slate-200">·</span>
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Limited seats per cohort
          </span>
        </div>
      </div>
    </section>
  );
}
