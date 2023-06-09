import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name,x,y})=>{
    return(
        <motion.div className='py-3 px-6 md:bg-dark rounded-full md:text-light lg:text-2xl md:text-xl text-base font-medium shadow-dark md:dark:bg-light text-dark dark:text-light md:dark:text-dark cursor-pointer absolute' whileTap={{scale:1.05}} initial={{x:0,y:0}} whileInView={{x:x,y:y}} transition={{duration:1.5}} viewport={{once:true}}>
        {name}
        </motion.div>
    )
}


const Sckil = () => {
  return (
    <div className=' hidden sm:block'>
        <h2 className='lg:text-7xl md:text-4xl text-3xl font-bold lg:mt-48 md:mt-32 mt-10 dark:text-light w-full text-center md:mb-8'>Skills</h2>
        <div className=' w-full lg:h-screen md:h-[70vh] h-[50vh] relative flex items-center justify-center  rounded-full bg-circulorLight dark:bg-circulorDark'>
            <motion.div className='p-8 md:bg-dark rounded-full md:text-light text-dark lg:text-2xl md:text-xl text-base font-medium shadow-dark cursor-pointer' whileTap={{scale:1.05}}>
                web
            </motion.div>
            <Skill name={"HTML"} x="-25vw" y={"2vw"}/>
            <Skill name={"CSS"} x="-5vw" y={"-10vw"}/>
            <Skill name={"Jvascript"} x="20vw" y={"-6vw"}/>
            <Skill name={"ReactJS"} x="0vw" y={"12vw"}/>
            <Skill name={"NextJS"} x="-20vw" y={"-15vw"}/>
            <Skill name={"GatsbtJS"} x="15vw" y={"-12vw"}/>
            <Skill name={"Web Design"} x="32vw" y={"5vw"}/>
            <Skill name={"Figma"} x="0vw" y={"-20vw"}/>
            <Skill name={"Firebase"} x="-25vw" y={"18vw"}/>
            <Skill name={"Tailwind CSS"} x="18vw" y={"18vw"}/>
        </div>
    </div>
  )
}

export default Sckil