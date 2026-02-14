import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
  size?: number;
}

export const Spotlight = ({
  className,
  fill = "hsl(162 100% 39% / 0.12)",
  size = 600,
}: SpotlightProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 -translate-x-1/2 -top-20 z-0",
        className
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `conic-gradient(from 180deg at 50% 0%, transparent 0deg, ${fill} 120deg, transparent 240deg)`,
        filter: "blur(80px)",
      }}
    />
  );
};
