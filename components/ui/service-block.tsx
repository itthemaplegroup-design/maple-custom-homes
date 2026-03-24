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
    <div>
      <span className="text-xs font-medium text-gold bg-gold-light py-1 px-3 rounded-md tracking-[1px]">{number}</span>
      <h3 className="text-lg md:text-xl font-semibold text-text-primary mt-3">{title}</h3>
      <p className="text-sm md:text-base text-text-secondary mt-3 leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {features.map((f) => (
          <span key={f} className="text-xs md:text-sm text-text-muted flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
            {f}
          </span>
        ))}
      </div>
    </div>
  );

  const imageCol = (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-light">
      <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </div>
  );

  return (
    <section id={id} className={`${bgClass} py-8 md:py-12 px-6 lg:px-8`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {reversed ? <>{imageCol}{textCol}</> : <>{textCol}{imageCol}</>}
      </div>
    </section>
  );
}
