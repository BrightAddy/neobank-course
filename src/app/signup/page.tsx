"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  type AuthProvider,
  getAuthErrorMessage,
  signUpWithEmailPassword,
  signInWithOAuthProvider,
} from "@/lib/auth";

export default function SignUpPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [socialProvider, setSocialProvider] = useState<AuthProvider | null>(
    null,
  );

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setAuthMessage("");

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail) {
      setAuthError("Enter your email address to receive a verification code.");
      return;
    }

    if (password.length < 6) {
      setAuthError("Create a password with at least 6 characters.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await signUpWithEmailPassword({
      email: trimmedEmail,
      password,
      data: {
        full_name: fullName.trim() || undefined,
        phone: phone.trim() || undefined,
      },
    });
    setIsSubmitting(false);

    if (error) {
      setAuthError(getAuthErrorMessage(error));
      return;
    }

    window.sessionStorage.setItem("neobank-auth-email", trimmedEmail);
    window.sessionStorage.setItem("neobank-auth-mode", "signup");
    setAuthMessage("Check your inbox for the 6-digit Supabase signup code.");
    router.push(
      `/verify-otp?mode=signup&email=${encodeURIComponent(trimmedEmail)}`,
    );
  };

  const handleSocialSignup = async (provider: AuthProvider) => {
    setAuthError("");
    setAuthMessage("");
    setSocialProvider(provider);

    const { error } = await signInWithOAuthProvider(provider);

    if (error) {
      setAuthError(getAuthErrorMessage(error));
      setSocialProvider(null);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let t = 0;
    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Gradients
      const g1 = ctx.createRadialGradient(
        cx + Math.sin(t * 0.4) * 80,
        cy + Math.cos(t * 0.3) * 60,
        0,
        cx,
        cy,
        canvas.width * 0.7,
      );
      g1.addColorStop(0, "rgba(37,99,235,0.13)");
      g1.addColorStop(0.5, "rgba(99,102,241,0.06)");
      g1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g2 = ctx.createRadialGradient(
        cx * 0.3 + Math.cos(t * 0.5) * 50,
        cy * 1.5 + Math.sin(t * 0.35) * 40,
        0,
        cx * 0.3,
        cy * 1.5,
        canvas.width * 0.5,
      );
      g2.addColorStop(0, "rgba(59,130,246,0.09)");
      g2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,184,${p.alpha})`;
        ctx.fill();
      });

      // Connections
      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(59,130,246,${(1 - dist / 90) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      t += 0.008;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse-dot { 
          0%, 100% { opacity: 1; transform: scale(1); } 
          50% { opacity: 0.5; transform: scale(0.7); } 
        }
        .animate-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
      `}</style>

      {/* Main Container - Stacked on mobile, side-by-side on large screens */}
      <div className="flex min-h-screen w-full flex-col font-sans bg-white lg:bg-[#080b14] lg:flex-row">
        {/* LEFT COLUMN - Top on mobile, 50% width on large screens */}
        <div className="relative flex w-full lg:w-1/2 flex-col overflow-hidden bg-[#080b14] p-6 sm:p-10">
          <canvas ref={canvasRef} className="absolute inset-0 z-0" />

          <div className="relative z-10 flex h-full flex-col">
            {/* Logo */}
            <div className="flex shrink-0 items-center gap-[10px]">
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#2563eb] text-[17px] font-black text-white shadow-[0_0_24px_rgba(37,99,235,0.45)]">
                N
              </div>
              <div className="flex flex-col">
                <span className="text-[19px] font-black leading-none tracking-[-0.5px] text-white">
                  NeoBank{" "}
                  <span className="font-normal text-[#3b82f6]">/&gt;</span>
                </span>
                <span className="mt-[3px] text-[9px] font-bold uppercase tracking-[2px] text-[#64748b]">
                  Engineering Masterclass
                </span>
              </div>
            </div>

            {/* Mid Section */}
            <div className="mt-8 flex flex-1 flex-col items-center justify-center gap-[2rem] lg:mt-0">
              {/* Headline Block */}
              <div className="max-w-[380px] text-center">
                <div className="mb-4 inline-flex items-center gap-[6px] rounded-full border border-[#3b82f6]/30 bg-[#2563eb]/15 px-[14px] py-[5px] text-[11px] font-bold uppercase tracking-[1.5px] text-[#60a5fa]">
                  <div className="animate-pulse-dot h-[6px] w-[6px] rounded-full bg-[#3b82f6]"></div>
                  24-Module Course
                </div>
                <h2 className="mb-3 text-[32px] font-black leading-[1.15] tracking-[-0.8px] text-white">
                  Ship a{" "}
                  <em className="not-italic text-[#3b82f6]">
                    production-grade
                  </em>{" "}
                  banking app
                </h2>
                <p className="text-[14px] font-normal leading-[1.6] text-[#64748b]">
                  Security, biometrics, encrypted state, BFF architecture, and
                  live transfers — every decision you&apos;d make at a real
                  fintech.
                </p>
              </div>

              {/* Tilted Phones Wrapper - Scaled slightly for very small screens */}
              <div className="relative mx-auto mt-4 flex h-[400px] sm:h-[460px] w-full max-w-[360px] origin-top scale-[0.85] sm:scale-100 justify-center">
                {/* PHONE 1: Home Dashboard */}
                <div className="absolute -left-[10px] top-[20px] z-10 w-[220px] rotate-[-8deg] overflow-hidden rounded-[36px] border-[5px] border-[#334155] bg-[#111827] shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-6deg]">
                  <div className="min-h-[420px] overflow-hidden bg-[#0f172a] pb-4">
                    {/* Dynamic Island */}
                    <div className="flex h-[22px] justify-center bg-[#111827]">
                      <div className="h-[18px] w-[72px] rounded-b-[14px] bg-[#0f172a]"></div>
                    </div>
                    {/* Header */}
                    <div className="flex items-center justify-between px-[16px] pb-[6px] pt-[10px]">
                      <div className="h-[34px] w-[34px] rounded-full border-[2px] border-[#1e3a5f] bg-gradient-to-br from-[#1e40af] to-[#3b82f6]"></div>
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border border-[#334155] bg-[#1e293b]">
                        <div className="h-[12px] w-[12px] rounded-[3px] bg-[#374151]"></div>
                      </div>
                    </div>
                    {/* Greeting */}
                    <div className="px-[16px] pb-[10px] pt-[4px]">
                      <div className="text-[10px] font-semibold uppercase tracking-[1px] text-[#64748b]">
                        Good morning
                      </div>
                      <div className="mt-[1px] text-[16px] font-bold text-white">
                        Daniel Baah 👋
                      </div>
                    </div>
                    {/* Balance Card */}
                    <div className="relative mx-[12px] mb-[14px] overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] p-[16px]">
                      <div className="absolute -right-[20px] -top-[20px] h-[80px] w-[80px] rounded-full bg-white/12 blur-[20px]"></div>
                      <div className="absolute -bottom-[30px] left-[20px] h-[60px] w-[60px] rounded-full bg-[#60a5fa]/20 blur-[15px]"></div>
                      <div className="relative z-10 mb-[6px] text-[10px] font-semibold uppercase tracking-[1px] text-white/70">
                        Total Balance
                      </div>
                      <div className="relative z-10 mb-[12px] text-[26px] font-black tracking-[-1px] text-white">
                        $24,592.00
                      </div>
                      <div className="relative z-10 flex gap-[6px]">
                        <div className="flex h-[22px] items-center justify-center rounded-[6px] bg-white/20 px-[8px]">
                          <div className="mr-[4px] h-[6px] w-[6px] rounded-full bg-[#93c5fd]"></div>
                          <span className="text-[9px] font-semibold text-white/80">
                            ••• 4821
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-[8px] px-[12px] pb-[14px]">
                      <div className="flex flex-col items-center gap-[4px] rounded-[12px] border border-[#334155] bg-[#1e293b] py-[10px] px-[6px]">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[#3b82f6]/20">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          >
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-semibold uppercase tracking-[0.5px] text-[#64748b]">
                          Send
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-[4px] rounded-[12px] border border-[#334155] bg-[#1e293b] py-[10px] px-[6px]">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[#10b981]/20">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-semibold uppercase tracking-[0.5px] text-[#64748b]">
                          Receive
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-[4px] rounded-[12px] border border-[#334155] bg-[#1e293b] py-[10px] px-[6px]">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[#f59e0b]/20">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          >
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-semibold uppercase tracking-[0.5px] text-[#64748b]">
                          Bills
                        </span>
                      </div>
                    </div>
                    {/* Transactions */}
                    <div className="px-[12px]">
                      <div className="mb-[10px] flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#94a3b8]">
                          Recent
                        </span>
                        <span className="text-[9px] font-semibold text-[#3b82f6]">
                          See all
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/5 py-[8px]">
                        <div className="flex items-center gap-[8px]">
                          <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[10px] bg-[#ef4444]/15">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#f87171"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            >
                              <circle cx="9" cy="21" r="1" />
                              <circle cx="20" cy="21" r="1" />
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                          </div>
                          <div className="flex flex-col gap-[2px]">
                            <span className="text-[11px] font-semibold text-[#e2e8f0]">
                              Amazon
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold text-[#f87171]">
                          -$84.99
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PHONE 2: Premium Card Screen */}
                <div className="absolute right-[0px] top-[0px] z-20 w-[220px] rotate-[6deg] overflow-hidden rounded-[36px] border-[5px] border-[#334155] bg-[#111827] shadow-[0_30px_60px_rgba(0,0,0,0.7),-20px_0_40px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-[8deg]">
                  <div className="min-h-[420px] overflow-hidden bg-[#0f172a] pb-4">
                    {/* Dynamic Island */}
                    <div className="flex h-[22px] justify-center bg-[#111827]">
                      <div className="h-[18px] w-[72px] rounded-b-[14px] bg-[#0f172a]"></div>
                    </div>
                    {/* Header */}
                    <div className="flex items-center justify-between px-[16px] pb-[16px] pt-[12px]">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#1e293b] border border-[#334155]">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#94a3b8"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </div>
                      <span className="text-[12px] font-bold text-white">
                        My Card
                      </span>
                      <div className="h-[30px] w-[30px]"></div> {/* Spacer */}
                    </div>

                    {/* Virtual Card */}
                    <div className="mx-[12px] relative h-[130px] overflow-hidden rounded-[16px] border border-white/10 bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155] p-[16px] shadow-xl">
                      <div className="absolute -right-[20px] -top-[20px] h-[80px] w-[80px] rounded-full bg-white/5 blur-[15px]"></div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#94a3b8]">
                          Neo Premium
                        </span>
                        <div className="flex">
                          <div className="h-[14px] w-[14px] rounded-full bg-[#ef4444] opacity-80 mix-blend-multiply"></div>
                          <div className="-ml-[6px] h-[14px] w-[14px] rounded-full bg-[#f59e0b] opacity-80 mix-blend-multiply"></div>
                        </div>
                      </div>
                      <div className="mt-[28px] font-mono text-[14px] tracking-[2px] text-white">
                        •••• •••• •••• 4821
                      </div>
                      <div className="mt-[16px] flex items-center justify-between">
                        <span className="text-[9px] font-semibold text-[#cbd5e1]">
                          DANIEL BAAH
                        </span>
                        <span className="text-[9px] font-semibold text-[#cbd5e1]">
                          12/28
                        </span>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-[20px] flex justify-center gap-[24px] px-[16px]">
                      <div className="flex flex-col items-center gap-[6px]">
                        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#1e293b] border border-[#334155]">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          >
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-semibold uppercase tracking-[0.5px] text-[#64748b]">
                          Freeze
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-[6px]">
                        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#1e293b] border border-[#334155]">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-semibold uppercase tracking-[0.5px] text-[#64748b]">
                          Details
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-[6px]">
                        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#1e293b] border border-[#334155]">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-semibold uppercase tracking-[0.5px] text-[#64748b]">
                          Settings
                        </span>
                      </div>
                    </div>

                    {/* Card Limits */}
                    <div className="mx-[16px] mt-[24px]">
                      <div className="mb-[10px] flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#e2e8f0]">
                          Online Payments
                        </span>
                        <div className="h-[16px] w-[28px] rounded-full bg-[#3b82f6] p-[2px] flex items-center justify-end">
                          <div className="h-[12px] w-[12px] rounded-full bg-white shadow-sm"></div>
                        </div>
                      </div>
                      <div className="mb-[10px] flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#e2e8f0]">
                          ATM Withdrawals
                        </span>
                        <div className="h-[16px] w-[28px] rounded-full bg-[#1e293b] border border-[#334155] p-[2px] flex items-center justify-start">
                          <div className="h-[10px] w-[10px] rounded-full bg-[#64748b]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex shrink-0 justify-center gap-8 pt-2">
                <div className="text-center">
                  <div className="text-[20px] font-black tracking-[-0.5px] text-white">
                    24
                  </div>
                  <div className="mt-[2px] text-[10px] font-semibold uppercase tracking-[1px] text-[#475569]">
                    Modules
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[20px] font-black tracking-[-0.5px] text-white">
                    12+
                  </div>
                  <div className="mt-[2px] text-[10px] font-semibold uppercase tracking-[1px] text-[#475569]">
                    Weeks
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[20px] font-black tracking-[-0.5px] text-white">
                    1
                  </div>
                  <div className="mt-[2px] text-[10px] font-semibold uppercase tracking-[1px] text-[#475569]">
                    Real App
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Takes 100% width on mobile, 50% on large screens */}
        <div className="flex w-full lg:w-1/2 items-center justify-center bg-white p-8 sm:p-12 lg:rounded-l-[40px] lg:p-[5rem] lg:shadow-[-20px_0_40px_rgba(0,0,0,0.3)] z-10">
          <div className="w-full max-w-[420px]">
            {/* The Premium Learning Note/Tagline */}
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[1px] text-[#2563eb]">
              🚀 Learn how to architect, secure, and deploy high-scale systems.
            </p>

            <h1 className="mb-[8px] text-[32px] font-black tracking-[-0.5px] text-[#0f172a]">
              Create an account
            </h1>
            <p className="mb-10 text-[15px] text-[#64748b]">
              Enter your details to secure your spot in the masterclass.
            </p>

            <form onSubmit={handleSignup} className="flex flex-col gap-5">
              <label className="mb-[8px] block text-[13px] font-bold text-[#1e293b]">
                Full Name
              </label>
              <input
                className="mb-[16px] w-full rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-white px-[16px] py-[14px] text-[15px] text-[#0f172a] outline-none transition-colors focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
                type="text"
                placeholder="Daniel Baah"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              {/* Separated Email Input */}
              <label className="mb-[8px] block text-[13px] font-bold text-[#1e293b]">
                Email
              </label>
              <input
                className="mb-[16px] w-full rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-white px-[16px] py-[14px] text-[15px] text-[#0f172a] outline-none transition-colors focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
                type="email"
                placeholder="baah23064@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Added Phone Number Input */}
              <label className="mb-[8px] block text-[13px] font-bold text-[#1e293b]">
                Phone Number
              </label>
              <input
                className="mb-[16px] w-full rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-white px-[16px] py-[14px] text-[15px] text-[#0f172a] outline-none transition-colors focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label className="mb-[8px] block text-[13px] font-bold text-[#1e293b]">
                Password
              </label>
              <div className="relative mb-[24px]">
              <input
                className="w-full rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-white px-[16px] py-[14px] pr-[52px] text-[15px] text-[#0f172a] outline-none transition-colors focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
                placeholder="••••••••"
              />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-[14px] top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-[8px] text-[#64748b] transition-colors hover:bg-[#eff6ff] hover:text-[#2563eb]"
                >
                  {showPassword ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.89 1 12a11.2 11.2 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A11.4 11.4 0 0 1 12 4c5 0 9.27 3.11 11 8a11.4 11.4 0 0 1-2.3 3.54" />
                      <path d="M14.12 14.12a3 3 0 0 1-4.24-4.24" />
                      <path d="M1 1l22 22" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              <label className="mb-[8px] block text-[13px] font-bold text-[#1e293b]">
                Verification
              </label>
              <p className="mb-[24px] rounded-[12px] border border-[#dbeafe] bg-[#eff6ff] px-[16px] py-[13px] text-[13px] font-medium leading-6 text-[#1d4ed8]">
                Supabase will email a 6-digit code. You will enter it on the
                next screen to activate your account.
              </p>

              {(authError || authMessage) && (
                <p
                  className={`rounded-[12px] px-[14px] py-[12px] text-[13px] font-semibold ${
                    authError
                      ? "bg-red-50 text-red-600"
                      : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  {authError || authMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-[12px] bg-[#0f172a] p-[16px] text-[15px] font-bold text-white transition-colors hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending code..." : "Send Verification Code"}
              </button>
            </form>

            <div className="my-[2rem] flex items-center gap-[12px]">
              <div className="h-[1px] flex-1 bg-[#e2e8f0]"></div>
              <span className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[1px] text-[#94a3b8]">
                or continue with
              </span>
              <div className="h-[1px] flex-1 bg-[#e2e8f0]"></div>
            </div>

            {/* Social Buttons - Responsive flex direction */}
            <div className="mb-[2rem] flex flex-col sm:flex-row gap-[12px]">
              <button
                type="button"
                onClick={() => handleSocialSignup("github")}
                disabled={socialProvider !== null}
                className="flex flex-1 items-center justify-center gap-[8px] rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-[#f8fafc] px-[14px] py-[14px] text-[14px] font-bold text-[#334155] transition-colors hover:border-[#cbd5e1] hover:bg-[#f1f5f9] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                {socialProvider === "github" ? "Connecting..." : "GitHub"}
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignup("google")}
                disabled={socialProvider !== null}
                className="flex flex-1 items-center justify-center gap-[8px] rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-[#f8fafc] px-[14px] py-[14px] text-[14px] font-bold text-[#334155] transition-colors hover:border-[#cbd5e1] hover:bg-[#f1f5f9] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                {socialProvider === "google" ? "Connecting..." : "Google"}
              </button>
            </div>

            <p className="text-center text-[14px] text-[#64748b]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-[#0f172a] hover:text-[#2563eb]"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
