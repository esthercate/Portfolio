import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
