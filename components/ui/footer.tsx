import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-surface-dark py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4">
        <Image
          src="/logo.svg"
          alt={SITE.name}
          width={90}
          height={30}
          className="h-7 w-auto"
        />

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-text-on-dark-muted">
          <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
          <span className="hidden sm:inline">&middot;</span>
          <a href={SITE.phoneTel} className="hover:text-text-on-dark transition-colors">
            {SITE.phone}
          </a>
          <span className="hidden sm:inline">&middot;</span>
          <a href={SITE.emailHref} className="hover:text-text-on-dark transition-colors">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
