import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BiBrush, BiCheckCircle, BiNote } from "react-icons/bi";
import { FiMap, FiPhone, FiUser } from "react-icons/fi";
import emailjs from "emailjs-com";
import ErrorMsg from "./FormElements/ErrorMsg";
import Label from "./FormElements/Label";
import { data } from "autoprefixer";
import { toast } from "react-toastify";

enum ServicesEnum {
  office = "office",
  home = "home",
  church = "church",
  vehicle = "vehicle",
}

type Inputs = {
  fullname: string;
  phone: string;
  address: string;
  service: ServicesEnum;
  note: string;
};

const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const sendEmail = (data: Inputs) => {
    const { fullname, address, service, note, phone } = data;

    const values = {
      from_name: fullname,
      address,
      phone,
      service,
      note,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_serviceID as string,
        process.env.NEXT_PUBLIC_templateID as string,
        values,
        process.env.NEXT_PUBLIC_publicKey as string
      )
      .then(() => {
        toast.success("Email sent successfully");
      })
      .catch(() => {
        toast.error("Failed to send email!");
      });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendEmail(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="max-w-lg grid sm:grid-cols-2 gap-5 w-full mx-auto"
    >
      <div className="space-y-2">
        <label
          htmlFor="fullname"
          className="flex hover:text-primary active:text-primary hover:cursor-pointer gap-2 items-center font-semibold"
        >
          <FiUser />
          Full name
        </label>
        <input
          id="fullname"
          type="text"
          {...register("fullname", { required: true })}
          className="border border-slate-300 bg-transparent focus:outline-0 focus:border-2 focus:border-primary  w-full rounded-md h-10 px-4"
        />
        {errors.fullname && <ErrorMsg>Please fill this field</ErrorMsg>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">
          <FiPhone />
          Phone number
        </Label>
        <input
          type="tel"
          id="phone"
          {...register("phone", { required: true })}
          className="border border-slate-300 bg-transparent focus:outline-0 focus:border-2 focus:border-primary  w-full rounded-md h-10 px-4"
        />
        {errors.phone && <ErrorMsg>Please fill this field</ErrorMsg>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">
          <FiMap />
          Address
        </Label>
        <input
          {...register("address", { required: true })}
          id="address"
          className="border border-slate-300 bg-transparent focus:outline-0 focus:border-2 focus:border-primary  w-full rounded-md h-10 px-4"
          type="tel"
          placeholder="Enter your address"
        />
        {errors.address && <ErrorMsg>Please fill this field</ErrorMsg>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">
          <BiCheckCircle />
          Pick a service
        </Label>
        <select
          id="service"
          {...register("service", { required: true })}
          className="border border-slate-300 bg-transparent focus:outline-0 focus:border-2 focus:border-primary  w-full rounded-md h-10 px-4"
        >
          {Object.values(ServicesEnum).map((item) => (
            <option key={item} value={item} className="capitalize">
              {item}
            </option>
          ))}
        </select>
        {errors.service && <ErrorMsg>Please choose a service</ErrorMsg>}
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="note">
          <BiNote />
          Add a note
        </Label>
        <textarea
          id="note"
          {...register("note", { required: true })}
          placeholder="Briefly describe your cleaning needs"
          className="border border-slate-300 bg-transparent focus:outline-0 focus:border-2 focus:border-primary  w-full rounded-md h-10 p-4 min-h-[200px]"
        ></textarea>
        {errors.note && <ErrorMsg>Please fill this field</ErrorMsg>}
      </div>
      <button
        type="submit"
        className="h-10 bg-primary text-white px-3 rounded-md w-full sm:col-span-2"
      >
        Submit
      </button>
    </form>
  );
};

export default QuoteForm;
