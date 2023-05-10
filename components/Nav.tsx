import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsArchive,
  BsChatSquare,
} from "react-icons/bs";

import  Link  from "next/link";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-[#474E68]/50 backgrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">

          <Link 
            href="#hero"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BiHomeAlt />
          </Link>
          <Link
            href="#about"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BiUser />
          </Link>
          <Link
            href="#experience"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BsBriefcase />
          </Link>
          <Link
            href="#skills"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BsArchive />
          </Link>
          <Link
            href="#projects"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BsClipboardData />
          </Link>
      
        </div>
      </div>
    </nav>
  );
};

export default Nav;