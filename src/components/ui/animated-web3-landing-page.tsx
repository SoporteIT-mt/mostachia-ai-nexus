import React, { useEffect, useMemo, useState } from "react";

type Web3HeroBackgroundProps = {
  children?: React.ReactNode;
  /** If you want to reuse the background outside of the hero */
  className?: string;
};

/**
 * Background-only extraction of the provided "animated-web3-landing-page".
 * We keep your existing Hero copy/CTAs and render this as the hero backdrop.
 */
export function Web3HeroBackground({ children, className }: Web3HeroBackgroundProps) {
  // Symmetric pillar heights (percent). Tall at edges, low at center.
  const pillars = useMemo(
    () => [92, 84, 78, 70, 62, 54, 46, 34, 18, 34, 46, 54, 62, 70, 78, 84, 92],
    []
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={"relative min-h-screen w-full overflow-hidden bg-background " + (className ?? "")}>
      {/* ================== BACKGROUND ================== */}
      {/* Luminous elliptical gradients (adapted to brand tokens) */}
      <div
        className="pointer-events-none absolute -left-[20%] top-[-30%] h-[120%] w-[90%] blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 40% 35%, hsl(var(--primary) / 0.22) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-[20%] top-[-10%] h-[110%] w-[80%] blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 60% 40%, hsl(var(--accent) / 0.18) 0%, transparent 62%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-[10%] top-[10%] h-[90%] w-[80%] blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, hsl(var(--primary) / 0.10) 0%, hsl(var(--accent) / 0.08) 45%, transparent 70%)",
        }}
      />

      {/* Vignette corners for extra contrast */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 40%, transparent 35%, hsl(var(--background) / 0.9) 100%)",
        }}
      />

      {/* Grid overlay: columns + subtle arcs */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, hsl(var(--primary) / 0.04) 0px, hsl(var(--primary) / 0.04) 1px, transparent 1px, transparent 84px)",
        }}
      />
      <svg
        className="pointer-events-none absolute inset-0 opacity-60"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
            <stop offset="50%" stopColor="hsl(var(--accent) / 0.12)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </linearGradient>
        </defs>
        {[120, 210, 300, 390, 480, 570].map((y, i) => (
          <path
            key={i}
            d={`M-200 ${y} C 250 ${y - 140}, 950 ${y - 140}, 1400 ${y}`}
            fill="none"
            stroke="url(#arc)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* ================== CONTENT ================== */}
      <div className="relative z-10">{children}</div>

      {/* ================== FOREGROUND ================== */}
      {/* Center-bottom rectangular glow with pulse */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-[10%] h-[120px] w-[520px] -translate-x-1/2 rounded-2xl blur-2xl"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--primary) / 0.22) 0%, hsl(var(--accent) / 0.18) 50%, hsl(var(--primary) / 0.22) 100%)",
          animation: "web3SubtlePulse 4s ease-in-out infinite",
        }}
      />

      {/* Stepped pillars silhouette */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[28%]">
        {/* dark fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        {/* bars */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[2px] px-4">
          {pillars.map((h, i) => (
            <div
              key={i}
              className="flex-1 max-w-[60px] transition-[height,opacity] duration-700"
              style={{
                height: isMounted ? `${h}%` : "0%",
                opacity: isMounted ? 1 : 0,
                transitionDelay: `${i * 40}ms`,
                borderRadius: "2px 2px 0 0",
                background:
                  "linear-gradient(to top, hsl(var(--foreground) / 0.10) 0%, hsl(var(--primary) / 0.14) 30%, hsl(var(--accent) / 0.10) 60%, transparent 100%)",
              }}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes web3SubtlePulse {
            0%, 100% { opacity: 0.55; transform: translateX(-50%) scale(1); }
            50% { opacity: 0.85; transform: translateX(-50%) scale(1.03); }
          }
        `}
      </style>
    </div>
  );
}

// Full component version (kept for parity with the prompt).
// Not used directly in the page because your app already has its own Navbar + copy.
export function Web3HeroAnimated() {
  return (
    <Web3HeroBackground>
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
        <div className="text-center w-full">
          <div className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted-foreground">
            web3 toolkit
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Create and connect your world on web3
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            The essential toolkit for sharing and funding anything—from your latest idea to the next big DAO.
          </p>
        </div>
      </div>
    </Web3HeroBackground>
  );
}
