"use client";

const row1 = [
  {
    name: "Expo",
    bg: "#000",
    fg: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M1.976 15.81c-.07.116-.04.263.07.347.068.05.153.063.232.036l1.044-.37a.29.29 0 0 0 .177-.178l2.647-7.31a.073.073 0 0 1 .139 0l2.647 7.31c.03.082.097.148.177.178l1.044.37a.258.258 0 0 0 .232-.036.25.25 0 0 0 .07-.348L6.38 7.096a.44.44 0 0 0-.76 0L1.976 15.81zm11.45 0c-.07.116-.04.263.07.347.068.05.153.063.232.036l1.044-.37a.29.29 0 0 0 .177-.178l2.647-7.31a.073.073 0 0 1 .139 0l2.647 7.31c.03.082.097.148.177.178l1.044.37a.258.258 0 0 0 .232-.036.25.25 0 0 0 .07-.348l-4.074-8.714a.44.44 0 0 0-.76 0L13.426 15.81z"/>
      </svg>
    ),
  },
  {
    name: "React Native",
    bg: "#20232a",
    fg: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    bg: "#3178C6",
    fg: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
  },
  {
    name: "Bun",
    bg: "#FBF0DF",
    fg: "#C07737",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#C07737">
        <path d="M12 2C6.48 2 2 5.48 2 10c0 2.4 1.1 4.56 2.84 6.04.08.6-.04 1.4-.5 2.1-.1.14-.02.34.14.38.88.22 2.2-.04 3.2-.84C8.7 18.2 10.3 18.5 12 18.5s3.3-.3 4.32-.82c1 .8 2.32 1.06 3.2.84.16-.04.24-.24.14-.38-.46-.7-.58-1.5-.5-2.1C20.9 14.56 22 12.4 22 10c0-4.52-4.48-8-10-8zm-3 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
    ),
  },
  {
    name: "Nx",
    bg: "#143055",
    fg: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.214H0V4.714L6.453 4.72 11.987 14.138zM24 4.714l-5.193 8.427-3.132-4.923 5.534-8.214h-3.806L12 10.286l-5.534-9.282H2.66l5.534 9.282L12 5.712l5.534 9.282H24V4.714z"/>
      </svg>
    ),
  },
  {
    name: "Legend-State",
    bg: "#4f46e5",
    fg: "#fff",
    abbr: "LS",
    icon: null,
  },
  {
    name: "MMKV",
    bg: "#1e293b",
    fg: "#fff",
    abbr: "MK",
    icon: null,
  },
  {
    name: "Reanimated",
    bg: "#7c3aed",
    fg: "#fff",
    abbr: "RA",
    icon: null,
  },
];

