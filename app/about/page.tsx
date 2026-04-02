import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | General Contractor Toronto",
  description:
    "Maple Custom Homes is a trusted general contractor serving the Greater Toronto Area for over 15 years. Honest work, fair pricing, and quality craftsmanship on every project.",
  keywords: [
    "general contractor Toronto",
    "trusted renovation company GTA",
    "experienced contractor Ontario",
    "insured general contractor GTA",
    "home renovation company Mississauga",
    "quality contractor Brampton",
  ],
  alternates: { canonical: "https://maplecustomhomes.ca/about" },
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
  "Barrie",
  "Oshawa",
  "Niagara",
  "London",
  "Kitchener",
  "Hamilton",
  "Burlington",
  "Guelph",
  "Cambridge",
  "St. Catharines",
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-warm py-12 md:py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-6xl mx-auto [&>div]:mb-0 relative">
          <SectionHeader
            label="ABOUT US"
            heading="Built on Integrity, Driven by Quality"
            subtitle="Over 15 years of honest work and lasting results across the Greater Toronto Area."
            as="h1"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-surface-white py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="OUR STORY"
            heading="How We Got Here"
          />
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
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
      <section className="bg-surface-warm py-16 md:py-24 px-6 lg:px-8">
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
                className="bg-surface-white border border-border-light rounded-2xl p-8 group hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300"
              >
                <h3 className="font-serif text-lg md:text-xl font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="bg-surface-white py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="SERVICE AREA"
            heading="Areas We Serve"
            subtitle="Proudly serving homeowners and businesses across the Greater Toronto Area."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {SERVICE_AREAS.map((city) => (
              <div key={city} className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-base text-text-primary">
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
