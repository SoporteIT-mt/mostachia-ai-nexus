import { useCallback, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: ReactNode;
  className?: string;
  gradientColor?: string;
  gradientSize?: number;
}

export const MagicCard = ({
  children,
  className,
  gradientColor = "hsl(162 100% 39% / 0.15)",
  gradientSize = 400,
}: MagicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mouse-x", "-999px");
    card.style.setProperty("--mouse-y", "-999px");
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] transition-colors duration-300 hover:border-primary/30",
        className
      )}
      style={
        {
          "--mouse-x": "-999px",
          "--mouse-y": "-999px",
          "--gradient-size": `${gradientSize}px`,
          "--gradient-color": gradientColor,
        } as React.CSSProperties
      }
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: 1,
          background: `radial-gradient(var(--gradient-size) circle at var(--mouse-x) var(--mouse-y), var(--gradient-color), transparent 40%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
