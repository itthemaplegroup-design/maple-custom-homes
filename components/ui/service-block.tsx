import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface ServiceBlockProps {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  reversed?: boolean;
  bgClass?: string;
}

export function ServiceBlock({ id, number, title, description, features, image, reversed = false, bgClass = "bg-surface-white" }: ServiceBlockProps) {
  const textCol = (
    <div className="py-4">
      <span className="inline-flex items-center text-xs font-semibold text-accent bg-accent-light py-1.5 px-4 rounded-lg tracking-[1px]">{number}</span>
      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mt-4 tracking-tight">{title}</h2>
      <p className="text-base text-text-secondary mt-4 leading-relaxed">{description}</p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
        {features.map((f) => (
          <span key={f} className="text-sm text-text-muted flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
            {f}
          </span>
        ))}
      </div>
    </div>
  );

  const imageCol = (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-warm">
      <Image src={image} alt={`${title} services by Maple Custom Homes in Toronto and the GTA`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </div>
  );

  return (
    <section id={id} className={`${bgClass} py-10 md:py-16 px-6 lg:px-8`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {reversed ? <>{imageCol}{textCol}</> : <>{textCol}{imageCol}</>}
      </div>
    </section>
  );
}
