import { Testimonial } from "@/types";
import Image from "next/image";

const TestimonialCard = ({ image, name, position, text }: Testimonial) => {
  return (
    <div className="card bg-tertiary bg-opacity-30 hover:border-tertiary transition-all duration-200 ease-out border border-transparent max-w-[18rem] sm:max-w-xs flex-shrink-0 p-3 md:p-5 rounded-lg text-white">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-slate-200 mb-3 overflow-hidden">
          <Image src={image} width={100} height={100} alt={name} />
        </div>

        <div className="mb-4 text-center">
          <span className="block font-bold sm:text-lg leading-[4px]">
            {name}
          </span>
          <small className="text-slate-100">{position}</small>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base">{text}</p>
    </div>
  );
};

export default TestimonialCard;
