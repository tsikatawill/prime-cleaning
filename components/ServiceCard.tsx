import { Service } from "@/types";

const ServiceCard = ({ service }: { service: Service }) => {
  const { icon, image, description, title } = service;

  return (
    <div
      className="p-3 rounded-xl bg-slate-300 flex-shrink-0 w-full h-80 sm:w-[18rem] sm:h-48 flex"
      style={{ background: `url(${image}) center center/cover no-repeat` }}
    >
      <div className="relative w-full self-end py-2 px-4 bg-white -bottom-4">
        <div className="h-10 w-10 absolute -top-5 right-5 bg-white text-primary rounded-full grid place-content-center">
          {icon}
        </div>

        <p className="font-bold text-xl">{title}</p>
      </div>
    </div>
  );
};

// const ServiceCard = ({ service }: { service: Service }) => {
//   const { icon, description, title } = service;
//   return (
//     <div className=" bg-primary text-white p-4 items-center rounded-xl">
//       <div className="mb-2 flex flex-col items-center gap-2">
//         <div className="h-10 w-10 bg-white text-primary rounded-full grid place-content-center">
//           {icon}
//         </div>

//         <h2 className="font-bold text-xl">{title}</h2>
//       </div>

//       <p className="text-center">{description}</p>
//     </div>
//   );
// };

export default ServiceCard;
