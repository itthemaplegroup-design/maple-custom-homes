import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { ServiceBlock } from "@/components/ui/service-block";
import { SERVICES } from "@/lib/constants";
import { ServicesBeforeAfter } from "@/components/ui/services-before-after";

export const metadata: Metadata = {
  title: "Renovation Services Toronto & GTA",
  description: "Expert renovation contractor in Toronto & the GTA. Kitchen remodels, bathroom renovations, basement finishing, commercial build-outs, painting & custom builds. Free estimates.",
  alternates: { canonical: "https://maplecustomhomes.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-light py-8 md:py-12 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-4 left-10 w-2 h-2 bg-gold rounded-full opacity-40 hidden sm:block" />
        <div className="absolute bottom-5 right-16 w-3 h-3 bg-gold rotate-45 opacity-30 hidden sm:block" />
        <div className="max-w-6xl mx-auto [&>div]:mb-0">
          <SectionHeader
            label="WHAT WE OFFER"
            heading="Our Services"
            subtitle="Residential renovations and commercial construction across the Greater Toronto Area."
            as="h1"
          />
        </div>
      </section>

      {/* Service Blocks */}
      {SERVICES.map((service, idx) => (
        <ServiceBlock
          key={service.id}
          {...service}
          reversed={idx % 2 === 1}
          bgClass={idx % 2 === 0 ? "bg-surface-white" : "bg-surface-light"}
        />
      ))}

      {/* Before & After */}
      <section className="bg-surface-dark-alt py-12 md:py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="TRANSFORMATIONS"
            heading="Before & After"
            subtitle="See how we transform spaces — drag to compare"
            dark
          />
          <ServicesBeforeAfter />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to Get Started?"
        subtitle="Tell us about your project — we'll handle the rest."
        buttons={[{ label: "Book Your Free Consultation", href: "/contact", variant: "primary" }]}
      />
    </>
  );
}
