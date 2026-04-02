"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { TRUST_INDICATORS } from "@/lib/constants";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextRevealHeading } from "@/components/ui/text-reveal";

export function HeroSection() {
  return (
    <section className="bg-surface-warm py-16 md:py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center relative">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-[3px] mb-6"
          >
            <span className="w-8 h-px bg-accent" />
            Trusted General Contractor
          </motion.div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary leading-[1.1] tracking-tight">
            <TextRevealHeading
              text="General Contracting"
              accentText="Done Right"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base md:text-lg text-text-secondary mt-6 max-w-lg leading-relaxed"
          >
            Trusted general contractor serving the GTA, Barrie, Oshawa, Niagara, London, Kitchener, and surrounding areas. Home renovations, kitchen remodels, basement finishing, and commercial build-outs — one team, one point of contact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <ShimmerButton href="/contact">
              Get a Free Estimate
            </ShimmerButton>
            <Link href="/services" className="border border-text-primary/20 text-text-primary font-semibold py-3.5 px-8 rounded-lg hover:bg-text-primary hover:text-white transition-all text-center">
              View Our Services
            </Link>
          </motion.div>
        </div>

        {/* Right — Featured project card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:rotate-2 lg:hover:rotate-0 transition-transform duration-500"
        >
          <div className="bg-surface-dark-alt rounded-2xl p-5 shadow-2xl">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-dark">
              <Image
                src="/images/vaulted-ceiling.jpg"
                alt="Custom home build with vaulted ceiling and crystal chandelier by Maple Custom Homes in Barrie Ontario"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex justify-between mt-4 text-sm px-1">
              <div>
                <div className="text-accent font-medium">Custom Home Build</div>
                <div className="text-text-on-dark-muted text-xs mt-0.5">Barrie, ON</div>
              </div>
              <div className="text-right">
                <div className="text-accent font-medium">New Construction</div>
                <div className="text-text-on-dark-muted text-xs mt-0.5">Completed 2025</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="max-w-6xl mx-auto border-t border-border-light mt-12 md:mt-20 pt-8 flex flex-wrap justify-center gap-x-8 gap-y-3"
      >
        {TRUST_INDICATORS.map((t) => (
          <span key={t} className="text-sm text-text-muted flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            {t}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
