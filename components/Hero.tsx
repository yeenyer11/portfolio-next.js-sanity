/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Avatar from "../assets/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "@/pages/studio/[[...index]]";
type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const handleDownload = () => {
    window.open("https://www.canva.com/design/DAFfQXjBcK8/FxGQSirf4wRR1bEVobcxQQ/view?utm_content=DAFfQXjBcK8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink");

  };

  const [text, count] = useTypewriter({
    words: [
      // "Hi The Name's Anucha Suksomboon",
      `${pageInfo?.role}`,
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <br />
      <br />
      <br />
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src={urlFor(pageInfo.heroImage).url()}
      />
      <div className="z-20">
        <h2 className="pb-2 tracking-[10px] ml-5 uppercase">
          {pageInfo?.name}
        </h2>
        <span>I am a </span> <span className="text-[#FF6000]">{text}</span>
        <Cursor cursorColor="#FFA559" />
        <div className="pt-5">
         
          <button
          onClick={handleDownload}
            type="button"
            className="text-white bg-gradient-to-br from-[#443C68] to-[#635985] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Resume
          </button>

        </div>
      </div>
    </div>
  );
}
