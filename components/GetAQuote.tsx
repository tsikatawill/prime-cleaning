import { FiMap, FiPhone } from "react-icons/fi";
import Container from "./Container";
import QuoteForm from "./QuoteForm";

const GetAQuote = () => {
  return (
    <section id="quote">
      <Container className="py-5 md:py-10">
        <h2 className="font-bold text-3xl text-center">
          Get a <span className="text-accent">quote</span>
        </h2>

        <div className="grid mt-5">
          <QuoteForm />
        </div>
      </Container>
    </section>
  );
};

export default GetAQuote;
