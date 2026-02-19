import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  speed?: number; // seconds for one full cycle
}

export const Marquee = ({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  speed = 30,
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem] gap-[var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            vertical ? "flex-col" : "flex-row",
            vertical
              ? "animate-marquee-vertical"
              : reverse
              ? "animate-marquee-reverse"
              : "animate-marquee-forward",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{ animationDuration: `${speed}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
