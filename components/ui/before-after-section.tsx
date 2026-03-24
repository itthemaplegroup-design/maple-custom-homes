"use client";

import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/ui/image-comparison";
import { SectionHeader } from "@/components/ui/section-header";

export function BeforeAfterSection() {
  return (
    <section className="bg-surface-dark-alt py-12 md:py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="OUR WORK"
          heading="See The Transformation"
          subtitle="Drag to compare before and after"
          dark
        />
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden">
          <ImageComparison className="aspect-video w-full" enableHover>
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"
              className="grayscale"
              alt="Kitchen before renovation by Maple Custom Homes general contractor Toronto"
              position="left"
            />
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Modern kitchen after renovation by Maple Custom Homes contractor in the GTA"
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-sm">
              <div className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg" />
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
      </div>
    </section>
  );
}
