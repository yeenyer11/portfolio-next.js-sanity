/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion";
import { Experience } from '@/typings';
import { urlFor } from "@/pages/studio/[[...index]]";
type Props = {
  experience:Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className="flex flex-col justify-center rounded-lg items-center space-y-4 flex-shrink-0 w-[450px] 
    md:w[500px] xl:w-[800px] snap-center bg-[#283149] hover:opacity-100 opacity-40 cursor-pointer p-10 transition-opacity duration-200 overflow-hidden ">
      
      <motion.img 
      initial={{
        y:-100,
        opacity:0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="w-32 h-32 rounded-full bg-white xl:w-[200px] xl:h-[200px]  object-center"
      src={urlFor(experience?.companyImage).url()}
      alt=""/>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light uppercase">{experience?.jobtitle}</h4>
        <p className='text-xl'>{experience?.role}</p>
        <div className="flex space-x-2 my-2">
       {experience.technologies.map((skill)=>( 
        <img 
        key={skill._id}
        className='h-10 w-10 rounded-full'
        src={urlFor(skill.image).url()} alt="" />
        
       ))}
       
        </div>
        <p>
          {new Date(experience.dateStarted).toDateString()} - {experience.isCuerrentWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
          </p>
        <ul className="list-disc space-y-3 ml-5 text-md">
         {experience.points.map((point, i)=>(
          <li key={i}>{point}</li>
         ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard