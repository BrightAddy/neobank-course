"use client";

import Link from "next/link";

export default function Hero() {
  return (
    /* Added overflow-hidden to prevent the Ken Burns zoom from spilling out of the section */
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* INLINE ANIMATION STYLES 
          Using a standard style block makes these custom premium animations 100% self-contained 
          without messing up your global CSS paths.
      */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes slideUpEntrance {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* BACKGROUND IMAGE LAYER with Ken Burns Effect */}
      <div className="absolute inset-0 bg-[url('/assets/home/hero1.jpg')] bg-cover bg-center bg-no-repeat animate-[kenburns_25s_ease-in-out_infinite]" />

      {/* BALANCED DARK OVERLAY: Reduced opacity slightly so the image shines through nicely */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65 backdrop-blur-[1px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center pt-40 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 animate-fade-in shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
            Enrollment is Open for 2026
          </span>
        </div>

        {/* Main Headline with Custom Entrance Effect */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-md animate-[slideUpEntrance_1s_ease-out_forwards]">
          Engineer the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Modern Banking
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed drop-shadow-sm">
          An elite, 24-module masterclass designed for developers who want to
          build high-performance, scalable financial systems.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/curriculum"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 text-center"
          >
            Explore Curriculum
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-sm text-center"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
