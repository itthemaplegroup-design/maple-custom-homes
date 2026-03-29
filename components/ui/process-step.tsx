interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="text-center group">
      <div className="w-12 h-12 bg-accent/10 border-2 border-accent rounded-xl flex items-center justify-center mx-auto text-sm font-bold text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
        {number}
      </div>
      <h3 className="font-serif text-base md:text-lg font-semibold text-text-primary mt-4">{title}</h3>
      <p className="text-sm text-text-secondary mt-2 leading-relaxed">{description}</p>
    </div>
  );
}
