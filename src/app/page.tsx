// src/app/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ForWho from "@/components/home/ForWho";
import WhatYoullBuild from "@/components/home/WhatYoullBuild";
import TechStack from "@/components/home/TechStack";
import WhyThisCourse from "@/components/home/WhyThisCourse";
import PricingTeaser from "@/components/home/PricingTeaser";
import FinalCTA from "@/components/home/FinalCTA";

export default function OnboardingHomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-100 via-white to-white">
      <Navbar />
      <Hero />
      <About />
      <ForWho />
      <WhatYoullBuild />
      <TechStack />
      <WhyThisCourse />
      <PricingTeaser />
      <FinalCTA />
      <Footer />
    </main>
  );
}
