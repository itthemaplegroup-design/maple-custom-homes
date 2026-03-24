import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-surface-dark py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4">
        <Image
          src="/logo.svg"
          alt={SITE.name}
          width={120}
          height={40}
          className="h-10 sm:h-12 w-auto"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-x-4 text-xs sm:text-sm text-text-on-dark-muted text-center">
          <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
          <a href={SITE.phoneTel} className="hover:text-gold transition-colors">
            {SITE.phone}
          </a>
          <a href={SITE.emailHref} className="hover:text-gold transition-colors break-all">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
