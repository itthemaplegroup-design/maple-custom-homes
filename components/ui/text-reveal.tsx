"use client";

import { motion } from "motion/react";
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
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
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
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}{" "}
      {accentWords.map((word, index) => (
        <motion.span
          key={`accent-${index}`}
          initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.4,
            delay: (allWords.length + index) * 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={cn("mr-[0.25em] inline-block", accentClassName)}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
