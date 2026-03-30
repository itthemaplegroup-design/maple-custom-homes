import Link from "next/link";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ShimmerButton({ href, children, className }: ShimmerButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-accent px-8 py-3.5 font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20",
        className
      )}
    >
      {/* Shimmer sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <span className="relative">{children}</span>
    </Link>
  );
}
