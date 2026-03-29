import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  heading: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeader({ label, heading, subtitle, align = "center", dark = false, as: Tag = "h2" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", align === "center" && "text-center")}>
      <p className="text-xs font-semibold text-accent uppercase tracking-[3px]">{label}</p>
      <Tag className={cn(
        "font-serif text-3xl md:text-4xl font-semibold mt-3 tracking-tight",
        dark ? "text-text-on-dark" : "text-text-primary"
      )}>
        {heading}
      </Tag>
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg mt-4 leading-relaxed",
          dark ? "text-text-on-dark-muted" : "text-text-secondary",
          align === "center" && "max-w-xl mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
