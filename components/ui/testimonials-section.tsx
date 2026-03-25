"use client";
import { motion } from "motion/react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-column";

const testimonials: Testimonial[] = [
  {
    text: "Maple Custom Homes renovated our entire main floor — kitchen, living room, and dining area. The team was professional, on time every day, and the result is stunning. Best contractor we've ever worked with.",
    image: "/images/testimonials/sarah.jpg",
    name: "Sarah Mitchell",
    role: "Homeowner, Oakville",
  },
  {
    text: "We hired them for a full basement finishing. They handled permits, framing, electrical, plumbing — everything. Came in on budget and ahead of schedule. Our basement is now the favourite room in the house.",
    image: "/images/testimonials/david.jpg",
    name: "David Chen",
    role: "Homeowner, Mississauga",
  },
  {
    text: "Their kitchen renovation transformed our 1990s kitchen into a modern dream. Custom cabinetry, quartz countertops, new plumbing — all done in five weeks. We couldn't be happier.",
    image: "/images/testimonials/priya.jpg",
    name: "Priya Sharma",
    role: "Homeowner, Brampton",
  },
  {
    text: "We needed a commercial build-out for our new dental clinic. Maple Custom Homes delivered a beautiful, functional space on a tight timeline. Highly recommend for any commercial project.",
    image: "/images/testimonials/james.jpg",
    name: "Dr. James Park",
    role: "Business Owner, North York",
  },
  {
    text: "From the initial estimate to the final walkthrough, the communication was outstanding. Weekly updates, no surprises, and a dedicated project manager who actually answered the phone. Rare in this industry.",
    image: "/images/testimonials/lisa.jpg",
    name: "Lisa Thompson",
    role: "Homeowner, Vaughan",
  },
  {
    text: "They painted our entire house — interior and exterior. The prep work was meticulous, clean lines everywhere, and they left the place spotless. Fair price for excellent quality.",
    image: "/images/testimonials/mark.jpg",
    name: "Mark Rodriguez",
    role: "Homeowner, Toronto",
  },
  {
    text: "Our bathroom renovation was completed in under four weeks. The tile work is flawless, the fixtures are exactly what we wanted, and the plumber they brought in was top-notch. Would hire again without hesitation.",
    image: "/images/testimonials/aisha.jpg",
    name: "Aisha Hassan",
    role: "Homeowner, Markham",
  },
  {
    text: "Maple Custom Homes built us a beautiful backyard deck with an outdoor kitchen. They handled everything from design to permits to construction. The craftsmanship is exceptional.",
    image: "/images/testimonials/robert.jpg",
    name: "Robert Kim",
    role: "Homeowner, Richmond Hill",
  },
  {
    text: "We had a terrible experience with a previous contractor who left our renovation half-done. Maple came in, assessed the damage, and finished the job properly. Honest, reliable, and skilled.",
    image: "/images/testimonials/jennifer.jpg",
    name: "Jennifer Walsh",
    role: "Homeowner, Etobicoke",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="bg-surface-light py-12 md:py-20 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-lg mx-auto mb-10"
        >
          <p className="text-xs font-medium text-gold uppercase tracking-[3px]">TESTIMONIALS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mt-2 text-center">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-text-secondary text-center mt-3">
            Hear from homeowners and business owners across the GTA.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
