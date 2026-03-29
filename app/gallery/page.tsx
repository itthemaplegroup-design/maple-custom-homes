import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/ui/cta-banner";
import { GalleryGrid } from "@/components/ui/gallery-grid";

export const metadata: Metadata = {
  title: "Project Gallery | Our Work",
  description: "Browse completed projects by Maple Custom Homes — kitchen renovations, bathroom remodels, custom fireplaces, basement finishing, and new construction across the GTA.",
  alternates: { canonical: "https://maplecustomhomes.ca/gallery" },
};

const PROJECTS = [
  {
    src: "/images/after1.jpg",
    alt: "Modern blue cabinet kitchen renovation in Brampton",
    category: "Kitchen",
    title: "Blue Cabinet Kitchen",
    location: "Brampton, ON",
  },
  {
    src: "/images/after2.jpg",
    alt: "Grey kitchen with marble island renovation in Oakville",
    category: "Kitchen",
    title: "Marble Island Kitchen",
    location: "Oakville, ON",
  },
  {
    src: "/images/fireplace-tall.jpg",
    alt: "Custom tall fireplace with diamond tile surround",
    category: "Others",
    title: "Diamond Tile Fireplace",
    location: "Vaughan, ON",
  },
  {
    src: "/images/fireplace-tv.jpg",
    alt: "Fireplace with wall paneling and mounted TV",
    category: "Others",
    title: "Paneled Media Wall",
    location: "Mississauga, ON",
  },
  {
    src: "/images/fireplace-detail.jpg",
    alt: "Fireplace detail with wainscoting and natural light",
    category: "Others",
    title: "Wainscoting Detail",
    location: "Mississauga, ON",
  },
  {
    src: "/images/fireplace-finished.jpg",
    alt: "Full height fireplace with diamond pattern tile",
    category: "Others",
    title: "Full-Height Fireplace",
    location: "Vaughan, ON",
  },
  {
    src: "/images/bathroom-shower.jpg",
    alt: "Glass shower enclosure with patterned floor tile",
    category: "Bathroom",
    title: "Glass Shower Enclosure",
    location: "Toronto, ON",
  },
  {
    src: "/images/wine-bar.jpg",
    alt: "Custom wine bar with herringbone backsplash",
    category: "Basement",
    title: "Wine Bar & Butler's Pantry",
    location: "Richmond Hill, ON",
  },
  {
    src: "/images/living-room.jpg",
    alt: "Open concept living room with fireplace overhead view",
    category: "Others",
    title: "Open Concept Living",
    location: "Vaughan, ON",
  },
  {
    src: "/images/vaulted-ceiling.jpg",
    alt: "Vaulted ceiling with crystal chandelier and iron railing",
    category: "Others",
    title: "Vaulted Entry with Chandelier",
    location: "Barrie, ON",
  },
  {
    src: "/images/house-construction.jpg",
    alt: "New house construction framing stage",
    category: "Others",
    title: "Custom Home — Framing",
    location: "Oshawa, ON",
  },
  {
    src: "/images/framing.jpg",
    alt: "Multi-unit new construction framing",
    category: "Others",
    title: "Multi-Unit Build",
    location: "Barrie, ON",
  },
];

const CATEGORIES = ["All", "Kitchen", "Bathroom", "Basement"];

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
      <section className="bg-surface-white py-12 md:py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid projects={PROJECTS} categories={CATEGORIES} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Like What You See?"
        subtitle="Let's talk about bringing your vision to life."
        buttons={[{ label: "Get a Free Estimate", href: "/contact", variant: "primary" }]}
      />
    </>
  );
}
