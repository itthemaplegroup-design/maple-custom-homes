import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const SERVICE_AREAS = [
  "Toronto", "Mississauga", "Brampton", "Vaughan", "Markham",
  "Oakville", "Richmond Hill", "North York", "Etobicoke", "Scarborough",
];

export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-surface-dark py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Top row: Logo + Links + Service Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & tagline */}
          <div>
            <Image src="/logo.svg" alt="Maple Custom Homes general contractor Toronto" width={140} height={45} className="h-10 w-auto mb-3" />
            <p className="text-xs text-text-on-dark-muted leading-relaxed max-w-xs">
              Licensed general contractor serving the Greater Toronto Area. Renovations, remodels, and commercial construction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-on-dark mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-1.5">
              <Link href="/" className="text-xs text-text-on-dark-muted hover:text-gold transition-colors">Home</Link>
              <Link href="/services" className="text-xs text-text-on-dark-muted hover:text-gold transition-colors">Services</Link>
              <Link href="/about" className="text-xs text-text-on-dark-muted hover:text-gold transition-colors">About Us</Link>
              <Link href="/faq" className="text-xs text-text-on-dark-muted hover:text-gold transition-colors">FAQ</Link>
              <Link href="/contact" className="text-xs text-text-on-dark-muted hover:text-gold transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold text-text-on-dark mb-3">Service Areas</h4>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {SERVICE_AREAS.map((area) => (
                <span key={area} className="text-xs text-text-on-dark-muted">{area}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-dark pt-6 text-center">
          <p className="text-xs text-text-on-dark-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved. | General Contractor serving Toronto & the GTA
          </p>
          <div className="flex gap-4 justify-center mt-2">
            <Link href="/privacy" className="text-xs text-text-on-dark-muted hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-text-on-dark-muted hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
