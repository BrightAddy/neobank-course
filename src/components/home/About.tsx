"use client";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-32 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-x-12 gap-y-20 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center">

          {/* LEFT COLUMN — two phones side by side, both fully visible */}
          <div className="relative flex w-full lg:w-[48%] justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative flex w-full max-w-[480px] items-end justify-center gap-5 py-6">

              {/* PHONE 1 — Dashboard */}
              <div className="relative z-10 w-[200px] shrink-0 -rotate-[4deg] overflow-hidden rounded-[34px] border-[5px] border-[#334155] bg-[#111827] shadow-[0_30px_60px_rgba(15,23,42,0.25),0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-transform duration-500 hover:-translate-y-2 hover:-rotate-[2deg]">
                <div className="overflow-hidden bg-[#0f172a] pb-4">
                  {/* Dynamic Island */}
                  <div className="flex h-[20px] justify-center bg-[#111827]">
                    <div className="h-[16px] w-[64px] rounded-b-[14px] bg-[#0f172a]"></div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between px-4 pb-2 pt-3">
                    <div className="h-8 w-8 rounded-full border-2 border-[#1e3a5f] bg-gradient-to-br from-[#1e40af] to-[#3b82f6]"></div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-[#334155] bg-[#1e293b]">
                      <div className="h-2.5 w-2.5 rounded-sm bg-[#374151]"></div>
                    </div>
                  </div>

                  {/* Portfolio value */}
                  <div className="px-4 pb-3 pt-2">
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-[#64748b]">
                      Portfolio
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="text-[17px] font-bold text-white">GHS 142,592</span>
                      <span className="text-[9px] font-bold text-emerald-400">+4.8%</span>
                    </div>
                  </div>

                  {/* Mini bar chart */}
                  <div className="px-4 mb-4">
                    <div className="h-[68px] w-full flex items-end justify-between gap-1.5 border-b border-[#1e293b] pb-2">
                      <div className="w-1/6 bg-blue-500/20 rounded-t-sm h-[40%]"></div>
                      <div className="w-1/6 bg-blue-500/40 rounded-t-sm h-[60%]"></div>
                      <div className="w-1/6 bg-blue-500/60 rounded-t-sm h-[35%]"></div>
                      <div className="w-1/6 bg-blue-500/80 rounded-t-sm h-[80%]"></div>
                      <div className="w-1/6 bg-blue-400 rounded-t-sm h-[100%] shadow-[0_0_12px_rgba(96,165,250,0.5)]"></div>
                      <div className="w-1/6 bg-blue-500/70 rounded-t-sm h-[70%]"></div>
                    </div>
                  </div>

                  {/* Transactions */}
                  <div className="px-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="19 12 12 19 5 12" />
                            <line x1="12" y1="5" x2="12" y2="19" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10.5px] font-semibold text-white">Deposit</span>
                          <span className="text-[9px] text-[#64748b]">Today, 9:41 AM</span>
                        </div>
                      </div>
                      <span className="text-[10.5px] font-bold text-green-400">+2,400</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10.5px] font-semibold text-white">Transfer</span>
                          <span className="text-[9px] text-[#64748b]">Yesterday</span>
                        </div>
                      </div>
                      <span className="text-[10.5px] font-bold text-white">-850</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-amber-500/10 flex items-center justify-center">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10.5px] font-semibold text-white">Bill payment</span>
                          <span className="text-[9px] text-[#64748b]">Mon</span>
                        </div>
                      </div>
                      <span className="text-[10.5px] font-bold text-white">-120</span>
                    </div>
                  </div>

                  {/* Tab bar */}
                  <div className="mx-4 mt-4 flex items-center justify-between rounded-xl border border-[#1e293b] bg-[#1e293b]/40 px-3 py-2">
                    <div className="h-[5px] w-[5px] rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.7)]"></div>
                    <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                    <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                    <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                  </div>
                </div>
              </div>

              {/* PHONE 2 — Biometric confirm, slightly taller/forward */}
              <div className="relative z-20 w-[220px] shrink-0 -translate-y-4 rotate-[4deg] overflow-hidden rounded-[36px] border-[5px] border-[#334155] bg-[#111827] shadow-[0_36px_70px_rgba(15,23,42,0.3),0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-transform duration-500 hover:-translate-y-6 hover:rotate-[2deg]">
                <div className="overflow-hidden bg-[#0f172a] pb-4">
                  {/* Dynamic Island */}
                  <div className="flex h-[20px] justify-center bg-[#111827]">
                    <div className="h-[16px] w-[68px] rounded-b-[14px] bg-[#0f172a]"></div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between px-4 pb-2 pt-3">
                    <div className="flex h-[26px] w-[26px] items-center justify-center rounded-lg border border-[#334155] bg-[#1e293b]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </div>
                    <span className="text-[10.5px] font-bold text-white">Verify Transfer</span>
                    <div className="h-[26px] w-[26px]"></div>
                  </div>

                  <div className="flex flex-col items-center px-4 pt-5 pb-6">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30 mb-4 shadow-[0_0_22px_rgba(59,130,246,0.25)]">
                      <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.6" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <p className="text-[13px] font-semibold text-white mb-1">Confirm transfer</p>
                    <p className="text-[10.5px] text-[#64748b] mb-6">Use Face ID to continue</p>

                    <div className="w-full rounded-xl border border-[#1e293b] bg-[#1e293b]/40 px-3.5 py-2.5 mb-3">
                      <div className="flex justify-between text-[10.5px]">
                        <span className="text-[#64748b]">To</span>
                        <span className="text-white font-medium">Kojo Mensah</span>
                      </div>
                      <div className="flex justify-between text-[10.5px] mt-1.5">
                        <span className="text-[#64748b]">Amount</span>
                        <span className="text-white font-medium">GHS 850.00</span>
                      </div>
                      <div className="flex justify-between text-[10.5px] mt-1.5 pt-1.5 border-t border-[#1e293b]">
                        <span className="text-[#64748b]">Fee</span>
                        <span className="text-emerald-400 font-medium">Free</span>
                      </div>
                    </div>

                    <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/20 border border-blue-400/40">
                      <div className="h-4 w-4 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)]"></div>
                    </div>
                    <p className="mt-3 text-[9px] font-semibold uppercase tracking-[1px] text-[#475569]">
                      Hold to authenticate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating caption chip under the phones */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-bold text-slate-700">Built with React Native + Expo</span>
            </div>
          </div>

          {/* RIGHT COLUMN — Text Content (unchanged) */}
          <div className="w-full lg:w-[52%] text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              NeoBank Engineering Masterclass
            </p>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-6">
              A production-grade bank, <br className="hidden lg:block" />
              <span className="text-blue-600">built module by module.</span>
            </h2>

            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              This is a 24-module, project-based curriculum for engineers who
              want to ship a real banking app on Expo and React Native — not a
              demo. You&apos;ll build NeoBank from the ground up: encrypted state,
              biometric auth, a server-side BFF that keeps every credential off
              the client, and the same security and monitoring decisions used by
              production fintech teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">
              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-2">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Bank-grade security</h3>
                <p className="text-sm text-slate-500">
                  Biometric login, encrypted-at-rest state, secure vaults, and
                  App Attest / Play Integrity checks on every request.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-2">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">BFF architecture</h3>
                <p className="text-sm text-slate-500">
                  A server tier that signs requests, rate-limits, audit-logs,
                  and holds every bank credential — the client never sees a
                  secret.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-2">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h2m4 0h4M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Real money movement</h3>
                <p className="text-sm text-slate-500">
                  Intra-bank, inter-bank, mobile money, and cross-border
                  transfers — with limit checks, idempotency, and receipts.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-2">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Ship-ready workflow</h3>
                <p className="text-sm text-slate-500">
                  Snyk, Sentry, CI/CD with EAS, feature flags, and a 24-module
                  hardening checklist before going live.
                </p>
              </div>
            </div>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
            >
              View full curriculum
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}