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

      {/* Grid overlay: vertical columns - more visible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, hsl(var(--primary) / 0.06) 0px, hsl(var(--primary) / 0.06) 1px, transparent 1px, transparent 72px)",
        }}
      />
      {/* Horizontal subtle lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--accent) / 0.03) 0px, hsl(var(--accent) / 0.03) 1px, transparent 1px, transparent 72px)",
        }}
      />
      {/* SVG arcs - more visible */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="arc-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="hsl(160 84% 39% / 0.15)" />
            <stop offset="50%" stopColor="hsl(263 70% 50% / 0.18)" />
            <stop offset="70%" stopColor="hsl(160 84% 39% / 0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[160, 260, 360, 460, 560, 660].map((y, i) => (
          <path
            key={i}
            d={`M-200 ${y} C 300 ${y - 120}, 900 ${y - 120}, 1400 ${y}`}
            fill="none"
            stroke="url(#arc-gradient)"
            strokeWidth="1.5"
            opacity={0.7 - i * 0.08}
          />
        ))}
      </svg>

      {/* ================== CONTENT ================== */}
      <div className="relative z-10">{children}</div>

      {/* ================== FOREGROUND ================== */}
      {/* Center-bottom rectangular glow with pulse */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-[4%] h-[100px] w-[480px] -translate-x-1/2 rounded-2xl blur-2xl"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--primary) / 0.25) 0%, hsl(var(--accent) / 0.20) 50%, hsl(var(--primary) / 0.25) 100%)",
          animation: "web3SubtlePulse 4s ease-in-out infinite",
        }}
      />

      {/* Stepped pillars silhouette - positioned lower (18% height) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[18%]">
        {/* dark fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        {/* bars */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[3px] px-6">
          {pillars.map((h, i) => (
            <div
              key={i}
              className="flex-1 max-w-[55px] transition-[height,opacity] duration-700"
              style={{
                height: isMounted ? `${h * 0.7}%` : "0%",
                opacity: isMounted ? 1 : 0,
                transitionDelay: `${i * 50}ms`,
                borderRadius: "3px 3px 0 0",
                background:
                  "linear-gradient(to top, hsl(var(--foreground) / 0.12) 0%, hsl(var(--primary) / 0.18) 35%, hsl(var(--accent) / 0.12) 65%, transparent 100%)",
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
