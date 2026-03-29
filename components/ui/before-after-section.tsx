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
              src="/images/before1.jpg"
              alt="Kitchen before renovation by Maple Custom Homes general contractor Toronto"
              position="left"
            />
            <ImageComparisonImage
              src="/images/after1.jpg"
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
