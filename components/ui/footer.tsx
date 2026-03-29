import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const SERVICE_AREAS = [
  "Toronto", "Mississauga", "Brampton", "Vaughan", "Markham",
  "Oakville", "Richmond Hill", "North York", "Etobicoke", "Scarborough",
  "Barrie", "Oshawa", "Niagara", "London", "Kitchener",
  "Hamilton", "Burlington", "Guelph", "Cambridge", "St. Catharines",
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-14 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo & tagline */}
          <div>
            <Image src="/logo.svg" alt="Maple Custom Homes general contractor Toronto" width={200} height={60} className="h-14 w-auto mb-4 bg-white/90 rounded-lg px-3 py-1.5" />
            <p className="text-sm text-text-on-dark-muted leading-relaxed max-w-xs">
              Licensed general contractor serving the Greater Toronto Area. Renovations, remodels, and commercial construction.
            </p>
            <a href="https://www.instagram.com/maplecustomhomesltd/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-on-dark-muted hover:text-accent transition-colors mt-4 group">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <span>Follow us on Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-on-dark mb-4 tracking-wide">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-text-on-dark-muted hover:text-accent transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold text-text-on-dark mb-4 tracking-wide">Service Areas</h4>
            <div className="flex flex-wrap gap-x-1 gap-y-1">
              {SERVICE_AREAS.map((area, i) => (
                <span key={area} className="text-sm text-text-on-dark-muted">
                  {area}{i < SERVICE_AREAS.length - 1 && <span className="text-white/20 mx-1">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-on-dark-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-text-on-dark-muted hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-text-on-dark-muted hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
