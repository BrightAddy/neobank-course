import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function DashboardPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-100 via-white to-white">
      <Navbar />
      <Hero />
    </main>
  );
}