const row2 = [
  {
    name: "Supabase",
    bg: "#1C1C1C",
    fg: "#3ECF8E",
    icon: (
      <svg viewBox="0 0 24 24" fill="#3ECF8E" width="18" height="18">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.003 7.51c.015.985 1.26 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.58L11.9 1.036z"/>
      </svg>
    ),
  },
  {
    name: "Sentry",
    bg: "#362D59",
    fg: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M14.493 0L7.647 12.16a11.005 11.005 0 0 1 5.508 8.836h-2.232A8.773 8.773 0 0 0 6.52 13.47L3.393 19.08a13.218 13.218 0 0 1 5.24 7.917H2a.706.706 0 0 1-.612-1.06L9.44 11.88 7.18 7.92.588 19.08C-.26 20.6.84 22.5 2.58 22.5H10.7a.706.706 0 0 0 .612-1.06 11.21 11.21 0 0 0-4.7-6.56l1.128-2.038a13.46 13.46 0 0 1 5.44 8.598h4.54a15.69 15.69 0 0 0-6.028-11.517l1.152-2.082A17.922 17.922 0 0 1 19.38 21.44H21.6c.942 0 1.526-1.02 1.064-1.832L15.553 7.92l2.148-3.88L24 15.567V22.5h-2.4v-6.44L14.493 0z"/>
      </svg>
    ),
  },
  {
    name: "Snyk",
    bg: "#4C4A73",
    fg: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm6.24 16.896l-2.04 1.176L12 15.336l-4.2 2.736-2.04-1.176V7.104L12 10.92l6.24-3.816v9.792zM12 2.424l6.24 3.6L12 9.624 5.76 6.024 12 2.424z"/>
      </svg>
    ),
  },
  {
    name: "EAS",
    bg: "#000",
    fg: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M1.976 15.81c-.07.116-.04.263.07.347.068.05.153.063.232.036l1.044-.37a.29.29 0 0 0 .177-.178l2.647-7.31a.073.073 0 0 1 .139 0l2.647 7.31c.03.082.097.148.177.178l1.044.37a.258.258 0 0 0 .232-.036.25.25 0 0 0 .07-.348L6.38 7.096a.44.44 0 0 0-.76 0L1.976 15.81zm11.45 0c-.07.116-.04.263.07.347.068.05.153.063.232.036l1.044-.37a.29.29 0 0 0 .177-.178l2.647-7.31a.073.073 0 0 1 .139 0l2.647 7.31c.03.082.097.148.177.178l1.044.37a.258.258 0 0 0 .232-.036.25.25 0 0 0 .07-.348l-4.074-8.714a.44.44 0 0 0-.76 0L13.426 15.81z"/>
      </svg>
    ),
  },
  {
    name: "TanStack Query",
    bg: "#ef4444",
    fg: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm3.5 6L12 11.5 8.5 8l-1.5 1.5L11.5 14 7 18.5l1.5 1.5L13 15.5l3.5 3.5 1.5-1.5L13.5 14 17 10.5 15.5 8z"/>
      </svg>
    ),
  },
  {
    name: "Zod",
    bg: "#3b82f6",
    fg: "#fff",
    abbr: "ZOD",
    icon: null,
  },
  {
    name: "Tailwind CSS",
    bg: "#0ea5e9",
    fg: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: "Biome",
    bg: "#60a5fa",
    fg: "#fff",
    abbr: "BM",
    icon: null,
  },
];

function Badge({ item }: { item: (typeof row1)[0] }) {
  return (
    <div className="flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-white px-4 py-2.5 shadow-sm whitespace-nowrap select-none">
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black"
        style={{ background: item.bg, color: item.fg }}
      >
        {item.icon ?? item.abbr}
      </div>
      <span className="text-[13px] font-semibold text-slate-700">{item.name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  35s linear infinite; }
        .marquee-right { animation: marquee-right 35s linear infinite; }
        .marquee-wrap:hover .marquee-left,
        .marquee-wrap:hover .marquee-right { animation-play-state: paused; }
      `}</style>

      <section className="relative w-full overflow-hidden bg-slate-50/80 backdrop-blur-xl py-20 font-sans">
        {/* Subtle top/bottom border lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
              <span className="flex h-2 w-2 rounded-full bg-blue-500" />
              Tech stack
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Tools production fintech teams actually use.
            </h2>
            <p className="mt-3 text-base text-slate-500 max-w-xl mx-auto">
              Every library in this course was chosen because it appears in real banking codebases — not because it&apos;s trendy.
            </p>
          </div>

          {/* Row 1 — scrolls left */}
          <div className="marquee-wrap mb-3 overflow-hidden">
            <div className="marquee-left flex gap-3 w-max">
              {[...row1, ...row1].map((item, i) => (
                <Badge key={`r1-${i}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="marquee-wrap overflow-hidden">
            <div className="marquee-right flex gap-3 w-max">
              {[...row2, ...row2].map((item, i) => (
                <Badge key={`r2-${i}`} item={item} />
              ))}
            </div>
          </div>

          {/* Bottom count strip */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {[
                { value: "16+", label: "Libraries & tools" },
                { value: "2", label: "Backend runtimes" },
                { value: "0", label: "Secrets on the client" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-2xl font-black text-slate-900">{s.value}</span>
                  <span className="text-sm font-medium text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
