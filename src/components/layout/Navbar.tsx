"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayName, setDisplayName] = useState("NeoBank User");
  const [displayEmail, setDisplayEmail] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Curriculum", href: "/curriculum", badge: "24 Modules" },
    { name: "Pricing", href: "/pricing" },
    { name: "Registration", href: "/signup", status: "live" },
  ];

  const initials = useMemo(() => {
    const source = displayName || displayEmail || "NeoBank User";
    const parts = source
      .replace(/@.*/, "")
      .split(/[\s._-]+/)
      .filter(Boolean);

    return (
      parts
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase() || "NU"
    );
  }, [displayEmail, displayName]);

  useEffect(() => {
    const applyUser = (email?: string, name?: string) => {
      const nextName = name || email?.split("@")[0] || "NeoBank User";

      setDisplayName(nextName);
      setDisplayEmail(email || "");
      setIsSignedIn(Boolean(email));
    };

    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      if (!user) {
        setIsSignedIn(false);
        return;
      }

      applyUser(
        user.email,
        user.user_metadata?.full_name || user.user_metadata?.name,
      );
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user;

      if (!user) {
        setIsSignedIn(false);
        return;
      }

      applyUser(
        user.email,
        user.user_metadata?.full_name || user.user_metadata?.name,
      );
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50">
      <nav className="bg-white/80 backdrop-blur-2xl border border-neutral-200/60 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500">
        <div className="px-6 lg:px-10">
          <div className="flex justify-between items-center h-20">
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
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.2em] mt-1.5">
                    Engineering Masterclass
                  </span>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group px-5 py-2.5 text-[15px] font-semibold text-neutral-600 hover:text-neutral-950 rounded-xl hover:bg-neutral-100/50 transition-all duration-300 flex items-center gap-2"
                >
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] bg-neutral-100 border border-neutral-200 text-neutral-600 px-2 py-0.5 rounded-md font-bold tracking-wide uppercase">
                      {link.badge}
                    </span>
                  )}
                  {link.status === "live" && (
                    <span className="relative flex h-2 w-2 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <div className="h-6 w-px bg-neutral-200" />
              {isSignedIn ? (
                <div className="flex items-center gap-3 pl-1 group">
                  <div className="flex flex-col text-right">
                    <span className="text-[14px] font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-200">
                      {displayName}
                    </span>
                    <span className="text-[11px] font-bold tracking-wide uppercase text-neutral-400 mt-0.5">
                      Premium Member
                    </span>
                  </div>
                  <div className="relative p-[1.5px] rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform duration-300">
                    <div className="h-10 w-10 rounded-[10px] bg-blue-600 flex items-center justify-center font-black text-white text-sm shadow-inner">
                      {initials}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href="/login"
                    className="text-[15px] font-semibold text-neutral-600 hover:text-neutral-950 px-4 py-2.5 rounded-xl hover:bg-neutral-100/50 transition-all duration-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="text-[15px] font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-600 hover:text-neutral-900 p-2 rounded-xl bg-neutral-50 border border-neutral-200/60"
                aria-label="Toggle menu"
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

        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-neutral-100 px-6 pt-4 pb-8 rounded-b-2xl shadow-2xl absolute w-full left-0 top-full mt-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-4 text-base font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span>{link.name}</span>
                    {link.status === "live" && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                    )}
                  </div>
                  {link.badge && (
                    <span className="text-xs bg-neutral-100 border border-neutral-200 text-neutral-600 px-2.5 py-1 rounded-md font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-100">
              {isSignedIn ? (
                <div className="flex items-center justify-between px-4 bg-neutral-50/50 p-4 rounded-xl border border-neutral-100">
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-neutral-900">
                      {displayName}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mt-0.5">
                      Premium Member
                    </span>
                  </div>
                  <div className="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white shadow-md">
                    {initials}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center py-3.5 text-base font-semibold text-neutral-600 hover:text-neutral-900 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200/60 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/10 text-center transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
