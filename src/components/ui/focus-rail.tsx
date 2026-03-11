import * as React from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
  meta?: string;
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

const SPRING = {
  type: "spring" as const,
  stiffness: 260,
  damping: 26,
  mass: 1,
};

const SPRING_SNAPPY = {
  type: "spring" as const,
  stiffness: 400,
  damping: 22,
  mass: 0.8,
};

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 4000,
  className,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);

  const count = items.length;
  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];

  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  React.useEffect(() => {
    if (!autoPlay || isHovering) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); handlePrev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); handleNext(); }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  const onDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) handleNext();
    else if (swipe > swipeConfidenceThreshold) handlePrev();
  };

  // Build visible cards: use absIndex as key so cards PERSIST across active changes
  // and animate to their new offset position (slide + blur transition)
  const visibleOffsets = [-2, -1, 0, 1, 2];
  const cards = visibleOffsets.map((offset) => {
    const absIndex = active + offset;
    const index = wrap(0, count, absIndex);
    return { offset, absIndex, index, item: items[index] };
  });

  return (
    <div
      className={cn(
        "relative w-full select-none outline-none",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* Background Ambience — crossfade, no hard edges */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={`bg-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={activeItem.imageSrc}
              alt=""
              className="h-full w-full object-cover blur-[120px] saturate-[1.5] opacity-15 scale-[1.5]"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Feathered edges so ambience blends into page background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, hsl(var(--background)) 100%)
            `,
          }}
        />
      </div>

      {/* Main Stage */}
      <div className="relative mx-auto w-full max-w-7xl flex flex-col justify-center px-4 sm:px-8 py-12 lg:py-16">
        {/* 3D Card Rail */}
        <motion.div
          className="relative flex items-center justify-center h-[420px] sm:h-[480px] lg:h-[540px]"
          style={{ perspective: "1200px" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={onDragEnd}
        >
          <AnimatePresence initial={false}>
            {cards.map(({ offset, absIndex, index, item }) => {
              if (!loop && (absIndex < 0 || absIndex >= count)) return null;

              const isCenter = offset === 0;
              const dist = Math.abs(offset);

              const xOffset = offset * 300;
              const zOffset = -dist * 180;
              const scale = isCenter ? 1 : 0.82 - dist * 0.02;
              const rotateY = offset * -18;
              const opacity = isCenter ? 1 : Math.max(0.15, 0.7 - dist * 0.25);
              const blur = isCenter ? 0 : dist * 5;
              const brightness = isCenter ? 1 : 0.55;

              return (
                <motion.div
                  key={absIndex}
                  className={cn(
                    "absolute w-[260px] h-[350px] sm:w-[300px] sm:h-[400px] lg:w-[360px] lg:h-[470px] rounded-2xl sm:rounded-3xl overflow-hidden",
                    isCenter
                      ? "z-20 cursor-grab active:cursor-grabbing ring-1 ring-white/[0.12]"
                      : "z-10 cursor-pointer ring-1 ring-white/[0.06]"
                  )}
                  initial={{
                    x: (offset > 0 ? 1 : -1) * 600,
                    z: -300,
                    scale: 0.7,
                    rotateY: (offset > 0 ? -1 : 1) * 40,
                    opacity: 0,
                  }}
                  animate={{
                    x: xOffset,
                    z: zOffset,
                    scale,
                    rotateY,
                    opacity,
                    filter: `blur(${blur}px) brightness(${brightness})`,
                  }}
                  exit={{
                    x: (offset <= 0 ? -1 : 1) * 600,
                    z: -300,
                    scale: 0.7,
                    rotateY: (offset <= 0 ? 1 : -1) * 40,
                    opacity: 0,
                    transition: { duration: 0.4 },
                  }}
                  transition={{
                    x: SPRING,
                    z: SPRING,
                    rotateY: SPRING,
                    opacity: { ...SPRING, stiffness: 200 },
                    filter: { ...SPRING, stiffness: 200 },
                    scale: SPRING_SNAPPY,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => {
                    if (offset !== 0) setActive((p) => p + offset);
                  }}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />

                  {/* Bottom vignette on center, full darken on sides */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: isCenter
                        ? "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%)"
                        : "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
                    }}
                  />
                  {/* Specular highlight */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%)",
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Info Panel + Controls */}
        <div className="relative z-30 mt-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 max-w-3xl mx-auto w-full">
          {/* Left: member info */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`info-${activeIndex}`}
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.35 }}
              >
                {activeItem.meta && (
                  <span className="inline-block rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold tracking-wide text-neutral-300 mb-2">
                    {activeItem.meta}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                  {activeItem.title}
                </h3>
                {activeItem.description && (
                  <p className="mt-1.5 max-w-lg text-sm sm:text-base text-neutral-400 leading-relaxed">
                    {activeItem.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: controls */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm p-1">
              <button
                onClick={handlePrev}
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-[2.5rem] text-center font-mono text-xs text-neutral-500">
                {activeIndex + 1} / {count}
              </span>
              <button
                onClick={handleNext}
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {activeItem.href && (
              <a
                href={activeItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-400 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                LinkedIn
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
