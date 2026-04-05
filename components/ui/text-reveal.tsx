"use client";

import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  return (
    <span className={cn("inline", className)}>
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="mr-[0.25em] inline-block"
          style={{
            animation: `word-reveal 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay + index * 0.08}s both`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

interface TextRevealAccentProps {
  text: string;
  accentText: string;
  className?: string;
  accentClassName?: string;
}

export function TextRevealHeading({
  text,
  accentText,
  className,
  accentClassName = "text-accent",
}: TextRevealAccentProps) {
  const allWords = text.split(" ");
  const accentWords = accentText.split(" ");

  return (
    <span className={cn(className)}>
      {allWords.map((word, index) => (
        <span
          key={index}
          className="mr-[0.25em] inline-block"
          style={{
            animation: `word-reveal 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.08}s both`,
          }}
        >
          {word}
        </span>
      ))}{" "}
      {accentWords.map((word, index) => (
        <span
          key={`accent-${index}`}
          className={cn("mr-[0.25em] inline-block", accentClassName)}
          style={{
            animation: `word-reveal 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) ${(allWords.length + index) * 0.08}s both`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
