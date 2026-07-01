"use client";
import Link from "next/link";

const navigation = {
  course: [
    { name: "Curriculum", href: "/curriculum" },
    { name: "Pricing", href: "/pricing" },
    { name: "Tutors", href: "/tutors" },
    { name: "Register", href: "/signup" },
    { name: "Contact", href: "/contact" },
  ],
  stack: [
    { name: "Expo & React Native", href: "/curriculum" },
    { name: "TypeScript", href: "/curriculum" },
    { name: "Supabase", href: "/curriculum" },
    { name: "Sentry & Snyk", href: "/curriculum" },
    { name: "EAS & CI/CD", href: "/curriculum" },
  ],
  legal: [
    { name: "Privacy policy", href: "/privacy" },
    { name: "Terms of use", href: "/terms" },
    { name: "Refund policy", href: "/refund" },
  ],
};

const socials = [
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#080b14] font-sans">
      {/* Top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Brand col */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-[10px] w-fit">
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#2563eb] text-[17px] font-black text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                N
              </div>
              <div className="flex flex-col">
                <span className="text-[19px] font-black leading-none tracking-[-0.5px] text-white">
                  NeoBank{" "}
                  <span className="font-normal text-[#3b82f6]">/&gt;</span>
                </span>
                <span className="mt-[3px] text-[9px] font-bold uppercase tracking-[2px] text-[#475569]">
                  Engineering Masterclass
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-[14px] leading-relaxed text-slate-400 max-w-sm">
              A 24-module, project-based curriculum for engineers who want to
              ship a production-grade mobile banking app on Expo and React Native.
              Not a demo. The real thing.
            </p>

            {/* Cohort badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-4 py-2 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[12px] font-semibold text-blue-400">
                Cohort 1 — Enrolling now
              </span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/8 bg-white/4 text-slate-400 transition-all hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">

            {/* Course */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-slate-500 mb-5">
                Course
              </p>
              <ul className="flex flex-col gap-3">
                {navigation.course.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-slate-400 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-slate-500 mb-5">
                Tech stack
              </p>
              <ul className="flex flex-col gap-3">
                {navigation.stack.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-slate-400 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-slate-500 mb-5">
                Stay in the loop
              </p>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
                Get notified when new modules drop and when the next cohort opens.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-[10px] border border-white/8 bg-white/5 px-4 py-2.5 text-[13px] text-white placeholder:text-slate-600 outline-none transition-all focus:border-blue-500/40 focus:bg-white/8"
                />
                <button className="w-full rounded-[10px] bg-blue-600 px-4 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-blue-500">
                  Notify me
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        {/* Bottom bar */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-slate-600 order-2 sm:order-1">
            © {new Date().getFullYear()} NeoBank Engineering Masterclass. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6 order-1 sm:order-2">
            {navigation.legal.map((item, i) => (
              <span key={item.name} className="flex items-center gap-6">
                <Link
                  href={item.href}
                  className="text-[13px] text-slate-600 transition-colors hover:text-slate-300"
                >
                  {item.name}
                </Link>
                {i < navigation.legal.length - 1 && (
                  <span className="text-slate-700">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}