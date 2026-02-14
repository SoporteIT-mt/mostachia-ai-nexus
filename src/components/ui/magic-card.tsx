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
        "relative overflow-hidden rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {children}
    </div>
  );
};
