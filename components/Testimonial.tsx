import Container from "./Container";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="bg-primary text-white" id="testimonial">
      <Container className="py-5 sm:py-10">
        <h2 className="font-bold text-3xl text-center">
          What <span className="text-accent">our customers</span> say
        </h2>

        <motion.div className="flex gap-5 overflow-x-scroll mt-5 custom-scrollbar scroll-x pb-5">
          {TESTIMONIALS.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonial;
