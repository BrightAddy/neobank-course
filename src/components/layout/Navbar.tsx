"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const links = [
    { name: "Home", href: "/" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Modules", href: "#modules" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      {/* Glow */}
      <div className="absolute top-0 h-16 w-[60%] bg-purple-700/30 blur-[80px] pointer-events-none" />

      {/* Navbar container */}
      <div className="relative w-full max-w-[1200px] rounded-2xl border border-white/10 bg-[#050816]/90 backdrop-blur-2xl shadow-[0_0_60px_rgba(120,50,255,0.2)] flex items-center justify-between px-8 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="h-12 w-12 rounded-xl border border-violet-500/40 flex items-center justify-center text-violet-400 shadow-[0_0_20px_rgba(139,92,246,.3)] bg-violet-950/50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 21h18M5 10h14M6 10v9M10 10v9M14 10v9M18 10v9M4 7l8-4 8 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-wide leading-tight">
              <span className="text-violet-400">NeoBank </span>
              <span className="text-white">Academy</span>
            </h1>
            <p className="text-zinc-500 tracking-[3px] text-[10px] uppercase">
              Build. Secure. Ship.
            </p>
          </div>
        </Link>

        {/* NAV LINKS — always visible inline */}
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${
                activeLink === link.name
                  ? "text-violet-300 border border-violet-500/50 bg-violet-500/10 shadow-[0_0_20px_rgba(139,92,246,.2)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#start"
          className="shrink-0 flex items-center gap-2 px-7 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 shadow-[0_0_30px_rgba(99,102,241,.4)] hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,.6)] transition-all duration-300"
        >
          Start Learning <span>→</span>
        </Link>
      </div>
    </nav>
  );
}