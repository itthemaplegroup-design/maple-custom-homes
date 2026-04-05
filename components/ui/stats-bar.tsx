"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function parseStatNumber(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const { num, suffix } = parseStatNumber(value);
  const [display, setDisplay] = useState(0);
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1200; // ms
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num));
      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [inView, num]);

  return (
    <div
      className="flex items-center justify-center font-serif text-4xl md:text-5xl font-semibold text-accent tracking-tight"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <span className="tabular-nums">{display}</span>
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface-dark-alt py-16 px-6 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />

      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="text-center relative">
            <AnimatedNumber value={stat.number} inView={inView} />
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
