"use client";

const features = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        />
      </svg>
    ),
    color: "#2563eb", // Blue
    bg: "#eff6ff",
    label: "Auth & Identity",
    title: "Biometric login + transaction signing",
    description:
      "Face ID / Touch ID via expo-local-authentication, a PBKDF2 fallback passcode, session lifecycle with inactivity timers, force-close detection, and per-transaction biometric re-auth.",
    size: "large",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 11V7a5 5 0 0 1 10 0v4"
        />
      </svg>
    ),
    color: "#059669", // Emerald
    bg: "#ecfdf5",
    label: "Encrypted State",
    title: "Field-level encryption on every secret",
    description:
      "Legend-State v3 + MMKV with a custom persistence plugin. Auth tokens and PINs encrypted at HIGH, account data at MEDIUM, UI prefs in plaintext — transparent to feature code.",
    size: "large",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
    color: "#7c3aed", // Purple
    bg: "#f5f3ff",
    label: "BFF Architecture",
    title: "Bank credentials never touch the client",
    description:
      "Expo Router API Routes on EAS Hosting proxy every upstream call — JWT validation, HMAC-SHA-512 request signing, rate limiting, and audit logs all server-side.",
    size: "large",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M7 15h2m4 0h4M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
        />
      </svg>
    ),
    color: "#d97706", // Amber
    bg: "#fffbeb",
    label: "Money Movement",
    title: "Intra-bank, inter-bank, mobile money & cross-border",
    description:
      "Name enquiry, limit checks, idempotency keys, optimistic UI with rollback, scheduled transfers, and PDF receipts via expo-print.",
    size: "small",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    color: "#dc2626", // Red
    bg: "#fef2f2",
    label: "App Integrity",
    title: "App Attest + Play Integrity on every request",
    description:
      "Hardware-bound key attestation on iOS, Google Play Integrity on Android. Per-request assertion headers verified server-side — replays and proxies get a 403.",
    size: "small",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    color: "#0891b2", // Cyan
    bg: "#ecfeff",
    label: "Notifications",
    title: "Push notifications with deep-linking",
    description:
      "APNS + FCM via expo-notifications. Lock-screen privacy enforced — no balance in the payload. Tap a notification, land on the receipt screen.",
    size: "small",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 21h8M12 17v4"
        />
      </svg>
    ),
    color: "#2563eb", // Blue
    bg: "#eff6ff",
    label: "Virtual Cards",
    title: "Virtual card management",
    description:
      "Freeze / unfreeze, online payment toggle, ATM controls, and spending limits — all wired through your BFF.",
    size: "small",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    color: "#059669", // Emerald
    bg: "#ecfdf5",
    label: "Monitoring",
    title: "Sentry + audit logs + feature flags",
    description:
      "PII-scrubbed session replay, custom latency metrics per bank endpoint, server-side audit logs for every state-changing action, and gradual feature flag rollout.",
    size: "small",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
    ),
    color: "#7c3aed", // Purple
    bg: "#f5f3ff",
    label: "CI/CD",
    title: "EAS Workflows — lint, build, submit, OTA",
    description:
      "On-PR lint + test, on-tag production build + store submit, OTA bundle updates, and forced-update flow driven by a server version manifest.",
    size: "small",
  },
];

export default function WhatYoullBuild() {
  const largeFeatures = features.filter((f) => f.size === "large");
  const smallFeatures = features.filter((f) => f.size === "small");

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-32 font-sans">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            What you&apos;ll build
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl mb-6">
            NeoBank — a complete,{" "}
            <span className="text-blue-600">production-ready</span> banking app
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Not a clone, not a demo. A multi-platform iOS and Android consumer
            banking app you would actually ship — with every security,
            monitoring, and integration decision made deliberately.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-4">
          {/* Row 1 — 3 large cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {largeFeatures.map((f) => (
              <div
                key={f.label}
                className="group flex flex-col overflow-hidden rounded-[24px] bg-white border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
              >
                <div className="flex flex-col h-full">
                  {/* Icon + label */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-[12px] shrink-0"
                      style={{ background: f.bg, color: f.color }}
                    >
                      {f.icon}
                    </div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-[1.5px]"
                      style={{ color: f.color }}
                    >
                      {f.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 mt-auto">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 — 3 small cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {smallFeatures.slice(0, 3).map((f) => (
              <div
                key={f.label}
                className="group flex flex-col overflow-hidden rounded-[24px] bg-white border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-[10px] shrink-0"
                    style={{ background: f.bg, color: f.color }}
                  >
                    {f.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[1.5px]"
                    style={{ color: f.color }}
                  >
                    {f.label}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 3 — remaining 3 small cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {smallFeatures.slice(3).map((f) => (
              <div
                key={f.label}
                className="group flex flex-col overflow-hidden rounded-[24px] bg-white border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-[10px] shrink-0"
                    style={{ background: f.bg, color: f.color }}
                  >
                    {f.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[1.5px]"
                    style={{ color: f.color }}
                  >
                    {f.label}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 border-t border-slate-200 pt-16">
          {[
            { value: "24", label: "Modules" },
            { value: "2", label: "Backend paths" },
            { value: "iOS + Android", label: "Platforms" },
            { value: "1", label: "Shippable portfolio app" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-slate-900 tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
