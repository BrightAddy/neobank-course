"use client";
import Image from "next/image";

export default function ForWho() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/80 backdrop-blur-xl py-24 sm:py-32 font-sans">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            Who is this for?
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl mb-6">
            Built for engineers who are{" "}
            <span className="text-blue-600">ready for the real thing.</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            You already know TypeScript, React, and the basics of mobile
            development. This course is for what comes next — regulated apps,
            real money, and the security decisions that come with both.
          </p>
        </div>

        {/* Two-Column Persona Layout */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: The developer who knows React but has never shipped fintech */}
          <div className="group relative flex flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl shadow-gray-200/50 transition-all hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50">
            <div className="relative h-[240px] w-full overflow-hidden bg-slate-950">
              <Image
                src="/assets/home/frus3.jpg"
                alt="Developer stuck on CRUD apps"
                fill
                className="object-cover opacity-85 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="flex flex-col p-8 sm:p-10 -mt-10 relative z-10 rounded-t-[24px] bg-white">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                You can build apps. Not systems.
              </h3>
              <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                You are comfortable with React and TypeScript, but every
                production codebase you encounter has layers — security, state
                encryption, session management, BFF patterns — that no tutorial
                ever covered.
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
                  You have never touched biometric auth, encrypted state, or
                  secure storage in a real app.
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
                  You don't know how to keep API credentials off the client in a
                  mobile app.
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
                  Your portfolio has nothing that signals you can work in a
                  regulated, money-moving environment.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: The engineer evaluating fintech/neobank architecture */}
          <div className="group relative flex flex-col overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-xl shadow-gray-200/50 transition-all hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50">
            <div className="relative h-[240px] w-full overflow-hidden bg-slate-950">
              <Image
                src="/assets/home/happ2.jpg"
                alt="Engineer shipping production fintech"
                fill
                className="object-cover opacity-85 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="flex flex-col p-8 sm:p-10 -mt-10 relative z-10 rounded-t-[24px] bg-white">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                You are ready to go deeper.
              </h3>
              <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                Whether you are a tech lead evaluating architecture for a wallet
                or neobank, or a security-curious engineer who wants hands-on
                experience with mobile threat modelling — this is where you get
                it.
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
                  Implement App Attest, Play Integrity, OWASP MASVS, and real
                  session lifecycle management.
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
                  Design a BFF that signs requests, enforces rate limits, and
                  writes audit logs — never exposing bank credentials to the
                  client.
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
                  Graduate with a public monorepo, a threat-model doc, and a
                  video walkthrough — a portfolio piece that speaks for itself.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
