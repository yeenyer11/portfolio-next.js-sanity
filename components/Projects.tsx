import React from "react";
import Image from "next/image";
import pos from "../assets/pos2.png"
import Link from "next/link";
import  ProjectItem  from "./ProjectItem";
import { Project } from "@/typings";
 


type Props = {projects:Project[]};

const Projects = ({projects}: Props) => {
  return (
    <div 
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
     justify-evenly mx-auto items-center z0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
      {projects?.map((projects)=>(
          <ProjectItem key={projects._id} projects={projects}/>
        ))}
        
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-0"></div>
    </div>
    
  );
};

export default Projects;
