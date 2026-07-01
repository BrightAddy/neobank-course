"use client";
import Link from "next/link";

export default function PricingTeaser() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/80 backdrop-blur-xl py-20 font-sans">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left — value prop */}
            <div className="flex-1">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
                <span className="flex h-2 w-2 rounded-full bg-blue-500" />
                Pricing
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mb-4 leading-[1.1]">
                One price.{" "}
                <span className="text-blue-600">Lifetime access.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                Pay once and own the entire course — all 24 modules, every lab,
                and every future update as the stack evolves. No subscriptions,
                no paywalled chapters.
              </p>
            </div>

            {/* Right — price card */}
            <div className="lg:w-[340px] shrink-0">
              <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100/80">
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-blue-50 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10">
                  {/* Price */}
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className="text-[15px] font-bold text-slate-400 mb-1.5">USD</span>
                    <span className="text-5xl font-black tracking-tight text-slate-900">$1,000</span>
                  </div>

                  {/* Installment — subtle, secondary */}
                  <p className="text-[13px] text-slate-400 mb-6">
                    or 3 monthly payments of{" "}
                    <span className="font-semibold text-slate-500">$334</span>
                  </p>

                  {/* What's included */}
                  <div className="flex flex-col gap-2.5 mb-7">
                    {[
                      "24 modules + all labs",
                      "Full NeoBank monorepo",
                      "Lifetime access + updates",
                      "Capstone review & feedback",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[13px] font-medium text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/pricing"
                    className="flex w-full items-center justify-center gap-2 rounded-[12px] bg-slate-900 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    See full pricing details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}