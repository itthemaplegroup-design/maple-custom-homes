import {
  Home, Hammer, Building2, UtensilsCrossed, ClipboardList, Trees,
  Shield, Clock, Gem, FileText, CheckCircle, Phone, Mail,
  MessageSquare, PenTool, HardHat,
} from "lucide-react";

export const SITE = {
  name: "Maple Custom Homes",
  tagline: "Your Dream. Our Expertise. Built to Last.",
  phone: "(647) 960-4017",
  phoneTel: "tel:6479604017",
  email: "info@maplecustomhomes.com",
  emailHref: "mailto:info@maplecustomhomes.com",
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
          { label: "Custom Home Building", description: "Design-build from concept to keys", icon: Home, href: "/services#custom-homes" },
          { label: "Renovations & Additions", description: "Transform your existing space", icon: Hammer, href: "/services#renovations" },
          { label: "Kitchen & Bath", description: "Premium finishes, lasting function", icon: UtensilsCrossed, href: "/services#kitchen-bath" },
        ],
      },
      {
        title: "Commercial & More",
        items: [
          { label: "Commercial Construction", description: "On time, on budget, minimal disruption", icon: Building2, href: "/services#commercial" },
          { label: "Project Management", description: "Expert oversight for your investment", icon: ClipboardList, href: "/services#project-management" },
          { label: "Landscaping & Outdoor", description: "Extend your living space outside", icon: Trees, href: "/services#landscaping" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { number: "15+", label: "YEARS EXPERIENCE" },
  { number: "200+", label: "PROJECTS COMPLETED" },
  { number: "98%", label: "CLIENT SATISFACTION" },
  { number: "85%", label: "REFERRAL RATE" },
];

export const TRUST_INDICATORS = [
  "HCRA Licensed",
  "Fully Insured",
  "15+ Years Experience",
  "200+ Projects Completed",
];

export const SERVICE_PREVIEWS = [
  { icon: Home, title: "Custom Homes", description: "Your vision, built from the ground up with precision and care" },
  { icon: Hammer, title: "Renovations", description: "Seamless additions and remodels that honour your home\u2019s character" },
  { icon: Building2, title: "Commercial", description: "Professional builds delivered on schedule with minimal disruption" },
];

export const SERVICES = [
  {
    id: "custom-homes",
    number: "01",
    title: "Custom Home Building",
    description: "Your vision, built from the ground up. Our design-build approach integrates architecture, engineering, and construction under one roof \u2014 on time, on budget, and beyond expectations.",
    features: ["Full Design-Build", "Permit Management", "Tarion Warranty", "Weekly Updates"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "renovations",
    number: "02",
    title: "Home Renovations & Additions",
    description: "Transform your home into the space you\u2019ve always wanted. From second-storey additions to full gut renovations, we protect what you love while elevating everything else.",
    features: ["Structural Assessments", "Architectural Integration", "Phased Construction", "Built-In Contingency"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "kitchen-bath",
    number: "03",
    title: "Kitchen & Bathroom Remodeling",
    description: "Beautiful design meets lasting functionality. Custom cabinetry, premium countertops, and spa-inspired finishes \u2014 spaces that elevate your everyday living.",
    features: ["Custom Cabinetry", "Premium Countertops", "Electrical & Plumbing", "Layout Optimization"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: "commercial",
    number: "04",
    title: "Commercial Construction",
    description: "The same attention to detail our residential clients expect, applied to your business. Tenant improvements, retail build-outs, and office renovations \u2014 on schedule with minimal disruption.",
    features: ["Tenant Fit-Outs", "After-Hours Construction", "Code Compliance", "Cost Tracking"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "project-management",
    number: "05",
    title: "Project Management & Consulting",
    description: "Expert guidance through every phase of construction in the GTA. Feasibility studies, budgeting, contractor coordination, and quality oversight \u2014 your investment, protected.",
    features: ["Feasibility Analysis", "Vendor Management", "On-Site Inspections", "Schedule Tracking"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "landscaping",
    number: "06",
    title: "Landscaping & Outdoor Living",
    description: "Your home doesn\u2019t end at the back door. Custom decks, patios, outdoor kitchens, and fire features \u2014 outdoor spaces as thoughtfully crafted as the interiors we build.",
    features: ["Decks & Patios", "Outdoor Kitchens", "Hardscaping & Pavers", "Landscape Design"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export const WHY_CHOOSE_US = [
  { icon: Shield, title: "Licensed & Protected", description: "HCRA licensed, fully insured, Tarion warranty on every new build" },
  { icon: Clock, title: "On-Time Delivery", description: "Dedicated project managers tracking milestones weekly" },
  { icon: Gem, title: "Premium Craftsmanship", description: "Quality materials specified in your contract \u2014 no substitutions" },
  { icon: FileText, title: "Transparent Pricing", description: "Fixed-price contracts with full cost breakdowns before we break ground" },
];

export const PROCESS_STEPS = [
  { number: 1, icon: MessageSquare, title: "Let\u2019s Talk", description: "Free consultation \u2014 your vision, goals, and budget" },
  { number: 2, icon: PenTool, title: "Design", description: "Architectural drawings, renderings, and material selection" },
  { number: 3, icon: ClipboardList, title: "Plan", description: "Permits, budgets, and timelines locked in" },
  { number: 4, icon: HardHat, title: "Build", description: "Quality construction with weekly updates until handover" },
];
