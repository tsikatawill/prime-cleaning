import Image from "next/image";
import Container from "./Container";
import { HiCalendar, HiClock } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";

const WorkingDays = () => {
  return (
    <section>
      <Container className="py-5 sm:py-10">
        <h2 className="font-bold text-3xl text-center">
          Our <span className="text-accent">working times</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 items-center mt-5">
          <div className="left grid place-content-center max-w-[10rem] sm:max-w-xs mx-auto">
            <Image
              src="/images/calendar.png"
              width={250}
              height={250}
              alt="calendar"
            />
          </div>

          <div className="right">
            <ul className="max-w-fit mx-auto sm:mx-0">
              <li className="[&:not(:last-child)]:border-b [&:not(:last-child)]:border-black py-4 grid grid-cols-2 gap-5 place-items-center">
                <h3 className="flex flex-col items-center">
                  <BiCalendar className="mr-3" size={20} />
                  <span className="font-semibold">Monday - Thursday</span>
                </h3>

                <p className="flex flex-col items-center">
                  <HiClock size={20} className="mr-3" />
                  <span className="font-semibold">9am - 4pm</span>
                </p>
              </li>

              <li className="[&:not(:last-child)]:border-b [&:not(:last-child)]:border-black py-4 grid grid-cols-2 gap-5 place-items-center">
                <h3 className="flex flex-col items-center">
                  <BiCalendar className="mr-3" size={20} />
                  <span className="font-semibold">Friday</span>
                </h3>

                <p className="flex flex-col items-center">
                  <HiClock size={20} className="mr-3" />
                  <span className="font-semibold">9am - 4pm</span>
                </p>
              </li>

              <li className="[&:not(:last-child)]:border-b [&:not(:last-child)]:border-black py-4 grid grid-cols-2 gap-5 place-items-center">
                <h3 className="flex flex-col items-center">
                  <BiCalendar className="mr-3" size={20} />
                  <span className="font-semibold">Saturday</span>
                </h3>

                <p className="flex flex-col items-center">
                  <HiClock size={20} className="mr-3" />
                  <span className="font-semibold">9am - 4pm</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkingDays;
