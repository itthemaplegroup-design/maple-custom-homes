interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mx-auto text-sm font-bold text-black">
        {number}
      </div>
      <h3 className="text-sm md:text-base font-semibold text-text-primary mt-3">{title}</h3>
      <p className="text-xs md:text-sm text-text-secondary mt-1">{description}</p>
    </div>
  );
}
