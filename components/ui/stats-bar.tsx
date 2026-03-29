"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { STATS } from "@/lib/constants";

function parseStatNumber(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const { num, suffix } = parseStatNumber(value);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      // Ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * num));

      if (current >= steps) {
        setCount(num);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, num]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {count}{suffix}
    </motion.span>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-surface-dark-alt py-16 px-6 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />

      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="text-center relative">
            <div className="font-serif text-4xl md:text-5xl font-semibold text-accent tracking-tight">
              <AnimatedNumber value={stat.number} inView={inView} />
            </div>
            <div className="text-xs text-text-on-dark-muted tracking-[2px] mt-2 uppercase">{stat.label}</div>
            {i < STATS.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
