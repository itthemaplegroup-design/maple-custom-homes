"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import MegaMenu, { type MegaMenuItem } from "./mega-menu";
import { NAV_ITEMS, SITE } from "@/lib/constants";

/** Transform NAV_ITEMS into MegaMenuItem[] for the MegaMenu component */
const megaMenuItems: MegaMenuItem[] = NAV_ITEMS.map((item, idx) => ({
  id: idx + 1,
  label: item.label,
  ...(item.subMenus
    ? {
        subMenus: item.subMenus.map((sub) => ({
          title: sub.title,
          items: sub.items.map((i) => ({
            label: i.label,
            description: i.description,
            icon: i.icon,
          })),
        })),
      }
    : { link: item.href }),
}));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface-dark border-b border-border-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt={SITE.name}
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          <MegaMenu items={megaMenuItems} />
          <a
            href={SITE.phoneTel}
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-surface-dark transition-colors hover:bg-gold-dark"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-text-on-dark lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="border-t border-border-dark bg-surface-dark px-4 pb-4 lg:hidden">
          <ul className="space-y-1 pt-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-full px-4 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-white/10 text-text-on-dark"
                        : "text-text-on-dark-muted hover:text-text-on-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {/* Show sub-items inline on mobile */}
                  {item.subMenus && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.subMenus.map((sub) =>
                        sub.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-full px-4 py-1.5 text-sm text-text-on-dark-muted hover:text-text-on-dark"
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
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-surface-dark transition-colors hover:bg-gold-dark"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
