import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | Common Renovation Questions Toronto",
  description:
    "Answers to frequently asked questions about home renovations, costs, timelines, permits, and working with a general contractor in the Greater Toronto Area.",
  keywords: [
    "renovation cost Toronto",
    "how long does renovation take",
    "renovation permits Toronto",
    "general contractor FAQ",
    "home renovation questions GTA",
    "kitchen renovation cost Ontario",
    "basement finishing cost Toronto",
  ],
  alternates: { canonical: "https://maplecustomhomes.ca/faq" },
};

const FAQ_ITEMS: { question: string; answer: string; richAnswer?: ReactNode }[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Greater Toronto Area including Toronto, Mississauga, Brampton, Vaughan, Markham, Oakville, Richmond Hill, North York, Etobicoke, Scarborough, Barrie, Oshawa, Niagara, London, Kitchener, Hamilton, and surrounding areas.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Maple Custom Homes carries comprehensive liability insurance and bonding on every project.",
  },
  {
    question: "How much does a home renovation cost in Toronto?",
    answer:
      "Costs vary based on scope. Kitchen renovations typically range from $25,000\u2013$75,000, bathroom renovations $15,000\u2013$35,000, and basement finishing $30,000\u2013$60,000. We provide detailed, no-obligation quotes for every project.",
    richAnswer: <>Costs vary based on scope. Kitchen renovations typically range from $25,000–$75,000, bathroom renovations $15,000–$35,000, and basement finishing $30,000–$60,000. We provide detailed, no-obligation quotes for every project. <Link href="/contact" className="text-accent hover:underline">Get a free estimate</Link>.</>,
  },
  {
    question: "How long does a typical renovation take?",
    answer:
      "Timelines depend on the project. Kitchen renovations: 4\u20138 weeks. Bathroom renovations: 3\u20136 weeks. Basement finishing: 6\u201310 weeks. Full home renovations: 3\u20136 months. We\u2019ll give you a detailed timeline before work begins.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Yes. We manage all permit applications and municipal approvals as part of our service. You won\u2019t need to deal with the city directly.",
  },
  {
    question: "Can I live in my home during a renovation?",
    answer:
      "In most cases, yes. We plan our work in phases to minimize disruption. For major renovations, we\u2019ll discuss the best approach during your consultation.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically work with a deposit, progress payments tied to milestones, and a final payment upon completion and your satisfaction. Everything is outlined clearly in the contract.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Contact us at (647) 960-4017 or info@maplecustomhomes.ca to schedule a free, no-obligation consultation and estimate.",
    richAnswer: <>Yes. <Link href="/contact" className="text-accent hover:underline">Contact us</Link> at <a href="tel:6479604017" className="text-accent hover:underline">(647) 960-4017</a> or <a href="mailto:info@maplecustomhomes.ca" className="text-accent hover:underline">info@maplecustomhomes.ca</a> to schedule a free, no-obligation consultation and estimate.</>,
  },
  {
    question: "What sets Maple Custom Homes apart from other contractors?",
    answer:
      "We combine skilled trades, premium materials, and transparent communication. You get a dedicated project manager, weekly updates, detailed quotes with no hidden fees, and a team that stands behind its work.",
    richAnswer: <>We combine skilled trades, premium materials, and transparent communication. You get a dedicated project manager, weekly updates, detailed quotes with no hidden fees, and a team that stands behind its work. <Link href="/about" className="text-accent hover:underline">Learn more about us</Link>.</>,
  },
  {
    question: "Do you do commercial work?",
    answer:
      "Yes. We handle commercial build-outs, tenant improvements, office renovations, and retail fit-outs across the GTA. We work around your business schedule to minimize disruption.",
    richAnswer: <>Yes. We handle commercial build-outs, tenant improvements, office renovations, and retail fit-outs across the GTA. We work around your business schedule to minimize disruption. <Link href="/services#commercial" className="text-accent hover:underline">View our commercial services</Link>.</>,
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Header */}
      <section className="bg-surface-warm py-12 md:py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-6xl mx-auto [&>div]:mb-0 relative">
          <SectionHeader
            label="FAQ"
            heading="Frequently Asked Questions"
            subtitle="Answers to common questions about our services, pricing, and process."
            as="h1"
          />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-surface-white py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group border-b border-border-light [&[open]]:border-accent/30"
            >
              <summary className="flex items-center justify-between cursor-pointer py-6 px-1 text-base font-semibold text-text-primary hover:text-accent transition-colors group-open:text-accent list-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-lg bg-surface-warm group-open:bg-accent-light flex items-center justify-center text-text-muted group-open:text-accent transition-all group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <div className="pb-6 px-1 text-base text-text-secondary leading-relaxed">
                {item.richAnswer ?? item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Still Have Questions?"
        subtitle="We're happy to help. Reach out anytime for a free consultation."
        buttons={[
          { label: `Call ${SITE.phone}`, href: SITE.phoneTel, variant: "primary" },
          { label: "Send Us an Email", href: SITE.emailHref, variant: "outline" },
        ]}
      />
    </>
  );
}
