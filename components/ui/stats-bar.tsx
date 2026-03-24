import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <section className="bg-surface-dark-alt py-12 border-t-2 border-gold px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl md:text-4xl font-bold text-gold">{stat.number}</div>
            <div className="text-xs text-text-on-dark-muted tracking-[2px] mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
