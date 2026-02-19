import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
}

const blurFadeVariants = (
  yOffset: number,
  blur: string
): Variants => ({
  hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
});

export const BlurFade = ({
  children,
  className,
  delay = 0,
  duration = 0.4,
  yOffset = 6,
  blur = "6px",
}: BlurFadeProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={blurFadeVariants(yOffset, blur)}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
