import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  className?: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
}

export const NumberTicker = ({
  value,
  className,
  duration = 2,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
}: NumberTickerProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(
          decimalPlaces > 0
            ? latest.toFixed(decimalPlaces)
            : Math.round(latest).toString()
        );
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, decimalPlaces, motionValue]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};
