import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name,x,y})=>{
    return(
        <motion.div className='py-3 px-6 bg-dark rounded-full text-light text-2xl font-medium shadow-dark cursor-pointer absolute' whileTap={{scale:1.05}} initial={{x:0,y:0}} whileInView={{x:x,y:y}} transition={{duration:1.5}} viewport={{once:true}}>
        {name}
        </motion.div>
    )
}


const Sckil = () => {
  return (
    <>
        <h2 className='text-7xl font-bold mt-48 w-full text-center mb-8'>Skills</h2>
        <div className=' w-full h-screen relative flex items-center justify-center  rounded-full bg-circulorLight'>
            <motion.div className='p-8 bg-dark rounded-full text-light text-2xl font-medium shadow-dark cursor-pointer' whileTap={{scale:1.05}}>
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
    </>
  )
}

export default Sckil