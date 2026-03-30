"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

function getHiddenStyle(direction: Direction): { opacity: number; filter: string; x?: number; y?: number } {
  switch (direction) {
    case "up": return { opacity: 0, filter: "blur(8px)", y: 60 };
    case "down": return { opacity: 0, filter: "blur(8px)", y: -60 };
    case "left": return { opacity: 0, filter: "blur(8px)", x: 60 };
    case "right": return { opacity: 0, filter: "blur(8px)", x: -60 };
  }
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const hidden = getHiddenStyle(direction);

  return (
    <motion.div
      initial={hidden}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once, amount: 0.2, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
