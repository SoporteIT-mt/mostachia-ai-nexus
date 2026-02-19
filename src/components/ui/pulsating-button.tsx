import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface PulsatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  pulseColor?: string;
  className?: string;
}

export const PulsatingButton = ({
  children,
  pulseColor = "rgba(115, 215, 203, 0.7)",
  className,
  ...props
}: PulsatingButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-primary-foreground",
        "bg-primary hover:bg-primary/90 transition-colors",
        className
      )}
      {...props}
    >
      {/* Pulsing ring */}
      <span
        className="absolute inset-0 rounded-[inherit] animate-pulsate"
        style={
          {
            "--pulse-color": pulseColor,
            boxShadow: `0 0 0 0 var(--pulse-color)`,
          } as React.CSSProperties
        }
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};
