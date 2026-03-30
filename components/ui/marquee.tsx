"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

interface MarqueeProps {
  items: string[];
  separator?: string;
  className?: string;
  velocity?: number;
}

export function MarqueeBanner({ items, separator = " / ", velocity = -1.5, className }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * velocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const text = items.join(` ${separator} `);

  return (
    <section className={cn("py-4 bg-surface-dark overflow-hidden", className)}>
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div className="flex whitespace-nowrap" style={{ x }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="block text-sm md:text-base tracking-wide text-text-on-dark-muted/60 mx-4"
            >
              {text} {separator} {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
