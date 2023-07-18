import Container from "./Container";
import { SERVICES } from "@/lib/services";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section>
      <Container className="pt-5 sm:pt-10">
        <h2 className="font-bold text-3xl text-center">
          <span className="text-primary ">Cleaning services</span> we offer
        </h2>

        <div className="service-card grid sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center mt-5">
          {SERVICES.map(({ title, icon, description }, idx) => (
            <motion.div
              className=" bg-primary text-white p-4 items-center rounded-xl"
              key={idx}
            >
              <div className="mb-2 flex flex-col items-center gap-2">
                <div className="h-10 w-10 bg-white text-primary rounded-full grid place-content-center">
                  {icon}
                </div>

                <h2 className="font-bold text-xl">{title}</h2>
              </div>

              <p className="text-center">{description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
