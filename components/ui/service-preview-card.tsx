import type { LucideIcon } from "lucide-react";
import { SERVICE_PREVIEWS } from "@/lib/constants";

interface ServicePreviewCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ServicePreviewCard({ icon: Icon, title, description }: ServicePreviewCardProps) {
  return (
    <div className="group relative bg-surface-white border border-border-light rounded-2xl p-8 overflow-hidden cursor-default transition-transform duration-300 hover:-translate-y-1.5">
      {/* Animated bottom border accent */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />

      <div className="w-14 h-14 bg-accent-light rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 mx-auto md:mx-0">
        <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-text-primary mt-5 text-center md:text-left">{title}</h3>
      <p className="text-sm text-text-secondary mt-3 leading-relaxed text-center md:text-left">{description}</p>
    </div>
  );
}

export function ServicePreviewGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SERVICE_PREVIEWS.map((s) => (
        <ServicePreviewCard key={s.title} {...s} />
      ))}
    </div>
  );
}
