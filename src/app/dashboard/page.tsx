// src/app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/layout/Navbar"; // Or a specific dashboard sidebar/nav

export default function DashboardPage() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const code = new URLSearchParams(window.location.search).get("code");

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        window.history.replaceState(null, "", window.location.pathname);

        if (error && isMounted) {
          setAuthError(error.message);
          setIsCheckingAuth(false);
          return;
        }
      }

      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        // Redirect them to login if they aren't authenticated
        router.replace("/login");
        return;
      }

      if (isMounted) {
        setIsCheckingAuth(false);
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/login");
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [router]);

  if (isCheckingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-8 w-8 rounded-full border-2 border-blue-600/20 border-t-blue-600 animate-spin" />
      </main>
    );
  }

  if (authError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md rounded-2xl border border-red-100 bg-white p-6 text-center shadow-xl">
          <h1 className="text-xl font-black text-slate-900">Authentication failed</h1>
          <p className="mt-3 text-sm text-red-600">{authError}</p>
          <button
            type="button"
            onClick={() => router.replace("/login")}
            className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
          >
            Back to login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-24">
        <h1 className="text-3xl font-black text-slate-900">Welcome to your Dashboard!</h1>
        <p className="text-slate-600 mt-2">This space is now fully secure and private.</p>
        {/* Render your course modules, video player, or user progress tracking here */}
      </div>
    </main>
  );
}