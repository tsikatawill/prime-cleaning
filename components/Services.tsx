import Container from "./Container";
import { SERVICES } from "@/lib/services";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services">
      <Container className="py-5 sm:py-10">
        <h2 className="font-bold text-3xl text-center">
          <span className="text-accent">Cleaning services</span> we offer
        </h2>

        <div className="service-card gap-5 justify-center flex flex-wrap mt-5">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
