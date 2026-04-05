"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import MegaMenu, { type MegaMenuItem } from "./mega-menu";
import { NAV_ITEMS, SITE } from "@/lib/constants";

const megaMenuItems: MegaMenuItem[] = NAV_ITEMS.map((item, idx) => ({
  id: idx + 1,
  label: item.label,
  link: item.href,
  ...(item.subMenus
    ? {
        subMenus: item.subMenus.map((sub) => ({
          title: sub.title,
          items: sub.items.map((i) => ({
            label: i.label,
            description: i.description,
            icon: i.icon,
            href: i.href,
          })),
        })),
      }
    : {}),
}));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border-light shadow-sm"
          : "bg-white border-b border-border-light"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt={SITE.name}
            width={180}
            height={50}
            className="h-8 sm:h-10 lg:h-11 w-auto"
            priority
            fetchPriority="high"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <MegaMenu items={megaMenuItems} />
          <a
            href={SITE.phoneTel}
            className="ml-5 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2.5 text-text-primary hover:bg-surface-warm transition-colors lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="border-t border-border-light bg-white px-5 pb-5 lg:hidden">
          <ul className="space-y-1 pt-3">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-accent-light text-text-primary font-semibold"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-warm"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-40" />
                  </Link>
                  {item.subMenus && (
                    <ul className="ml-4 mt-1 space-y-0.5">
                      {item.subMenus.map((sub) =>
                        sub.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-4 py-2 text-sm text-text-muted hover:text-text-primary hover:bg-surface-warm transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <a
            href={SITE.phoneTel}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dark"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
