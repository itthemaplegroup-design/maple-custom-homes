// app/contact/page.tsx
import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { ProcessStep } from "@/components/ui/process-step";
import { SITE, PROCESS_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Free Renovation Estimate Toronto & GTA",
  description: "Contact Maple Custom Homes for a free renovation consultation in Toronto and the GTA. Call (647) 960-4017. Licensed general contractor, fast response.",
  alternates: { canonical: "https://maplecustomhomes.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header + Contact Cards (single section) */}
      <section className="bg-surface-light pt-8 md:pt-12 pb-10 md:pb-14 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-5 right-12 w-2.5 h-2.5 bg-gold rounded-full opacity-40 hidden sm:block" />
        <div className="absolute bottom-4 left-10 w-2 h-2 bg-gold rotate-45 opacity-30 hidden sm:block" />
        <div className="max-w-6xl mx-auto [&>div]:mb-0">
          <SectionHeader
            label="GET IN TOUCH"
            heading="Contact Us"
            subtitle="Let's talk about your project. No obligation — just expert advice."
            as="h1"
          />
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-surface-white border border-border-light rounded-xl p-6 shadow-sm text-center">
            <div className="w-14 h-14 bg-gold-light rounded-xl flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <p className="text-xs text-gold tracking-[2px] uppercase mt-4">CALL US</p>
            <a href={SITE.phoneTel} className="block text-lg md:text-xl font-semibold text-text-primary mt-2 hover:text-gold transition-colors">
              {SITE.phone}
            </a>
            <p className="text-xs md:text-sm text-text-muted mt-3 leading-relaxed">
              Mon–Fri: 8am–6pm<br />Sat: 9am–2pm<br />Sun: Closed
            </p>
          </div>
          {/* Email */}
          <div className="bg-surface-white border border-border-light rounded-xl p-6 shadow-sm text-center">
            <div className="w-14 h-14 bg-gold-light rounded-xl flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6 text-gold" />
            </div>
            <p className="text-xs text-gold tracking-[2px] uppercase mt-4">EMAIL US</p>
            <a href={SITE.emailHref} className="block text-base sm:text-lg md:text-xl font-semibold text-text-primary mt-2 hover:text-gold transition-colors break-all">
              {SITE.email}
            </a>
            <p className="text-xs md:text-sm text-text-muted mt-3 leading-relaxed">
              We respond within 24 hours.<br />Your information stays confidential.
            </p>
          </div>
          {/* Instagram */}
          <div className="bg-surface-white border border-border-light rounded-xl p-6 shadow-sm text-center">
            <div className="w-14 h-14 bg-gold-light rounded-xl flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <p className="text-xs text-gold tracking-[2px] uppercase mt-4">FOLLOW US</p>
            <a href="https://www.instagram.com/maplecustomhomesltd/" target="_blank" rel="noopener noreferrer" className="block text-sm sm:text-base md:text-lg font-semibold text-text-primary mt-2 hover:text-gold transition-colors break-all">
              @maplecustomhomesltd
            </a>
            <p className="text-xs md:text-sm text-text-muted mt-3 leading-relaxed">
              See our latest projects<br />and transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-surface-white py-10 md:py-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="HOW IT WORKS"
            heading="Our Process"
            subtitle="Four steps from first call to move-in day."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {PROCESS_STEPS.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Let's Build Something Great"
        subtitle="One conversation is all it takes to get started."
        buttons={[
          { label: `Call ${SITE.phone}`, href: SITE.phoneTel, variant: "primary" },
          { label: "Send Us an Email", href: SITE.emailHref, variant: "outline" },
        ]}
      />
    </>
  );
}
