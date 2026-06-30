"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Stops the page from reloading
    setIsLoading(true); // Start the loading spinner
    // Simulate a backend delay, then route to the main home page
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Flowing wave lines — soft blue, tuned for a light background
    const waves = Array.from({ length: 8 }, (_, i) => ({
      offset: (i / 8) * Math.PI * 2,
      speed: 0.003 + i * 0.0005,
      amplitude: 80 + i * 30,
      yBase: 0.2 + i * 0.1,
      hue: 210 + i * 8,
      alpha: 0.08 + (i % 3) * 0.05,
      width: 1.5 + (i % 3) * 0.5,
    }));

    // Floating particles
    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.2,
      alpha: Math.random() * 0.5 + 0.15,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.01 + Math.random() * 0.02,
    }));

    // 4-pointed star sparkles
    const sparkles = Array.from({ length: 6 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 6 + Math.random() * 10,
      alpha: Math.random() * 0.35 + 0.15,
      rot: Math.random() * Math.PI,
      rotSpeed: 0.002 + Math.random() * 0.003,
    }));

    let t = 0;
    let animId: number;

    const drawSparkle = (
      x: number,
      y: number,
      size: number,
      alpha: number,
      rot: number,
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "#3b82f6";
      ctx.beginPath();
      // 4-pointed star
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const outerX = Math.cos(angle) * size;
        const outerY = Math.sin(angle) * size;
        const innerAngle = angle + Math.PI / 4;
        const innerX = Math.cos(innerAngle) * size * 0.2;
        const innerY = Math.sin(innerAngle) * size * 0.2;
        if (i === 0) ctx.moveTo(outerX, outerY);
        else ctx.lineTo(outerX, outerY);
        ctx.lineTo(innerX, innerY);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Base light-blue wash
      const baseGlow = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        canvas.width * 0.7,
      );
      baseGlow.addColorStop(0, "rgba(191,219,254,0.55)");
      baseGlow.addColorStop(0.4, "rgba(219,234,254,0.35)");
      baseGlow.addColorStop(1, "rgba(239,246,255,0)");
      ctx.fillStyle = baseGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Secondary glow top-right
      const g2 = ctx.createRadialGradient(
        canvas.width * 0.75,
        canvas.height * 0.15,
        0,
        canvas.width * 0.75,
        canvas.height * 0.15,
        canvas.width * 0.4,
      );
      g2.addColorStop(0, "rgba(147,197,253,0.40)");
      g2.addColorStop(1, "rgba(239,246,255,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Bottom-left glow
      const g3 = ctx.createRadialGradient(
        canvas.width * 0.1,
        canvas.height * 0.85,
        0,
        canvas.width * 0.1,
        canvas.height * 0.85,
        canvas.width * 0.45,
      );
      g3.addColorStop(0, "rgba(96,165,250,0.30)");
      g3.addColorStop(1, "rgba(239,246,255,0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Flowing wave lines
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.lineWidth = wave.width;
        for (let x = 0; x <= canvas.width; x += 3) {
          const progress = x / canvas.width;
          const y =
            canvas.height * wave.yBase +
            Math.sin(
              progress * Math.PI * 3 + t * wave.speed * 200 + wave.offset,
            ) *
              wave.amplitude +
            Math.sin(progress * Math.PI * 1.5 + t * wave.speed * 100) *
              (wave.amplitude * 0.4);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `hsla(${wave.hue},85%,55%,0)`);
        gradient.addColorStop(0.3, `hsla(${wave.hue},85%,55%,${wave.alpha})`);
        gradient.addColorStop(
          0.7,
          `hsla(${wave.hue + 20},85%,60%,${wave.alpha * 1.2})`,
        );
        gradient.addColorStop(1, `hsla(${wave.hue},85%,55%,0)`);
        ctx.strokeStyle = gradient;
        ctx.stroke();
      });

      // Stars
      stars.forEach((s) => {
        s.twinkle += s.twinkleSpeed;
        const a = s.alpha * (0.6 + 0.4 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${a})`;
        ctx.fill();
      });

      // Sparkles
      sparkles.forEach((sp) => {
        sp.rot += sp.rotSpeed;
        drawSparkle(
          sp.x,
          sp.y,
          sp.size,
          sp.alpha * (0.7 + 0.3 * Math.sin(t * 0.8 + sp.rot)),
          sp.rot,
        );
      });

      t += 0.016;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#eff6ff] p-4 font-sans">
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Card — premium, wider on desktop */}
      <div className="relative z-10 w-full max-w-[420px] md:max-w-[560px]">
        {/* Outer glow ring around card */}
        <div className="absolute -inset-[1px] rounded-[34px] bg-gradient-to-b from-blue-400/40 via-blue-300/15 to-transparent pointer-events-none" />

        <div className="relative rounded-[32px] bg-white/[0.97] shadow-[0_32px_80px_-8px_rgba(37,99,235,0.25),0_0_0_1px_rgba(255,255,255,0.6)] backdrop-blur-xl px-10 py-10 md:px-16 md:py-14">
          {/* Logo lockup */}
          <div className="mb-7 md:mb-9 flex flex-col items-center text-center">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-[44px] w-[44px] md:h-[52px] md:w-[52px] items-center justify-center rounded-[12px] bg-gradient-to-br from-blue-500 to-blue-700 shadow-[0_0_24px_rgba(37,99,235,0.50)]">
                <span className="text-[20px] md:text-[24px] font-black text-white leading-none">
                  N
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[22px] md:text-[26px] font-black tracking-[-0.5px] text-[#0b1120] leading-none">
                  NeoBank{" "}
                  <span className="text-blue-600 font-semibold">/&gt;</span>
                </span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] text-[#94a3b8] mt-[3px]">
                  Engineering Masterclass
                </span>
              </div>
            </div>
            <h1 className="text-[26px] md:text-[32px] font-black tracking-[-0.6px] text-[#0b1120] mb-1">
              Welcome Back
            </h1>
            <p className="text-[14px] md:text-[15px] text-[#64748b] font-medium">
              Sign in to your NeoBank account
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5 md:gap-6">
            {/* Email / Phone */}
            <div>
              <label className="mb-2 block text-[13px] md:text-[14px] font-bold text-[#1e293b]">
                Email or Phone Number
              </label>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-white px-4 py-[13px] md:py-[15px] text-[15px] md:text-[16px] text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all duration-200 focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-[13px] md:text-[14px] font-bold text-[#1e293b]">
                Password
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="w-full rounded-[12px] border-[1.5px] border-[#e2e8f0] bg-white px-4 py-[13px] md:py-[15px] text-[15px] md:text-[16px] text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all duration-200 focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]"
              />
              <div className="mt-2 text-right">
                <a
                  href="/forget-otp"
                  className="text-[13px] md:text-[14px] font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Forgot?
                </a>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                background: "linear-gradient(to right, #2563eb, #3b82f6)",
                color: "#ffffff",
                border: "none",
                cursor: isLoading ? "not-allowed" : "pointer",
                opacity: isLoading ? 0.7 : 1,
              }}
              className="mt-1 w-full rounded-[12px] px-4 py-[14px] md:py-[16px] text-[15px] md:text-[16px] font-bold shadow-[0_6px_20px_rgba(37,99,235,0.40)] transition-all duration-200 hover:shadow-[0_8px_28px_rgba(37,99,235,0.55)] active:scale-[0.98] flex items-center justify-center h-[52px] md:h-[56px]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="mt-7 md:mt-9 text-center text-[14px] md:text-[15px] text-[#64748b]">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
