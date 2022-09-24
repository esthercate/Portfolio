import Image from "next/image";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-4">
      <div className="w-full m-auto lg:px-20">
        <p className="uppercase text-xl tracking-widest text-[#6fb632]">
          About
        </p>
        <h2 className="py-4">Who I Am</h2>
      </div>
      <div className="flex items-center py-6">
        <div className="max-w-[1240px] m-auto md:flex gap-8">
          <div className="w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src="/../public/assets/about/about.jpg"
              alt="/"
              width="640"
              height="426"
              className="rounded-xl"
            />
          </div>
          <div className="w-full px-8 mt-8">
            <p className="text-gray-600">
              A web developer, with extensive knowledge and years of experience,
              working in web technologies and UI/UX,delivering quality work. Web
              developer, with extensive knowledge and years of experience,
              working in web technologies and UI/UX,delivering quality work.
            </p>
            <div className="flex mt-12 justify-between text-gray-700">
              <div className="text-center">
                <h2 className="text-[#6fb632]">02+</h2>
                <p>Years</p>
                <p>Experience</p>
              </div>
              <div className="text-center">
                <h2 className="text-[#6fb632]">10+</h2>
                <p>Completed</p>
                <p>Projects</p>
              </div>
              <div className="text-center">
                <h2 className="text-[#6fb632]">03+</h2>
                <p>Companies</p>
                <p>Worked</p>
              </div>
            </div>
            <div className="mt-12">
              <button className="flex px-5 py-5 uppercase font-semibold">
                Download Resume{" "}
                <span className="text-2xl ml-4 font-bold">
                  {" "}
                  <AiOutlineDownload />
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
