import Link from "next/link";

interface CTABannerProps {
  headline: string;
  subtitle: string;
  buttons: { label: string; href: string; variant: "primary" | "outline" }[];
}

export function CTABanner({ headline, subtitle, buttons }: CTABannerProps) {
  return (
    <section className="relative py-16 md:py-24 text-center px-6 overflow-hidden bg-surface-dark-alt">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-on-dark tracking-tight">{headline}</h2>
        <p className="text-base md:text-lg text-text-on-dark-muted mt-4 max-w-lg mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          {buttons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className={
                btn.variant === "primary"
                  ? "bg-accent text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/20"
                  : "border border-white/20 text-text-on-dark font-semibold py-3.5 px-8 rounded-lg hover:bg-white/5 transition-all"
              }
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
