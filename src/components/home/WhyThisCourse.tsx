"use client";
import Link from "next/link";

const deliverables = [
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "#fff",
    bg: "#0f172a",
    border: "rgba(255,255,255,0.08)",
    tag: "Public repo",
    title: "Full NeoBank monorepo",
    lines: ["apps/neobank", "packages/ui", "packages/store", "packages/features"],
    lineColor: "#4ade80",
    isCode: true,
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "#1e40af",
    bg: "#eff6ff",
    border: "rgba(59,130,246,0.15)",
    tag: "Threat model",
    title: "10+ STRIDE entries",
    lines: [
      "S — Credential exfiltration via proxy",
      "T — MMKV store tampering",
      "R — Audit log bypass",
      "I — Deeplink param injection",
    ],
    lineColor: "#3b82f6",
    isCode: false,
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "rgba(124,58,237,0.15)",
    tag: "Video walkthrough",
    title: "End-to-end demo",
    lines: [
      "Registration → KYC",
      "Biometric login",
      "Transfer + receipt",
      "Force-close → auto-logout",
    ],
    lineColor: "#7c3aed",
    isCode: false,
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "#065f46",
    bg: "#ecfdf5",
    border: "rgba(16,185,129,0.15)",
    tag: "Security audit PR",
    title: "Peer code review",
    lines: [
      "Missing Zod schema on deeplink",
      "JWT logged via console",
      "userId trusted from body",
    ],
    lineColor: "#10b981",
    isCode: false,
  },
];

export default function WhyThisCourse() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-32 font-sans">
      {/* Subtle ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-24">

          {/* LEFT — Text */}
          <div className="w-full lg:w-[38%] lg:sticky lg:top-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
              <span className="flex h-2 w-2 rounded-full bg-blue-500" />
              Why this course
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-6 leading-[1.1]">
              You don&apos;t just finish.{" "}
              <span className="text-blue-600">You ship.</span>
            </h2>

            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              Most courses end with a certificate. This one ends with four
              tangible artifacts you built under real constraints — the kind of
              proof that speaks louder in a job interview or client pitch than any
              completion badge.
            </p>

            <p className="text-base leading-relaxed text-slate-500 mb-10">
              The capstone isn&apos;t optional. You graduate by submitting a public
              monorepo, a threat-model doc with at least 10 STRIDE entries, an
              end-to-end video walkthrough, and a security audit PR on a peer&apos;s
              repo — written evidence that you understand what you built and why
              it&apos;s secure.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Secure your spot
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* RIGHT — Deliverable cards */}
          <div className="w-full lg:w-[62%] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div
                key={d.tag}
                className="relative flex flex-col overflow-hidden rounded-[20px] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: d.bg,
                  border: `1px solid ${d.border}`,
                }}
              >
                {/* Tag + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[1.5px] px-2.5 py-1 rounded-full"
                    style={{
                      color: d.color,
                      background: d.bg === "#0f172a"
                        ? "rgba(255,255,255,0.1)"
                        : `${d.border}`,
                    }}
                  >
                    {d.tag}
                  </span>
                  <div style={{ color: d.color }}>{d.icon}</div>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: d.bg === "#0f172a" ? "#fff" : "#0f172a" }}
                >
                  {d.title}
                </h3>

                {/* Lines */}
                <div
                  className={`flex flex-col gap-1.5 rounded-[10px] p-3 ${d.isCode ? "font-mono" : ""}`}
                  style={{
                    background: d.bg === "#0f172a"
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0.7)",
                    border: `1px solid ${d.border}`,
                  }}
                >
                  {d.lines.map((line, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span
                        className="text-[10px] shrink-0"
                        style={{ color: d.lineColor }}
                      >
                        {d.isCode ? "→" : "✓"}
                      </span>
                      <span
                        className="text-[12px] leading-relaxed"
                        style={{
                          color: d.bg === "#0f172a" ? "#94a3b8" : "#475569",
                          fontFamily: d.isCode ? "monospace" : "inherit",
                        }}
                      >
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Bottom proof strip */}
            <div className="sm:col-span-2 flex items-center justify-between rounded-[16px] border border-slate-100 bg-slate-50 px-6 py-4">
              {[
                { value: "4", label: "Tangible deliverables" },
                { value: "10+", label: "STRIDE entries" },
                { value: "1", label: "Public portfolio repo" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-slate-900">{s.value}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
