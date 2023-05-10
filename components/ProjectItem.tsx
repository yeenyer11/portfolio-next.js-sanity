/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import pos from "../assets/pos2.png";
import Link from "next/link";
import { Project } from "@/typings";
import { urlFor } from "@/pages/studio/[[...index]]";

type Props = { projects: Project };

const ProjectItem = ({ projects }: Props) => {
  const handleGithubClick = () => {
    window.open(projects?.projectUrl);
  };
  return (
    <div className="relative flex items-center z-10 justify-center h-auto w-full shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-tr from-[#474E68] to-[#50577A] ">
      <img
        className="rounded-xl group-hover:opacity-50"
        src={urlFor(projects.image).url()}
        alt=""
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-gray tracking-wider text-center">
          {projects?.title}
        </h3>
        <p className="pb-4 pt-2 text-gray text-center">
          {projects?.infoProject}
        </p>
        <div className="flex items-center m-2 space-x-2 justify-center">
          {projects?.technologies.map((skill) => (
            <img
              className="h-10 w-10 rounded-full"
              key={skill._id}
              src={urlFor(skill.image).url()}
              alt=""
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGithubClick}
            className="text-center  p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer "
          >
            Git Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
