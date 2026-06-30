import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ForWho from "@/components/home/ForWho";


export default function DashboardPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-100 via-white to-white">
      <Navbar />
      <Hero />
      <About />
      <ForWho />
    </main>
  );
}
