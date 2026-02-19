import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: ReactNode;
  className?: string;
}

export const MagicCard = ({
  children,
  className,
}: MagicCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-lg",
        "bg-[rgba(32,61,75,0.3)] border border-[rgba(115,215,203,0.1)] hover:border-[rgba(115,215,203,0.25)] hover:shadow-[0_0_30px_rgba(115,215,203,0.1)]",
        className
      )}
    >
      {children}
    </div>
  );
};
