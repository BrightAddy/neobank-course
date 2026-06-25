"use client";
 
import { useState } from "react";
import Link from "next/link";
 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Curriculum", href: "/curriculum", badge: "24 Modules" },
    { name: "Pricing", href: "/pricing" },
    { name: "Registration", href: "/registration", status: "live" },
  ];
 
  return (
<div className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50">
      {/* PREMIUM TOUCHES: 
        - Increased blur radius (backdrop-blur-2xl)
        - Softer, more expansive drop shadow 
        - Slightly deeper border for contrast against white backgrounds
      */}
<nav className="bg-white/80 backdrop-blur-2xl border border-neutral-200/60 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500">
<div className="px-6 lg:px-10">
<div className="flex justify-between items-center h-20">
            {/* 1. Brand Logo & Subtext */}
<div className="flex-shrink-0 flex items-center">
<Link href="/" className="flex items-center gap-3 group">
<div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                  N
</div>
<div className="flex flex-col">
<span className="text-[22px] font-black text-neutral-900 tracking-tight leading-none">
                    NeoBank{" "}
<span className="text-blue-600 font-medium">/&gt;</span>
</span>
                  {/* Added premium subtext */}
<span className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.2em] mt-1.5">
                    Engineering Masterclass
</span>
</div>
</Link>
</div>
 
            {/* 2. Desktop Navigation Links */}
<div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
<Link
                  key={link.name}
                  href={link.href}
                  // Increased font size to text-[15px] and added more padding for breathing room
                  className="relative group px-5 py-2.5 text-[15px] font-semibold text-neutral-600 hover:text-neutral-950 rounded-xl hover:bg-neutral-100/50 transition-all duration-300 flex items-center gap-2"
>
                  {link.name}
 
                  {link.badge && (
<span className="text-[10px] bg-neutral-100 border border-neutral-200 text-neutral-600 px-2 py-0.5 rounded-md font-bold tracking-wide uppercase">
                      {link.badge}
</span>
                  )}
                  {link.status && (
<span className="relative flex h-2 w-2 ml-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                  )}
</Link>
              ))}
</div>
 
            {/* 3. Luxury User Profile */}
<div className="hidden lg:flex items-center gap-5">
              {/* Subtle divider line */}
<div className="h-6 w-px bg-neutral-200"></div>
 
              {/* Premium Dummy User Badge */}
<div className="flex items-center gap-3 pl-1 cursor-pointer group">
<div className="flex flex-col text-right">
<span className="text-[14px] font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-200">
                    Daniel Baah
</span>
<span className="text-[11px] font-bold tracking-wide uppercase text-neutral-400 mt-0.5">
                    Premium Member
</span>
</div>
 
                {/* Microgradient Avatar Ring */}
<div className="relative p-[1.5px] rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform duration-300">
                  {/* UPDATED: Changed bg-white to bg-blue-600 and text-neutral-900 to text-white */}
<div className="h-10 w-10 rounded-[10px] bg-blue-600 flex items-center justify-center font-black text-white text-sm shadow-inner">
                    DB
</div>
</div>
</div>
</div>
 
            {/* 4. Mobile Menu Toggle */}
<div className="lg:hidden flex items-center">
<button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-600 hover:text-neutral-900 p-2 rounded-xl bg-neutral-50 border border-neutral-200/60"
>
<svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
>
                  {isOpen ? (
<path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
<path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
</svg>
</button>
</div>
</div>
</div>
 
        {/* Mobile Menu Panel */}
        {isOpen && (
<div className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-neutral-100 px-6 pt-4 pb-8 rounded-b-2xl shadow-2xl absolute w-full left-0 top-full mt-2">
<div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
<Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-4 text-base font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors"
>
<span>{link.name}</span>
                  {link.badge && (
<span className="text-xs bg-neutral-100 border border-neutral-200 text-neutral-600 px-2.5 py-1 rounded-md font-bold">
                      {link.badge}
</span>
                  )}
</Link>
              ))}
</div>
 
            {/* Mobile Profile Block */}
<div className="mt-6 pt-6 border-t border-neutral-100 flex items-center justify-between px-4 bg-neutral-50/50 p-4 rounded-xl border border-neutral-100">
<div className="flex flex-col">
<span className="text-base font-bold text-neutral-900">
                  Daniel Baah
</span>
<span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mt-0.5">
                  Premium Member
</span>
</div>
              {/* UPDATED: Replaced complex gradient with clean solid brand blue to align with desktop setup */}
<div className="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white shadow-md">
                DB
</div>
</div>
</div>
        )}
</nav>
</div>
  );
}