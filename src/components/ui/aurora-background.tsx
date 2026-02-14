import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute -inset-[10px] opacity-40",
            "[background-image:repeating-linear-gradient(100deg,hsl(var(--primary))_10%,hsl(var(--accent)/0.6)_15%,hsl(var(--primary)/0.3)_20%,hsl(var(--accent)/0.4)_25%,hsl(var(--primary)/0.5)_30%)]",
            "[background-size:300%,_200%]",
            "[background-position:50%_50%,50%_50%]",
            "blur-[10px]",
            "after:content-[''] after:absolute after:inset-0",
            "after:[background-image:repeating-linear-gradient(100deg,hsl(var(--primary))_10%,hsl(var(--accent)/0.6)_15%,hsl(var(--primary)/0.3)_20%,hsl(var(--accent)/0.4)_25%,hsl(var(--primary)/0.5)_30%)]",
            "after:[background-size:200%,_100%]",
            "after:animate-aurora after:mix-blend-difference",
            "after:[background-attachment:fixed]",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black_40%,transparent_100%)]"
          )}
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
