import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Skill } from '../typings'
import { urlFor } from '@/pages/studio/[[...index]]';
type Props = {
  skill:Skill;
    direactionLeft?:boolean,
    direactionRight?:boolean
}

function ImageArray() {
    const [images, setImages] = useState([]);
}

const Skill = ({direactionLeft,direactionRight,skill}: Props) => {
  return (
    
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: direactionLeft ? -200 :200,
            opacity:0
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1,x: 0}}
        src={urlFor(skill?.image).url()}
       
        className='rounded-full border border-gray-100  w-16 h-16 xl:w-24
        xl:h-24 filter group-hover:grayscale transition object-scale-down duration-300 ease-in-out'
        
        />
        
    </div>
  )
}

export default Skill