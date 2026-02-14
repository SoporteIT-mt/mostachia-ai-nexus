import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  width?: number;
  height?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  fill?: string;
}

export const DotPattern = ({
  className,
  width = 20,
  height = 20,
  cx = 1,
  cy = 1,
  cr = 1,
  fill = "currentColor",
}: DotPatternProps) => {
  const id = `dot-pattern-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-muted-foreground/20",
        className
      )}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx={cx} cy={cy} r={cr} fill={fill} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};
