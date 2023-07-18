import { Testimonial } from "@/types";
import Image from "next/image";

const TestimonialCard = ({ image, name, position, text }: Testimonial) => {
  return (
    <div className="card bg-tertiary sm:max-w-xs sm:flex-shrink-0 p-5 rounded-lg text-white">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-slate-200 mb-3 overflow-hidden">
          <Image src={image} width={100} height={100} alt={name} />
        </div>

        <div className="mb-4 text-center">
          <span className="block font-bold text-lg leading-4 m-0 p-0">
            {name}
          </span>
          <small className="text-slate-100">{position}</small>
        </div>
      </div>

      <p className="text-center">{text}</p>
    </div>
  );
};

export default TestimonialCard;
