import React from "react";
import { motion } from "framer-motion";
import Avatar from "../assets/avatar.png";
import Image from "next/image";
import { PageInfo } from "@/typings";
import { url } from "inspector";
import { urlFor } from "@/pages/studio/[[...index]]";
type Props = {
  pageInfo:PageInfo
};

export default function About({pageInfo}: Props) {
  return (
    <div className=" flex flex-col relative h-screen text-center md:text-left max-w-7xl px-18 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}  
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="mt-5 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-56  md:h-95 xl:w-[300px] xl:h-[350px]"
      />
      <div className="space-y-8 px-8 md:px-10">
        <h3 className="text-md font-semibold text-center" >
        Hi there! My name is Anucha Suksomboon <p>{pageInfo?.backgroundInformation}</p>


        </h3>
      </div>
    </div>
  );
}
