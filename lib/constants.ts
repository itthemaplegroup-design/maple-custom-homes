import {
  Home, Hammer, Building2, UtensilsCrossed, ClipboardList,
  Shield, Clock, Gem, FileText, CheckCircle, Phone, Mail,
  MessageSquare, PenTool, HardHat, Paintbrush,
} from "lucide-react";

export const SITE = {
  name: "Maple Custom Homes",
  tagline: "Quality Construction. Honest Work. Built to Last.",
  phone: "(647) 960-4017",
  phoneTel: "tel:6479604017",
  email: "info@maplecustomhomes.ca",
  emailHref: "mailto:info@maplecustomhomes.ca",
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    subMenus: [
      {
        title: "Residential",
        items: [
          { label: "Home Renovations", description: "Complete interior and exterior transformations", icon: Hammer, href: "/services#renovations" },
          { label: "Kitchen & Bath", description: "Premium finishes, lasting function", icon: UtensilsCrossed, href: "/services#kitchen-bath" },
          { label: "Basement Finishing", description: "Unlock your home\u2019s hidden potential", icon: Home, href: "/services#basement" },
        ],
      },
      {
        title: "Commercial & More",
        items: [
          { label: "Commercial Build-Outs", description: "On time, on budget, minimal disruption", icon: Building2, href: "/services#commercial" },
          { label: "Painting & Drywall", description: "Clean lines, flawless finishes", icon: Paintbrush, href: "/services#painting" },
          { label: "Custom Builds", description: "New construction from the ground up", icon: HardHat, href: "/services#custom-builds" },
        ],
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { number: "15+", label: "YEARS EXPERIENCE" },
  { number: "500+", label: "PROJECTS COMPLETED" },
  { number: "98%", label: "CLIENT SATISFACTION" },
  { number: "85%", label: "REFERRAL RATE" },
];

export const TRUST_INDICATORS = [
  "Fully Insured",
  "Bonded",
  "15+ Years Experience",
  "500+ Projects Completed",
];

export const SERVICE_PREVIEWS = [
  { icon: Hammer, title: "Renovations", description: "Full-scale home renovations that transform your space from top to bottom" },
  { icon: UtensilsCrossed, title: "Kitchen & Bath", description: "Modern kitchens and bathrooms built with premium materials and expert care" },
  { icon: Building2, title: "Commercial", description: "Reliable commercial construction and tenant improvements for your business" },
];

export const SERVICES = [
  {
    id: "renovations",
    number: "01",
    title: "Home Renovations",
    description: "From structural changes to complete interior overhauls, we handle every aspect of your renovation. Open-concept conversions, room additions, and whole-home upgrades \u2014 delivered on time with minimal disruption to your daily life.",
    features: ["Structural Modifications", "Open-Concept Conversions", "Room Additions", "Full Interior Overhauls"],
    image: "/images/vaulted-ceiling.avif",
  },
  {
    id: "kitchen-bath",
    number: "02",
    title: "Kitchen & Bathroom Remodeling",
    description: "The rooms that matter most, built to the highest standard. Custom cabinetry, premium countertops, modern tile work, and complete plumbing and electrical upgrades \u2014 designed for how you actually live.",
    features: ["Custom Cabinetry", "Premium Countertops", "Plumbing & Electrical", "Tile & Finishes"],
    image: "/images/after2.avif",
  },
  {
    id: "basement",
    number: "03",
    title: "Basement Finishing",
    description: "Turn unused square footage into functional living space. Home theatres, guest suites, home offices, and rental units \u2014 fully framed, insulated, drywalled, and finished to code.",
    features: ["Framing & Insulation", "Electrical & Plumbing", "Flooring & Drywall", "Egress Windows"],
    image: "/images/wine-bar.avif",
  },
  {
    id: "commercial",
    number: "04",
    title: "Commercial Build-Outs",
    description: "Professional commercial construction for retail, office, and restaurant spaces. We work around your schedule to minimize downtime and deliver a space that\u2019s ready for business.",
    features: ["Retail Fit-Outs", "Office Renovations", "After-Hours Work", "Code Compliance"],
    image: "/images/house-construction.avif",
  },
  {
    id: "painting",
    number: "05",
    title: "Painting & Drywall",
    description: "Expert interior and exterior painting, drywall installation, patching, and finishing. Clean prep work, premium paints, and attention to detail that shows in every corner.",
    features: ["Interior Painting", "Exterior Painting", "Drywall Install & Repair", "Texture & Finishing"],
    image: "/images/fireplace-tv.avif",
  },
  {
    id: "custom-builds",
    number: "06",
    title: "Custom Builds",
    description: "New construction from the ground up. Custom homes, additions, and ground-up builds \u2014 designed to your specifications and built to the highest standards.",
    features: ["Custom Homes", "Additions", "Framing & Structure", "Full Project Management"],
    image: "/images/framing.avif",
  },
];

export const WHY_CHOOSE_US = [
  { icon: Shield, title: "Insured & Bonded", description: "Comprehensive liability coverage and bonding on every project for your peace of mind" },
  { icon: Clock, title: "On-Time Delivery", description: "Dedicated project managers tracking milestones weekly \u2014 we stick to the schedule" },
  { icon: Gem, title: "Quality Workmanship", description: "Skilled trades, premium materials, and rigorous quality checks at every phase" },
  { icon: FileText, title: "Transparent Pricing", description: "Detailed quotes with no hidden fees \u2014 you know the cost before we start" },
];

export const PROCESS_STEPS = [
  { number: 1, icon: MessageSquare, title: "Let\u2019s Talk", description: "Free consultation \u2014 your vision, goals, and budget" },
  { number: 2, icon: PenTool, title: "Plan", description: "Detailed scope, timeline, and transparent quote" },
  { number: 3, icon: HardHat, title: "Build", description: "Expert construction with weekly updates" },
  { number: 4, icon: CheckCircle, title: "Handover", description: "Final walkthrough, punch list, and your satisfaction guaranteed" },
];
