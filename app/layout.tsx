import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maple Custom Homes | General Contractor Toronto & GTA",
    template: "%s | Maple Custom Homes",
  },
  description:
    "Maple Custom Homes — Toronto's trusted general contractor for home renovations, kitchen remodels, basement finishing & commercial build-outs. Licensed & insured. Free estimates.",
  keywords: [
    "general contractor Toronto",
    "general contractor GTA",
    "home renovation contractor Toronto",
    "kitchen renovation Toronto",
    "bathroom renovation Toronto",
    "basement finishing Toronto",
    "commercial contractor Toronto",
    "painting contractor Toronto",
    "landscaping contractor Toronto",
    "renovation contractor Mississauga",
    "general contractor North York",
    "home renovation Brampton",
    "kitchen remodel Vaughan",
    "licensed renovation contractor GTA",
  ],
  openGraph: {
    title: "Maple Custom Homes | General Contractor Toronto & GTA",
    description: "Licensed general contractor serving Toronto and the GTA. Home renovations, kitchen & bath remodels, basement finishing, commercial build-outs. Get a free estimate.",
    url: "https://maplecustomhomes.com",
    siteName: "Maple Custom Homes",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://maplecustomhomes.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              name: "Maple Custom Homes",
              url: "https://maplecustomhomes.com",
              telephone: "+1-647-960-4017",
              email: "info@maplecustomhomes.com",
              description:
                "Licensed general contractor serving the Greater Toronto Area. Home renovations, kitchen and bathroom remodelling, basement finishing, commercial build-outs, painting, drywall, and landscaping.",
              areaServed: [
                { "@type": "City", name: "Toronto" },
                { "@type": "City", name: "Mississauga" },
                { "@type": "City", name: "Brampton" },
                { "@type": "City", name: "Vaughan" },
                { "@type": "City", name: "Markham" },
                { "@type": "City", name: "Oakville" },
                { "@type": "City", name: "Richmond Hill" },
                { "@type": "City", name: "North York" },
                { "@type": "City", name: "Etobicoke" },
                { "@type": "City", name: "Scarborough" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Construction Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Renovations" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen & Bathroom Remodelling" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basement Finishing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Build-Outs" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting & Drywall" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outdoor & Landscaping" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
