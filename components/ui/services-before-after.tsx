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
              srcSet="/images/before1-364.avif 364w, /images/before1-400.avif 400w, /images/before1-640.avif 640w, /images/before1-828.avif 828w, /images/before1.avif 1072w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Kitchen before renovation by general contractor in Toronto GTA"
              position="left"
            />
            <ImageComparisonImage
              src="/images/after1.avif"
              srcSet="/images/after1-364.avif 364w, /images/after1-400.avif 400w, /images/after1-640.avif 640w, /images/after1-828.avif 828w, /images/after1.avif 1079w"
              sizes="(max-width: 768px) 100vw, 50vw"
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
              srcSet="/images/before2-400.avif 400w, /images/before2-640.avif 640w, /images/before2.avif 1984w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Kitchen before renovation by contractor in Mississauga GTA"
              position="left"
            />
            <ImageComparisonImage
              src="/images/after2.avif"
              srcSet="/images/after2-400.avif 400w, /images/after2-640.avif 640w, /images/after2.avif 2000w"
              sizes="(max-width: 768px) 100vw, 50vw"
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
