import React from 'react'
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div id='hero' className='w-full h-screen text-center z-0'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Beautifully crafted web experiences.</p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#6fb632]'>Catherine</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Fullstack Software Engineer</h1>
          <p className='py-4 text-gray-400 text-green max-w-[70%] m-auto'>I like to create great user experiences and accessible web products.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub size={20} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn size={20} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineTwitter size={20} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero