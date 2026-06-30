"use client";

import Image from "next/image";

export default function ForWho() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/80 backdrop-blur-xl py-24 sm:py-32 font-sans">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            Who is this for?
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl mb-6">
            Designed for developers ready to{" "}
            <span className="text-blue-600">level up.</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            If you are tired of building the same basic to-do lists and want to
            understand how real tech companies architect scalable systems, you
            are in the right place.
          </p>
        </div>

        {/* Two-Column Persona Layout */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: The Frustrated Developer */}
          <div className="group relative flex flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl shadow-gray-200/50 transition-all hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50">
            {/* Image Container with Dark Overlay */}
            <div className="relative h-[240px] w-full overflow-hidden bg-slate-950">
              <Image
                src="/assets/home/frus1.jpg"
                alt="Frustrated developer looking at code"
                fill
                className="object-cover opacity-85 transition-all duration-500 group-hover:scale-105"
              />
              {/* Premium dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="flex flex-col p-8 sm:p-10 -mt-10 relative z-10 rounded-t-[24px] bg-white">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Stuck in Tutorial Hell?
              </h3>
              <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                You know React, you know how to set up a basic database, but you
                feel lost when it comes to connecting everything securely and
                deploying a robust architecture.
              </p>

              <ul className="flex flex-col gap-3 mt-auto">
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Building toys that don&apos;t look good on a resume.
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Confused by advanced state management.
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Unsure how real auth flows work in production.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: The Ambitious Engineer */}
          <div className="group relative flex flex-col overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-xl shadow-gray-200/50 transition-all hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50">
            {/* Image Container with Dark Overlay */}
            <div className="relative h-[240px] w-full overflow-hidden bg-slate-950">
              <Image
                src="/assets/home/happ2.jpg"
                alt="Developer successfully shipping code"
                fill
                className="object-cover opacity-85 transition-all duration-500 group-hover:scale-105"
              />
              {/* Premium dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="flex flex-col p-8 sm:p-10 -mt-10 relative z-10 rounded-t-[24px] bg-white">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Ready for Production.
              </h3>
              <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                You are ready to bridge the gap between junior and mid/senior
                level. You want to learn the best practices that tech leads
                expect when you join a serious engineering team.
              </p>

              <ul className="flex flex-col gap-3 mt-auto">
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Master complex microservices and BFF patterns.
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Implement financial-grade security and encryption.
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Build a portfolio piece that demands attention.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
