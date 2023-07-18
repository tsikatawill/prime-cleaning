import Image from "next/image";
import Container from "./Container";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials";

const Testimonial = () => {
  return (
    <section>
      <Container className="pt-5 sm:pt-10">
        <h2 className="font-bold text-3xl text-center">
          What <span className="text-primary">our customers say</span>
        </h2>

        <div className="flex gap-5 overflow-x-scroll mt-5">
          {TESTIMONIALS.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
