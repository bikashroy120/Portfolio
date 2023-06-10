import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import  contactImg  from "../../public/images/profile/contactImg.png";
import Image from 'next/image';

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[35%] h-full bg-white/75 dark:bg-black shadow-md  p-4 lg:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-dark dark:text-white">Bikash Chandra</h3>
        <p className="text-lg font-normal text-dark dark:text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-dark/75 dark:text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-dark dark:text-gray-400 flex items-center gap-2">
          Phone: <span className="text-dark dark:text-gray-400">01773372120</span>
        </p>
        <p className="text-base text-dark dark:text-gray-400 flex items-center gap-2">
          Email: <span className="text-dark dark:text-gray-400">bikashroydt@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase dark:text-light font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon dark:text-light">
            <FaFacebookF />
          </span>
          <span className="bannerIcon dark:text-light">
            <FaTwitter />
          </span>
          <span className="bannerIcon dark:text-light">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft