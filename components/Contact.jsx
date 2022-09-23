import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#6fb632]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="p-4 h-full">
              <div>
                <Image
                  className="rounded-xl "
                  src="/../public/assets/contact/contact3.jpg"
                  width="640"
                  height="430"
                  alt="/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
