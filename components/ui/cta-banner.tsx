import Link from "next/link";

interface CTABannerProps {
  headline: string;
  subtitle: string;
  buttons: { label: string; href: string; variant: "primary" | "outline" }[];
}

export function CTABanner({ headline, subtitle, buttons }: CTABannerProps) {
  return (
    <section className="bg-gradient-to-br from-gold to-gold-dark py-12 md:py-20 text-center px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-black">{headline}</h2>
      <p className="text-sm md:text-base text-black/60 mt-3">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        {buttons.map((btn) => (
          <Link
            key={btn.label}
            href={btn.href}
            className={
              btn.variant === "primary"
                ? "bg-black text-gold font-semibold py-3 px-8 rounded-md hover:bg-black/90 transition-colors"
                : "border-2 border-black text-black font-semibold py-3 px-8 rounded-md hover:bg-black hover:text-gold transition-colors"
            }
          >
            {btn.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
