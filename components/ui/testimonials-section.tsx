"use client";
import { useRef, useEffect, useState } from "react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-column";

const testimonials: Testimonial[] = [
  {
    text: "We were nervous after a bad experience with another contractor who ghosted us mid-reno. Sam came out the same week, gave us an honest quote, and his crew had our main floor done in six weeks. The kitchen island was worth every penny.",
    image: "/images/testimonials/sarah.avif",
    name: "Sarah M.",
    role: "Oakville, via Google",
  },
  {
    text: "Basement went from a storage dump to my kids' favourite room in the house. Permits, plumbing, framing — they just handled it. There was a two-day delay on the egress window but Sam called us himself to explain. Appreciate the honesty.",
    image: "/images/testimonials/david.avif",
    name: "David C.",
    role: "Mississauga, via Google",
  },
  {
    text: "Our kitchen was straight out of 1993. Now my wife won't stop showing it off. The quartz countertops were a splurge but Sam's team talked us through every option without pushing the expensive stuff. Done in five weeks, no drama.",
    image: "/images/testimonials/mark.avif",
    name: "Raj S.",
    role: "Brampton, via Google",
  },
  {
    text: "Opened our dental clinic three months ago thanks to these guys. They worked evenings and weekends to meet our lease start date. The reception area still gets compliments from patients. Would use Maple Custom Homes again for our second location.",
    image: "/images/testimonials/james.avif",
    name: "Dr. James P.",
    role: "North York, via Google",
  },
  {
    text: "I've renovated twice before and never had a contractor actually answer the phone. Sam picks up or calls back within the hour. Weekly updates, no surprise invoices, and the crew cleaned up every single day. Didn't think that was possible.",
    image: "/images/testimonials/lisa.avif",
    name: "Lisa T.",
    role: "Vaughan, via Google",
  },
  {
    text: "They painted every room plus the exterior trim. My husband checked every corner with a flashlight — couldn't find a single drip. The prep work is what sets them apart. Fair price too, we got three other quotes.",
    image: "/images/testimonials/priya.avif",
    name: "Priya K.",
    role: "Toronto, via Google",
  },
  {
    text: "Bathroom reno done in under four weeks. The tile work is honestly better than what I've seen in model homes. Only thing I'd mention is book early — Sam is busy and we waited about three weeks to start. Worth the wait though.",
    image: "/images/testimonials/aisha.avif",
    name: "Emma H.",
    role: "Markham, via Google",
  },
  {
    text: "Had another contractor leave our reno half-done. Maple came in, assessed the mess, and finished everything properly without trying to upsell us. Sam was straightforward about what needed fixing and what was fine. Wish we'd found them first.",
    image: "/images/testimonials/jennifer.avif",
    name: "Jennifer W.",
    role: "Etobicoke, via Google",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 8);

export function TestimonialsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); observer.unobserve(el); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface-warm py-16 md:py-24 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible
              ? "slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both"
              : "none",
          }}
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-[3px]">TESTIMONIALS</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mt-3 text-center">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-text-secondary text-center mt-4 leading-relaxed">
            Hear from homeowners and business owners across the GTA.
          </p>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
