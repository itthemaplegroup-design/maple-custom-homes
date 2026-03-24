import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Licensed General Contractor Toronto",
  description:
    "Maple Custom Homes is a licensed general contractor serving the Greater Toronto Area for over 15 years. Honest work, fair pricing, and quality craftsmanship on every project.",
  alternates: { canonical: "https://maplecustomhomes.com/about" },
};

const APPROACH_ITEMS = [
  {
    title: "Client-First Communication",
    description:
      "You'll never chase us for an update. Weekly progress reports, a dedicated project manager, and same-day response to your questions.",
  },
  {
    title: "Skilled Trades, Premium Materials",
    description:
      "We work with trusted tradespeople and source quality materials. No corners cut, no unauthorized substitutions.",
  },
  {
    title: "Transparent From Start to Finish",
    description:
      "Detailed quotes, clear timelines, and no hidden fees. You'll know exactly what to expect before we start.",
  },
];

const SERVICE_AREAS = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Oakville",
  "Richmond Hill",
  "North York",
  "Etobicoke",
  "Scarborough",
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-light py-8 md:py-12 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-5 right-12 w-2.5 h-2.5 bg-gold rounded-full opacity-40 hidden sm:block" />
        <div className="absolute bottom-4 left-10 w-2 h-2 bg-gold rotate-45 opacity-30 hidden sm:block" />
        <div className="max-w-6xl mx-auto [&>div]:mb-0">
          <SectionHeader
            label="ABOUT US"
            heading="Built on Integrity, Driven by Quality"
            subtitle="Over 15 years of honest work and lasting results across the Greater Toronto Area."
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-surface-white py-12 md:py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="OUR STORY"
            heading="How We Got Here"
          />
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            Founded over 15 years ago, Maple Custom Homes started with a simple
            belief: every homeowner deserves honest work, fair pricing, and a
            contractor they can trust. What began as a small renovation crew in
            the GTA has grown into a full-service general contracting company —
            but our values haven&apos;t changed. We still answer every call, show
            up on time, and stand behind every project we complete.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-surface-light py-12 md:py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="OUR APPROACH"
            heading="What You Can Expect"
            subtitle="We believe great results come from great communication, skilled trades, and complete transparency."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROACH_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-surface-white border border-border-light rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-base md:text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="bg-surface-white py-12 md:py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="SERVICE AREA"
            heading="Areas We Serve"
            subtitle="Proudly serving homeowners and businesses across the Greater Toronto Area."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {SERVICE_AREAS.map((city) => (
              <div key={city} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                <span className="text-sm md:text-base text-text-primary">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Let's Talk About Your Project"
        subtitle="Every great project starts with a conversation."
        buttons={[
          { label: `Call ${SITE.phone}`, href: SITE.phoneTel, variant: "primary" },
          { label: "Send Us an Email", href: SITE.emailHref, variant: "outline" },
        ]}
      />
    </>
  );
}
