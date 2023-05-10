import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';
import { Skill as SkillType } from '@/typings';
import { Silkscreen } from 'next/font/google';

type Props = {skill:SkillType[]}

const Skills = ({skill}: Props) => {
  return (
    <motion.div
    initial={{opacity: 0,}}
    transition={{duration: 1.5,}}
    whileInView={{opacity: 1,}}
    className=' h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
    justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
        <div className='grid grid-cols-4 gap-5 '>
          {skill?.slice(0,skill.length / 2).map(skill=>(
            <Skill key={skill._id} skill={skill}/>
          ))}
           {skill?.slice(skill.length / 2, skill.length).map(skill=>(
            <Skill key={skill._id} skill={skill} direactionLeft/>
          ))}

        </div>

    </motion.div>
  )
}

export default Skills