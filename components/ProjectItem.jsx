import React from "react";
import Image from "next/image";
import Link from "next/link";
import project1 from "../public/assets/projects/project1.jpg";
import project3 from "../public/assets/projects/project3.jpg";

const ProjectItem = () => {
  return (
    <>
      <div className="relative flex items-center justify-center rounded-xl group hover:bg-gradient-to-r from-[#6fb632] to-[#96e6a1] h-auto w-full shadow-xl shadow-gray-400">
        <Image
          className="rounded-xl group-hover:opacity-5"
          src={project1}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            Hospital Finder
          </h3>
          <p className="pb-4 pt-2 text-white text-center">React JS</p>
          <Link href="/">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>

      <div className="relative flex items-center justify-center rounded-xl group hover:bg-gradient-to-r from-[#6fb632] to-[#96e6a1] h-auto w-full shadow-xl shadow-gray-400">
        <Image
          className="rounded-xl group-hover:opacity-5"
          src={project3}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            Hospital Finder
          </h3>
          <p className="pb-4 pt-2 text-white text-center">React JS</p>
          <Link href="/">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
