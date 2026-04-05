import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { ServiceBlock } from "@/components/ui/service-block";
import { SERVICES } from "@/lib/constants";

const ServicesBeforeAfter = dynamic(
  () => import("@/components/ui/services-before-after").then((m) => m.ServicesBeforeAfter),
);

export const metadata: Metadata = {
  title: "Renovation Services Toronto & GTA",
  description: "Expert renovation contractor in Toronto & the GTA. Kitchen remodels, bathroom renovations, basement finishing, commercial build-outs, painting & custom builds. Free estimates.",
  keywords: [
    "home renovation services Toronto",
    "kitchen renovation contractor GTA",
    "bathroom remodeling Toronto",
    "basement finishing contractor",
    "commercial build-out Toronto",
    "painting contractor GTA",
    "custom home builder Ontario",
    "residential renovation services",
    "general contractor services Toronto",
  ],
  alternates: { canonical: "https://maplecustomhomes.ca/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-warm py-12 md:py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-6xl mx-auto [&>div]:mb-0 relative">
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
          bgClass={idx % 2 === 0 ? "bg-surface-white" : "bg-surface-warm"}
        />
      ))}

      {/* Before & After */}
      <section className="bg-surface-dark-alt py-16 md:py-24 px-6 lg:px-8">
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
