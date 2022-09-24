import React from "react";
import Image from "next/image";
import project3 from "../public/assets/projects/project3.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const muveasy = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={project3}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-3">MUVEasy</h2>
          <h3>HTML / Tailwind / Javascript / Mapbox API</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#6fb632]">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sit amet finibus ante, eu lobortis velit. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Cras consectetur, neque quis commodo venenatis, leo
            justo condimentum tortor, accumsan semper eros turpis ac tellus.
            Nullam commodo risus risus, eget pharetra diam mattis eu. Nam quis
            urna rutrum, rhoncus dui vitae, ullamcorper augue. Maecenas
            malesuada sagittis suscipit. Suspendisse ut mollis ipsum. Ut congue
            sem magna, vitae iaculis massa sollicitudin vitae. Aliquam non est
            ullamcorper, tempus elit ut, fringilla risus. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Pellentesque sit amet finibus
            ante, eu lobortis velit. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <button className="uppercase px-10 py-3 mt-6 mr-8">Demo</button>
          <button className="uppercase px-10 py-3 mt-6 mr-8">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Ruby
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Rails
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Heroku
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default muveasy;
