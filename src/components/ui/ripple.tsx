import { cn } from "@/lib/utils";

interface RippleProps {
  className?: string;
  color?: string;
  count?: number;
}

export const Ripple = ({
  className,
  color = "hsl(162 100% 39% / 0.08)",
  count = 5,
}: RippleProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-ripple-expand"
          style={{
            width: `${120 + i * 100}px`,
            height: `${120 + i * 100}px`,
            border: `1px solid ${color}`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${count * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
};
