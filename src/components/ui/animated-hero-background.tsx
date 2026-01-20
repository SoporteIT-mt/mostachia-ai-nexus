import React, { useState, useEffect } from "react";

export function AnimatedHeroBackground({ children }: { children?: React.ReactNode }) {
  // Symmetric pillar heights (percent). Tall at edges, low at center.
  const pillars = [92, 84, 78, 70, 62, 54, 46, 34, 18, 34, 46, 54, 62, 70, 78, 84, 92];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes heroFadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroSubtlePulse {
            0%, 100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.02);
            }
          }

          @keyframes heroGlowPulse {
            0%, 100% {
              opacity: 0.4;
            }
            50% {
              opacity: 0.7;
            }
          }
          
          .hero-animate-fadeInUp {
            animation: heroFadeInUp 0.8s ease-out forwards;
          }

          .hero-grid-overlay {
            background-image: 
              repeating-linear-gradient(
                90deg,
                rgba(0, 200, 150, 0.03) 0px,
                rgba(0, 200, 150, 0.03) 1px,
                transparent 1px,
                transparent 80px
              ),
              repeating-linear-gradient(
                0deg,
                rgba(124, 58, 237, 0.02) 0px,
                rgba(124, 58, 237, 0.02) 1px,
                transparent 1px,
                transparent 80px
              );
          }
        `}
      </style>

      <div className="relative min-h-screen w-full overflow-hidden bg-[hsl(222,47%,7%)]">
        {/* ================== BACKGROUND GRADIENTS ================== */}
        {/* Primary mint glow - left side */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: "-10%",
            top: "10%",
            width: "60%",
            height: "70%",
            background: "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(0,200,150,0.15) 0%, transparent 70%)",
          }}
        />
        
        {/* Accent violet glow - right side */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: "-5%",
            top: "20%",
            width: "50%",
            height: "60%",
            background: "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Center gradient blend */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: "20%",
            top: "30%",
            width: "60%",
            height: "50%",
            background: "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0,200,150,0.08) 0%, rgba(124,58,237,0.05) 50%, transparent 80%)",
          }}
        />

        {/* Vignette corners for depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(11,15,25,0.6) 100%)",
          }}
        />

        {/* Grid overlay */}
        <div className="hero-grid-overlay pointer-events-none absolute inset-0 opacity-60" />

        {/* ================== CONTENT ================== */}
        <div className="relative z-10">
          {children}
        </div>

        {/* ================== FOREGROUND EFFECTS ================== */}
        {/* Center-bottom glow with pulse animation */}
        <div
          className="pointer-events-none absolute"
          style={{
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "40%",
            height: "20%",
            background: "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(0,200,150,0.25) 0%, rgba(124,58,237,0.1) 40%, transparent 70%)",
            animation: "heroGlowPulse 4s ease-in-out infinite",
          }}
        />

        {/* Stepped pillars silhouette */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[28%]">
          {/* Dark fade overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, hsl(222,47%,7%) 0%, transparent 100%)",
            }}
          />

          {/* Pillar bars */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[2px] px-4">
            {pillars.map((h, i) => (
              <div
                key={i}
                className="flex-1 max-w-[60px] transition-all duration-700"
                style={{
                  height: isMounted ? `${h}%` : "0%",
                  background: `linear-gradient(to top, rgba(0,200,150,0.4) 0%, rgba(124,58,237,0.2) 60%, transparent 100%)`,
                  transitionDelay: `${i * 40}ms`,
                  borderRadius: "2px 2px 0 0",
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom gradient fade for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      </div>
    </>
  );
}
