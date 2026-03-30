"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="p-6 rounded-2xl border border-border-light bg-surface-white shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-shadow duration-300 max-w-xs w-full cursor-default select-none group"
                  key={i}
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
                    <footer className="flex items-center gap-3 mt-5 pt-4 border-t border-border-light">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`${name} - Maple Custom Homes client review`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-accent/10 group-hover:ring-accent/30 transition-all duration-300"
                      />
                      <div className="flex flex-col">
                        <cite className="text-sm font-semibold text-text-primary tracking-tight leading-5 not-italic">{name}</cite>
                        <span className="text-xs text-text-muted leading-5 tracking-tight">{role}</span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
