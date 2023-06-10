import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 py-14  dark:text-light"
    >
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Front-End Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">HTML</p>
            <span className="w-full h-3 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                viewport={{once:true}}
                
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">CSS</p>
            <span className="w-full h-3 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">JavaScript</p>
            <span className="w-full h-3 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">60%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">ReactJs</p>
            <span className="w-full h-3 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">NextJs</p>
            <span className="w-full h-3 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">75%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-3 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Backend Development Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Node Js</p>
            <span className="w-full h-3 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">50%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">express js</p>
            <span className="w-full h-3 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">60%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">mongodb</p>
            <span className="w-full h-3 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                viewport={{once:true}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">65%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills