import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Maple Custom Homes Toronto",
  description:
    "Privacy Policy for Maple Custom Homes. Learn how we collect, use, and protect your personal information. General contractor serving Toronto & GTA.",
  alternates: { canonical: "https://maplecustomhomes.ca/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-surface-white py-12 md:py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose-sm md:prose prose-neutral">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
          Privacy Policy
        </h1>
        <p className="text-xs text-text-muted mt-2">
          Last updated: March 24, 2026
        </p>

        <p className="text-sm md:text-base text-text-secondary mt-6 leading-relaxed">
          Maple Custom Homes (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          is committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, and safeguard your personal information when you
          visit our website or contact us about our services.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Information We Collect
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          We may collect the following personal information when you contact us
          through our website, by phone, or by email:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-text-secondary mt-3 space-y-1">
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Project details you share with us</li>
          <li>Property address (if provided for an estimate)</li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          How We Use Your Information
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          We use the information you provide solely for the following purposes:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-text-secondary mt-3 space-y-1">
          <li>To respond to your inquiries and requests</li>
          <li>To provide project estimates and consultations</li>
          <li>To communicate with you about ongoing projects</li>
          <li>To improve our website and services</li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Information Sharing
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information only when required by law or
          with trusted service providers who assist us in operating our website
          and conducting our business, provided they agree to keep your
          information confidential.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Cookies
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          Our website may use cookies and similar technologies to collect
          anonymous usage data for analytics purposes. This helps us understand
          how visitors interact with our website so we can improve the
          experience. You can disable cookies through your browser settings at
          any time.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Data Security
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          We implement reasonable security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Your Rights
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          You have the right to request access to, correction of, or deletion of
          your personal information. To exercise these rights, please contact us
          using the information below.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-text-primary mt-10">
          Contact Us
        </h2>
        <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">
          If you have any questions about this Privacy Policy or how we handle
          your personal information, please contact us:
        </p>
        <ul className="list-none text-sm md:text-base text-text-secondary mt-3 space-y-1">
          <li>
            Phone:{" "}
            <a href="tel:6479604017" className="text-accent hover:underline">
              (647) 960-4017
            </a>
          </li>
          <li>
            Email:{" "}
            <a
              href="mailto:info@maplecustomhomes.ca"
              className="text-accent hover:underline"
            >
              info@maplecustomhomes.ca
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
