import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://maplecustomhomes.ca" },
};
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { StatsBar } from "@/components/ui/stats-bar";
import { ServicePreviewGrid } from "@/components/ui/service-preview-card";
import { BeforeAfterSection } from "@/components/ui/before-after-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { HeroSection } from "@/components/ui/hero-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Stats */}
      <StatsBar />

      {/* Services Preview */}
      <section className="bg-surface-white py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              label="WHAT WE DO"
              heading="Our Services"
              subtitle="Residential renovations and commercial construction across the Greater Toronto Area."
            />
          </ScrollReveal>
          <ServicePreviewGrid />
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-dark transition-colors group">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Comparison */}
      <ScrollReveal>
        <BeforeAfterSection />
      </ScrollReveal>

      {/* Why Choose Us */}
      <section className="bg-surface-white py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              label="WHY MAPLE"
              heading="Why Choose Us"
              subtitle="The difference is in the details."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="flex gap-4 items-start group">
                    <div className="w-11 h-11 bg-accent-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-mid transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                      <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
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
