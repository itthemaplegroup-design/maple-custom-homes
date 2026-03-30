"use client";

import { useEffect, useRef } from "react";
import { MotionValue, motion, useSpring, useTransform, useInView } from "motion/react";
import { STATS } from "@/lib/constants";

const DIGIT_HEIGHT = 60;

function parseStatNumber(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function SingleDigit({ mv, digit }: { mv: MotionValue<number>; digit: number }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + digit - placeValue) % 10;
    let memo = offset * DIGIT_HEIGHT;
    if (offset > 5) {
      memo -= 10 * DIGIT_HEIGHT;
    }
    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {digit}
    </motion.span>
  );
}

function RollingDigit({ place, value }: { place: number; value: number }) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(0, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div
      className="relative w-[1ch] overflow-hidden tabular-nums"
      style={{ height: DIGIT_HEIGHT }}
    >
      <div className="invisible">0</div>
      {Array.from({ length: 10 }, (_, i) => (
        <SingleDigit key={i} mv={animatedValue} digit={i} />
      ))}
    </div>
  );
}

function RollingNumber({ value, inView }: { value: string; inView: boolean }) {
  const { num, suffix } = parseStatNumber(value);
  const digits = num.toString().split("");
  const places = digits.map((_, i) => Math.pow(10, digits.length - i - 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-center font-serif text-4xl md:text-5xl font-semibold text-accent tracking-tight"
    >
      {digits.map((_, index) => (
        <RollingDigit
          key={`${index}-${places[index]}`}
          value={inView ? num : 0}
          place={places[index]}
        />
      ))}
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </motion.div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-surface-dark-alt py-16 px-6 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />

      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="text-center relative">
            <RollingNumber value={stat.number} inView={inView} />
            <div className="text-xs text-text-on-dark-muted tracking-[2px] mt-3 uppercase">{stat.label}</div>
            {i < STATS.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
