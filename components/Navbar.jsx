import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Image
          src="/../public/assets/logo/catherine-removebg-preview.png"
          alt="/"
          width="250"
          height="60"
        />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Portfolio
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <Link href="/">
              <li className="ml-5 text-xl uppercase hover:border-b">
                <MdDarkMode />
              </li>
            </Link>
          </ul>
          <div className="flex md:hidden gap-6">
            <MdDarkMode size={25} />
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar