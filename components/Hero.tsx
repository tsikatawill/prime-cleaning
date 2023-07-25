import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 py-10">
        <div className="text-center sm:text-left space-y-5 sm:space-y-8">
          <div className="sm:space-y-2">
            <h1 className="text-4xl uppercase font-bold">Cleaning Made Easy</h1>
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur perferendis hic tempora! Delectus, quis, nostrum
              nesciunt est ratione quibusdam voluptatem repellat, porro iusto
              reiciendis assumenda minima sequi obcaecati fuga accusantium!
            </p>
          </div>

          <Link
            href="/#quote"
            className="h-10 w-fit mx-auto sm:mx-0 grid place-content-center bg-white text-black px-3 rounded-md"
          >
            Get a quote
          </Link>
        </div>

        <div className="row-start-1 sm:col-start-2 grid place-content-center sm:place-content-start mx-auto">
          <Image src="/images/hero.png" width={400} height={400} alt="hero" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
