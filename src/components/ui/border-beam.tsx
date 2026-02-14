import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 12,
  colorFrom = "hsl(162 100% 50%)",
  colorTo = "hsl(42 90% 70%)",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        overflow: "hidden",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "1px",
      }}
    >
      <div
        className="absolute inset-[-200%] animate-border-beam"
        style={
          {
            "--border-beam-size": `${size}px`,
            "--border-beam-duration": `${duration}s`,
            "--border-beam-delay": `${delay}s`,
            "--border-beam-from": colorFrom,
            "--border-beam-to": colorTo,
            background: `conic-gradient(from 0deg, transparent 0%, transparent 25%, var(--border-beam-from) 30%, var(--border-beam-to) 35%, transparent 40%, transparent 100%)`,
            animationDelay: `var(--border-beam-delay)`,
            animationDuration: `var(--border-beam-duration)`,
          } as React.CSSProperties
        }
      />
    </div>
  );
};
