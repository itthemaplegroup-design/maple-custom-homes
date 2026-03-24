import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { StatsBar } from "@/components/ui/stats-bar";
import { ServicePreviewCard } from "@/components/ui/service-preview-card";
import { BeforeAfterSection } from "@/components/ui/before-after-section";
import { SERVICE_PREVIEWS, TRUST_INDICATORS, WHY_CHOOSE_US } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-light py-12 md:py-20 lg:py-28 px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative accents */}
        <div className="absolute top-6 right-12 w-3 h-3 bg-gold rounded-full opacity-50 hidden sm:block" />
        <div className="absolute top-14 right-20 w-2 h-2 bg-gold rotate-45 opacity-35 hidden sm:block" />
        <div className="absolute top-[72px] right-9 w-1 h-5 bg-gold opacity-25 hidden sm:block" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight">
              General Contracting{" "}
              <span className="text-gold">Done Right</span>
            </h1>
            <p className="text-sm md:text-base text-text-secondary mt-4 max-w-md leading-relaxed">
              Licensed general contractor serving Toronto, Mississauga, Vaughan, and the GTA. Home renovations, kitchen remodels, basement finishing, and commercial build-outs — one team, one point of contact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/contact" className="bg-gold text-black font-semibold py-3 px-8 rounded-md hover:bg-gold-dark transition-colors text-center">
                Get a Free Estimate
              </Link>
              <Link href="/services" className="border-2 border-text-primary text-text-primary font-semibold py-3 px-8 rounded-md hover:bg-text-primary hover:text-white transition-colors text-center">
                View Our Services
              </Link>
            </div>
          </div>

          {/* Right — Featured project card */}
          <div className="relative">
            <div className="bg-surface-dark rounded-xl p-4 md:p-5 shadow-2xl rotate-0 lg:rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface-dark-alt">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Kitchen renovation by Maple Custom Homes general contractor in Oakville Ontario"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex justify-between mt-3 text-sm">
                <div>
                  <div className="text-gold">Full Kitchen Renovation</div>
                  <div className="text-text-on-dark-muted text-xs">Oakville, ON</div>
                </div>
                <div className="text-right">
                  <div className="text-gold">4 Weeks</div>
                  <div className="text-text-on-dark-muted text-xs">Completed 2025</div>
                </div>
              </div>
            </div>
            {/* Floating accents */}
            <div className="absolute -top-2 -left-2 w-5 h-5 bg-gold rounded-md rotate-45 opacity-60 hidden lg:block" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gold rounded-full opacity-50 hidden lg:block" />
          </div>
        </div>

        {/* Trust indicators */}
        <div className="max-w-6xl mx-auto border-t border-border-light mt-8 md:mt-16 pt-6 md:pt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {TRUST_INDICATORS.map((t) => (
            <span key={t} className="text-xs md:text-sm text-text-muted">{t}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Services Preview */}
      <section className="bg-surface-light py-12 md:py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="WHAT WE DO"
            heading="Our Services"
            subtitle="Residential renovations and commercial construction across the Greater Toronto Area."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_PREVIEWS.map((s) => (
              <ServicePreviewCard key={s.title} {...s} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors">
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Image Comparison */}
      <BeforeAfterSection />

      {/* Why Choose Us */}
      <section className="bg-surface-white py-12 md:py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="WHY MAPLE"
            heading="Why Choose Us"
            subtitle="The difference is in the details."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3.5 items-start">
                  <Icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-text-primary">{item.title}</h3>
                    <p className="text-xs md:text-sm text-text-secondary mt-1">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Start Your Project?"
        subtitle="Book a free consultation — no obligation, just expert advice."
        buttons={[{ label: "Book Your Free Consultation", href: "/contact", variant: "primary" }]}
      />
    </>
  );
}
