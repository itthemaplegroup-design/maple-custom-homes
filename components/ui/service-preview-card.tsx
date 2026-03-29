import type { LucideIcon } from "lucide-react";

interface ServicePreviewCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServicePreviewCard({ icon: Icon, title, description }: ServicePreviewCardProps) {
  return (
    <div className="group bg-surface-white border border-border-light rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 hover:-translate-y-1">
      <div className="w-14 h-14 bg-accent-light rounded-xl flex items-center justify-center group-hover:bg-accent-mid transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-text-primary mt-5">{title}</h3>
      <p className="text-sm text-text-secondary mt-3 leading-relaxed">{description}</p>
    </div>
  );
}
