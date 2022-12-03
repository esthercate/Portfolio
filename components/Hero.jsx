import React from 'react'
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div id='hero' className='w-full h-screen text-center z-0'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-600 leading-[3rem]'>
            Beautifully Crafted User Experiences <br /> & Accessible Web Products!
          </h1>
          <h3 className='pb-6 text-gray-500 max-w-[70%] m-auto'>
            Hi, I'm Catherine a <span className='text-p_green'>Full-stack Software Engineer</span>.
          </h3>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg hover:text-p_green shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub size={20} />
            </div>
            <div className='rounded-full shadow-lg hover:text-p_green shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn size={20} />
            </div>
            <div className='rounded-full shadow-lg hover:text-p_green shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineTwitter size={20} />
            </div>
            <div className='rounded-full shadow-lg hover:text-p_green shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero