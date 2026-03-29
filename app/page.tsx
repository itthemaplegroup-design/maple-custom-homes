import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { StatsBar } from "@/components/ui/stats-bar";
import { ServicePreviewCard } from "@/components/ui/service-preview-card";
import { BeforeAfterSection } from "@/components/ui/before-after-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { SERVICE_PREVIEWS, TRUST_INDICATORS, WHY_CHOOSE_US } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-warm py-16 md:py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center relative">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-[3px] mb-6">
              <span className="w-8 h-px bg-accent" />
              Licensed General Contractor
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary leading-[1.1] tracking-tight">
              General Contracting{" "}
              <span className="text-accent">Done Right</span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary mt-6 max-w-lg leading-relaxed">
              Licensed general contractor serving the GTA, Barrie, Oshawa, Niagara, London, Kitchener, and surrounding areas. Home renovations, kitchen remodels, basement finishing, and commercial build-outs — one team, one point of contact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/contact" className="bg-accent text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/20 text-center">
                Get a Free Estimate
              </Link>
              <Link href="/services" className="border border-text-primary/20 text-text-primary font-semibold py-3.5 px-8 rounded-lg hover:bg-text-primary hover:text-white transition-all text-center">
                View Our Services
              </Link>
            </div>
          </div>

          {/* Right — Featured project card */}
          <div className="relative">
            <div className="bg-surface-dark-alt rounded-2xl p-5 shadow-2xl lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-dark">
                <Image
                  src="/images/vaulted-ceiling.jpg"
                  alt="Custom home build with vaulted ceiling and crystal chandelier by Maple Custom Homes in Barrie Ontario"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex justify-between mt-4 text-sm px-1">
                <div>
                  <div className="text-accent font-medium">Custom Home Build</div>
                  <div className="text-text-on-dark-muted text-xs mt-0.5">Barrie, ON</div>
                </div>
                <div className="text-right">
                  <div className="text-accent font-medium">New Construction</div>
                  <div className="text-text-on-dark-muted text-xs mt-0.5">Completed 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="max-w-6xl mx-auto border-t border-border-light mt-12 md:mt-20 pt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {TRUST_INDICATORS.map((t) => (
            <span key={t} className="text-sm text-text-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Services Preview */}
      <section className="bg-surface-white py-16 md:py-24 px-6 lg:px-8">
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
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-dark transition-colors group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Comparison */}
      <BeforeAfterSection />

      {/* Why Choose Us */}
      <section className="bg-surface-white py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="WHY MAPLE"
            heading="Why Choose Us"
            subtitle="The difference is in the details."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 items-start group">
                  <div className="w-11 h-11 bg-accent-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-mid transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                    <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Start Your Project?"
        subtitle="Book a free consultation — no obligation, just expert advice."
        buttons={[{ label: "Book Your Free Consultation", href: "/contact", variant: "primary" }]}
      />
    </>
  );
}
