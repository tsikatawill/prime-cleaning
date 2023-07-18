import { Service } from "@/types";
import { AiFillCar, AiFillHome } from "react-icons/ai";
import { BiSolidChurch } from "react-icons/bi";
import { HiOfficeBuilding } from "react-icons/hi";

export const SERVICES: Service[] = [
  {
    title: "Offices",
    icon: (
      <>
        <HiOfficeBuilding size={25} />
      </>
    ),
    description:
      "Elevate your workspace to new standards of cleanliness and productivity with our dedicated office cleaning service, designed to create a fresh and vibrant atmosphere for your team and clients.",
  },
  {
    title: "Homes",
    icon: (
      <>
        <AiFillHome size={25} />
      </>
    ),
    description:
      "Discover the joy of a pristine and inviting home with our professional cleaning service, where meticulous experts use eco-friendly products to create a healthy living environment.",
  },
  {
    title: "Churches",
    icon: (
      <>
        <BiSolidChurch size={25} />
      </>
    ),
    description:
      "Experience divine serenity in your sacred space as our respectful and attentive church cleaning service ensures every corner is immaculately maintained for worship and reflection.",
  },
  {
    title: "Vehicles",
    icon: (
      <>
        <AiFillCar size={25} />
      </>
    ),
    description:
      "Revitalize your ride with our expert vehicle cleaning service, leaving your car shining both inside and out, making every journey a source of pride and delight.",
  },
];
