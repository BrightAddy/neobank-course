import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-white text-4xl font-bold">NeoBank Course</h1>
      </div>
    </main>
  );
}