import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";
import Skill from "./Skill";

type Props = {experience:Experience[]};

const WorkExperience = ({experience}: Props) => {
  return (
    <motion.div 
      initial={{opacity: 0,}}
      transition={{duration: 1.5,}}
      whileInView={{opacity: 1,}}
      className=" h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full justify-center flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FF6000]">
        {experience?.map((experience)=>(
          <ExperienceCard key={experience._id} experience={experience}/>
        ))}
     
      </div>
    </motion.div>
  );
};
export default WorkExperience;
