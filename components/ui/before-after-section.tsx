"use client";

import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/ui/image-comparison";
import { SectionHeader } from "@/components/ui/section-header";

export function BeforeAfterSection() {
  return (
    <section className="bg-surface-dark-alt py-16 md:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="OUR WORK"
          heading="See The Transformation"
          subtitle="Drag to compare before and after"
          dark
        />
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden ring-1 ring-white/10">
          <ImageComparison className="aspect-video w-full" enableHover>
            <ImageComparisonImage
              src="/images/before1.avif"
              srcSet="/images/before1-364.avif 364w, /images/before1-400.avif 400w, /images/before1-640.avif 640w, /images/before1-828.avif 828w, /images/before1.avif 1072w"
              sizes="(max-width: 768px) calc(100vw - 48px), min(640px, calc(100vw - 48px))"
              alt="Kitchen before renovation by Maple Custom Homes general contractor Toronto"
              position="left"
            />
            <ImageComparisonImage
              src="/images/after1.avif"
              srcSet="/images/after1-364.avif 364w, /images/after1-400.avif 400w, /images/after1-640.avif 640w, /images/after1-828.avif 828w, /images/after1.avif 1079w"
              sizes="(max-width: 768px) calc(100vw - 48px), min(640px, calc(100vw - 48px))"
              alt="Modern kitchen after renovation by Maple Custom Homes contractor in the GTA"
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-white/40 backdrop-blur-sm">
              <div className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg ring-4 ring-white/20" />
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
      </div>
    </section>
  );
}
