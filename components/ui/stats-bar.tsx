import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <section className="bg-surface-dark-alt py-16 px-6 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="text-center relative">
            <div className="font-serif text-4xl md:text-5xl font-semibold text-accent tracking-tight">{stat.number}</div>
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
