import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";

const GalleryGrid = dynamic(
  () => import("@/components/ui/gallery-grid").then((m) => m.GalleryGrid),
);

export const metadata: Metadata = {
  title: "Renovation Gallery | Before & After Projects Toronto & GTA",
  description: "Browse completed projects by Maple Custom Homes — kitchen renovations, bathroom remodels, custom fireplaces, basement finishing, and new construction across the GTA.",
  keywords: [
    "renovation before and after Toronto",
    "kitchen renovation gallery GTA",
    "bathroom remodel photos",
    "basement finishing portfolio",
    "contractor project gallery Ontario",
    "home renovation pictures Toronto",
  ],
  alternates: { canonical: "https://maplecustomhomes.ca/gallery" },
};

const PROJECTS = [
  {
    src: "/images/after1.avif",
    alt: "Modern blue cabinet kitchen renovation in Brampton",
    category: "Kitchen",
    title: "Blue Cabinet Kitchen",
    location: "Brampton, ON",
  },
  {
    src: "/images/after2.avif",
    alt: "Grey kitchen with marble island renovation in Oakville",
    category: "Kitchen",
    title: "Marble Island Kitchen",
    location: "Oakville, ON",
  },
  {
    src: "/images/fireplace-tall.avif",
    alt: "Custom tall fireplace with diamond tile surround",
    category: "Fireplace",
    title: "Diamond Tile Fireplace",
    location: "Vaughan, ON",
  },
  {
    src: "/images/fireplace-tv.avif",
    alt: "Fireplace with wall paneling and mounted TV",
    category: "Fireplace",
    title: "Paneled Media Wall",
    location: "Mississauga, ON",
  },
  {
    src: "/images/fireplace-detail.avif",
    alt: "Fireplace detail with wainscoting and natural light",
    category: "Fireplace",
    title: "Wainscoting Detail",
    location: "Mississauga, ON",
  },
  {
    src: "/images/fireplace-finished.avif",
    alt: "Full height fireplace with diamond pattern tile",
    category: "Fireplace",
    title: "Full-Height Fireplace",
    location: "Vaughan, ON",
  },
  {
    src: "/images/bathroom-shower.avif",
    alt: "Glass shower enclosure with patterned floor tile",
    category: "Bathroom",
    title: "Glass Shower Enclosure",
    location: "Toronto, ON",
  },
  {
    src: "/images/wine-bar.avif",
    alt: "Custom wine bar with herringbone backsplash",
    category: "Basement",
    title: "Wine Bar & Butler's Pantry",
    location: "Richmond Hill, ON",
  },
  {
    src: "/images/living-room.avif",
    alt: "Open concept living room with fireplace overhead view",
    category: "Living Room",
    title: "Open Concept Living",
    location: "Vaughan, ON",
  },
  {
    src: "/images/vaulted-ceiling.avif",
    alt: "Vaulted ceiling with crystal chandelier and iron railing",
    category: "New Construction",
    title: "Vaulted Entry with Chandelier",
    location: "Barrie, ON",
  },
  {
    src: "/images/house-construction.avif",
    alt: "New house construction framing stage",
    category: "New Construction",
    title: "Custom Home — Framing",
    location: "Oshawa, ON",
  },
  {
    src: "/images/framing.avif",
    alt: "Multi-unit new construction framing",
    category: "New Construction",
    title: "Multi-Unit Build",
    location: "Barrie, ON",
  },
  {
    src: "/images/heated-flooring.avif",
    alt: "Radiant heated floor installation in new construction",
    category: "New Construction",
    title: "Heated Floor Installation",
    location: "GTA, ON",
  },
  {
    src: "/images/kitchen-white-marble.avif",
    alt: "White kitchen with quartz countertops and marble backsplash",
    category: "Kitchen",
    title: "White Marble Kitchen",
    location: "GTA, ON",
  },
  {
    src: "/images/bathroom-tub.avif",
    alt: "Freestanding tub with patterned tile floor and glass shower",
    category: "Bathroom",
    title: "Freestanding Tub & Tile",
    location: "GTA, ON",
  },
];

const CATEGORIES = ["All", "Kitchen", "Bathroom", "Basement", "Fireplace", "Living Room", "New Construction"];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-warm py-12 md:py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-6xl mx-auto [&>div]:mb-0 relative">
          <SectionHeader
            label="OUR WORK"
            heading="Project Gallery"
            subtitle="Browse our completed projects across the GTA — from kitchen renovations to custom builds."
            as="h1"
          />
        </div>
      </section>

      {/* Gallery */}
      <div className="bg-surface-white py-12 md:py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid projects={PROJECTS} categories={CATEGORIES} />
        </div>
      </div>

      {/* CTA */}
      <CTABanner
        headline="Like What You See?"
        subtitle="Let's talk about bringing your vision to life."
        buttons={[{ label: "Get a Free Estimate", href: "/contact", variant: "primary" }]}
      />
    </>
  );
}
