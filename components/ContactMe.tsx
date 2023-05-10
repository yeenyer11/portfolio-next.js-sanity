import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:anucha.suks@gmail.com ?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row 
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          If I have got just what you need.{""}
          <br />
          <span className="decoration-[#FF6000] underline"> Lets Talk.</span>
        </h4>

        <div className=" space-y-10">
          <div className="flex felx-col items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#FF6000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">083-4590858</p>
          </div>

          <div className="flex  items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#FF6000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">anucha.suks@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#FF6000] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
