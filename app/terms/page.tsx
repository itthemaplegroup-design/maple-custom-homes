import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Maple Custom Homes Toronto",
  description:
    "Terms of Service for Maple Custom Homes. General contractor terms and conditions for renovation projects in Toronto & the GTA.",
  alternates: { canonical: "https://maplecustomhomes.ca/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-surface-white py-12 md:py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose-sm md:prose prose-neutral">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
          Terms of Service
        </h1>
        <p className="text-xs text-text-muted mt-2">
          Last updated: March 24, 2026
        </p>

        <p className="text-sm md:text-base text-text-secondary mt-6 leading-relaxed">
          Welcome to the Maple Custom Homes website. By accessing or using this
          website, you agree to be bound by these Terms of Service. If you do
          not agree with any part of these terms, please do not use our website.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Use of Website
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          This website is provided for informational purposes only. The content
          on this website is intended to give you general information about Maple
          Custom Homes and our services. It is not intended to constitute
          professional advice or a contractual offer. You may use this website
          for lawful purposes only and in accordance with these Terms.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Estimates and Quotes
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          Any estimates, quotes, or pricing information provided through this
          website or during consultations are for informational purposes only and
          do not constitute a binding contract. Final pricing, scope of work, and
          timelines will be outlined in a formal written agreement between Maple
          Custom Homes and the client before any work begins.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Intellectual Property
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          All content on this website, including text, images, logos, graphics,
          and design, is the property of Maple Custom Homes and is protected by
          Canadian copyright and intellectual property laws. You may not
          reproduce, distribute, or use any content from this website without our
          prior written consent.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Limitation of Liability
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          Maple Custom Homes makes every effort to ensure the information on this
          website is accurate and up to date. However, we make no warranties or
          representations, express or implied, about the completeness, accuracy,
          or reliability of the information provided. To the fullest extent
          permitted by law, Maple Custom Homes shall not be liable for any
          damages arising from your use of this website.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Third-Party Links
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          Our website may contain links to third-party websites. These links are
          provided for your convenience only. We have no control over the content
          of these external sites and accept no responsibility for them.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Governing Law
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          These Terms of Service are governed by and construed in accordance with
          the laws of the Province of Ontario and the federal laws of Canada
          applicable therein. Any disputes arising from the use of this website
          shall be subject to the exclusive jurisdiction of the courts of
          Ontario, Canada.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Changes to These Terms
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          We reserve the right to update or modify these Terms of Service at any
          time without prior notice. Your continued use of the website after any
          changes constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Contact Us
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          If you have any questions about these Terms of Service, please contact
          us:
        </p>
        <ul className="list-none text-sm md:text-base text-text-secondary mt-3 space-y-1">
          <li>
            Phone:{" "}
            <a href="tel:6479604017" className="text-accent underline hover:no-underline">
              (647) 960-4017
            </a>
          </li>
          <li>
            Email:{" "}
            <a
              href="mailto:info@maplecustomhomes.ca"
              className="text-accent underline hover:no-underline"
            >
              info@maplecustomhomes.ca
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
