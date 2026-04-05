"use client";

import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/ui/image-comparison";

export function ServicesBeforeAfter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Kitchen */}
      <div>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
          <ImageComparison className="aspect-[4/3] w-full" enableHover>
            <ImageComparisonImage
              src="/images/before1.avif"
              alt="Kitchen before renovation by general contractor in Toronto GTA"
              position="left"
            />
            <ImageComparisonImage
              src="/images/after1.avif"
              alt="Modern kitchen after remodel by Maple Custom Homes Toronto"
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-white/40 backdrop-blur-sm">
              <div className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg ring-4 ring-white/20" />
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
        <p className="text-sm text-text-on-dark-muted mt-3 text-center font-medium">Kitchen Remodel</p>
      </div>
      {/* Bathroom */}
      <div>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
          <ImageComparison className="aspect-[4/3] w-full" enableHover>
            <ImageComparisonImage
              src="/images/before2.avif"
              alt="Kitchen before renovation by contractor in Mississauga GTA"
              position="left"
            />
            <ImageComparisonImage
              src="/images/after2.avif"
              alt="Modern kitchen after renovation by Maple Custom Homes GTA"
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-white/40 backdrop-blur-sm">
              <div className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg ring-4 ring-white/20" />
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
        <p className="text-sm text-text-on-dark-muted mt-3 text-center font-medium">Kitchen Renovation</p>
      </div>
    </div>
  );
}
