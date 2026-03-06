// focus-rail.tsx
import * as React from "react";
import { motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  videoSrc?: string;
  href?: string;
  meta?: string;
  icon?: string;
};

interface FocusRailProps {
  items: FocusRailItem[];
  initialIndex?: number;
  loop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

const BASE_SPRING = { type: "spring" as const, stiffness: 300, damping: 30, mass: 1 };
const TAP_SPRING = { type: "spring" as const, stiffness: 450, damping: 18, mass: 1 };

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 5000,
  className,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);
  const lastWheelTime = React.useRef(0);
  const [cardWidth, setCardWidth] = React.useState(480);

  const count = items.length;
  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];

  // Responsive card sizing
  React.useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardWidth(300);
      else if (window.innerWidth < 1024) setCardWidth(420);
      else setCardWidth(520);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  // Wheel with debounce (no scroll hijack)
  const onWheel = React.useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime.current < 400) return;
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 20) {
        if (delta > 0) handleNext();
        else handlePrev();
        lastWheelTime.current = now;
      }
    },
    [handleNext, handlePrev]
  );

  // Autoplay
  React.useEffect(() => {
    if (!autoPlay || isHovering) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval]);

  // Keyboard
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // Swipe / Drag
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) handleNext();
    else if (swipe > swipeConfidenceThreshold) handlePrev();
  };

  const visibleIndices = [-2, -1, 0, 1, 2];

  return (
    <div
      className={cn("relative w-full select-none outline-none", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onWheel={onWheel}
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <motion.div
          key={`bg-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {activeItem.imageSrc ? (
            <img
              src={activeItem.imageSrc}
              alt=""
              className="h-full w-full object-cover blur-[80px] saturate-150 opacity-20 scale-125"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-mint-400/10 via-transparent to-cyan-500/10" />
          )}
          <div className="absolute inset-0 bg-background/80" />
        </motion.div>
      </div>

      {/* Main Stage */}
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden py-8 sm:py-12 lg:py-16">
        {/* Draggable Rail */}
        <motion.div
          className="flex items-center justify-center"
          style={{ perspective: 1200 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset;
            const index = wrap(0, count, absIndex);
            const item = items[index];

            if (!loop && (absIndex < 0 || absIndex >= count)) return null;

            const isCenter = offset === 0;
            const dist = Math.abs(offset);

            const xOffset = offset * (cardWidth * 0.72);
            const zOffset = -dist * 160;
            const scale = isCenter ? 1 : 0.82;
            const rotateY = offset * -18;
            const opacity = isCenter ? 1 : Math.max(0.08, 1 - dist * 0.5);
            const blur = isCenter ? 0 : dist * 5;
            const brightness = isCenter ? 1 : 0.45;

            return (
              <motion.div
                key={`card-${index}-${offset}`}
                className={cn(
                  "absolute rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08]",
                  isCenter ? "z-20 cursor-grab active:cursor-grabbing" : "z-10 cursor-pointer"
                )}
                style={{
                  width: cardWidth,
                  height: cardWidth * 0.625,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale,
                  rotateY,
                  opacity,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                }}
                transition={(val: string) => {
                  if (val === "scale") return TAP_SPRING;
                  return BASE_SPRING;
                }}
                onClick={() => {
                  if (offset !== 0) setActive((p) => p + offset);
                }}
              >
                {/* Content: Video > Image > Placeholder */}
                {item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  /* Clean placeholder for future video */
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-card via-card to-muted/30 p-6">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-mint-400/60" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-3xl sm:text-4xl">{item.icon}</span>
                    <span className="text-xs font-medium text-muted-foreground">
                      Video próximamente
                    </span>
                  </div>
                )}

                {/* Lighting layers */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: isCenter
                      ? "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4))"
                      : "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info + Controls */}
        <div className="relative z-30 mt-8 flex flex-col items-center gap-6 px-4">
          {/* Text info */}
          <div className="text-center">
            <motion.div
              key={`info-${activeIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              {activeItem.meta && (
                <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground">
                  {activeItem.meta}
                </span>
              )}
              <h3 className="mt-2 flex items-center justify-center gap-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl font-display">
                {activeItem.icon && <span>{activeItem.icon}</span>}
                {activeItem.title}
              </h3>
              {activeItem.description && (
                <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground sm:text-base font-light">
                  {activeItem.description}
                </p>
              )}
            </motion.div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground backdrop-blur-sm transition-all hover:border-mint-400/40 hover:bg-mint-400/10 hover:text-mint-400"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-[3rem] text-center font-mono text-sm text-muted-foreground">
              {activeIndex + 1} / {count}
            </span>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground backdrop-blur-sm transition-all hover:border-mint-400/40 hover:bg-mint-400/10 hover:text-mint-400"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
