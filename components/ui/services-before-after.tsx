"use client";

import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/ui/image-comparison";

export function ServicesBeforeAfter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* Kitchen */}
      <div>
        <div className="rounded-xl overflow-hidden">
          <ImageComparison className="aspect-[4/3] w-full" enableHover>
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              className="grayscale"
              alt="Kitchen before renovation by general contractor in Toronto GTA"
              position="left"
            />
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Modern kitchen after remodel by Maple Custom Homes Toronto"
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-sm">
              <div className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg" />
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
        <p className="text-sm text-text-on-dark-muted mt-2 text-center">Kitchen Remodel</p>
      </div>
      {/* Bathroom */}
      <div>
        <div className="rounded-xl overflow-hidden">
          <ImageComparison className="aspect-[4/3] w-full" enableHover>
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
              className="grayscale"
              alt="Bathroom before renovation by contractor in Mississauga GTA"
              position="left"
            />
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
              alt="Spa-like bathroom after renovation by Maple Custom Homes GTA"
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-sm">
              <div className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg" />
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
        <p className="text-sm text-text-on-dark-muted mt-2 text-center">Bathroom Renovation</p>
      </div>
    </div>
  );
}
