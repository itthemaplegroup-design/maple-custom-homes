import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Maple Custom Homes | General Contractor Toronto & GTA",
    template: "%s | Maple Custom Homes",
  },
  description:
    "Maple Custom Homes — Toronto's trusted general contractor for home renovations, kitchen remodels, basement finishing & commercial build-outs. Fully insured. Free estimates.",
  keywords: [
    "general contractor Toronto",
    "general contractor GTA",
    "home renovation contractor Toronto",
    "kitchen renovation Toronto",
    "bathroom renovation Toronto",
    "basement finishing Toronto",
    "commercial contractor Toronto",
    "painting contractor Toronto",
    "custom home builder Toronto",
    "renovation contractor Mississauga",
    "general contractor North York",
    "home renovation Brampton",
    "kitchen remodel Vaughan",
    "renovation contractor GTA",
    "general contractor Barrie",
    "renovation contractor Oshawa",
    "general contractor Niagara",
    "renovation contractor London Ontario",
    "general contractor Kitchener",
    "renovation contractor Hamilton",
  ],
  openGraph: {
    title: "Maple Custom Homes | General Contractor Toronto & GTA",
    description: "Trusted general contractor serving Toronto and the GTA. Home renovations, kitchen & bath remodels, basement finishing, commercial build-outs. Get a free estimate.",
    url: "https://maplecustomhomes.ca",
    siteName: "Maple Custom Homes",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://maplecustomhomes.ca/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maple Custom Homes — General Contractor Toronto & GTA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Custom Homes | General Contractor Toronto & GTA",
    description: "Trusted general contractor serving Toronto and the GTA. Home renovations, kitchen & bath remodels, basement finishing, commercial build-outs.",
    images: ["https://maplecustomhomes.ca/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://maplecustomhomes.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#C4973B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              name: "Maple Custom Homes",
              url: "https://maplecustomhomes.ca",
              telephone: "+1-647-960-4017",
              email: "info@maplecustomhomes.ca",
              description:
                "Trusted general contractor serving the Greater Toronto Area. Home renovations, kitchen and bathroom remodelling, basement finishing, commercial build-outs, painting, drywall, and custom builds.",
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
                { "@type": "City", name: "Barrie" },
                { "@type": "City", name: "Oshawa" },
                { "@type": "City", name: "Niagara Falls" },
                { "@type": "City", name: "St. Catharines" },
                { "@type": "City", name: "London" },
                { "@type": "City", name: "Kitchener" },
                { "@type": "City", name: "Hamilton" },
                { "@type": "City", name: "Burlington" },
                { "@type": "City", name: "Guelph" },
                { "@type": "City", name: "Cambridge" },
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
              sameAs: [
                "https://www.instagram.com/maplecustomhomesltd/",
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
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Builds" } },
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
