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
    <div className={cn("mb-12", align === "center" && "text-center")}>
      <p className="text-xs font-medium text-gold uppercase tracking-[3px]">{label}</p>
      <Tag className={cn("text-2xl md:text-3xl font-bold mt-2", dark ? "text-text-on-dark" : "text-text-primary")}>
        {heading}
      </Tag>
      {subtitle && (
        <p className={cn(
          "text-sm md:text-base mt-3",
          dark ? "text-text-on-dark-muted" : "text-text-secondary",
          align === "center" && "max-w-lg mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
