import type { LucideIcon } from "lucide-react";

interface ServicePreviewCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServicePreviewCard({ icon: Icon, title, description }: ServicePreviewCardProps) {
  return (
    <div className="bg-surface-white border border-border-light rounded-xl p-6 shadow-sm text-center">
      <div className="w-12 h-12 bg-gold-light rounded-lg flex items-center justify-center mx-auto">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-text-primary mt-4">{title}</h3>
      <p className="text-xs md:text-sm text-text-secondary mt-2">{description}</p>
    </div>
  );
}
