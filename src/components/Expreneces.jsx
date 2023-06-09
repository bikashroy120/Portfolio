import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'



const Deteles = ({position,company,time,address,work})=>{
    const ref = useRef(null)
    return(
        <li ref={ref} className='py-8 first:pt-0 last:pb-0 md:w-[60%] w-[90%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reparens={ref}/>
            <motion.div 
                initial={{y:70}}
                whileInView={{y:0}}
                transition={{duration:0.5,type:"spring"}}
            >
                <h3 className=' font-bold capitalize text-xl md:text-2xl'>{position} <a href={"https://www.techdsf.com/"} target="_blank" rel="noopener noreferrer">@{company}</a></h3>
                <span className=' font-medium capitalize text-dark/75 dark:text-light/75'>
                    {address} | {time}
                </span>
                <p className=' font-medium capitalize w-full'>{work}</p>
            </motion.div>
        </li>
    )
}


const Expreneces = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    );
  return (
    <>
        <h2 className='lg:text-8xl md:text-4xl text-3xl font-bold lg:mt-48 md:mt-32 mt-10 w-full text-center mb-8 dark:text-light'>EXPERIENCE</h2>

        <div ref={ref} className='md:w-[75%] w-[90%] mx-auto relative dark:text-light'>

                <motion.div
                style={{scaleY:scrollYProgress}}
                className=' absolute top-0 md:left-9 -left-1 bg-dark w-[4px] h-full origin-top dark:bg-light'/>

                <ul className='w-full flex items-center justify-between ml-4 flex-col'>
                    <Deteles position="Software Engineer"
                        company="Google"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                                        <Deteles position="Software Engineer"
                        company="Google"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                                        <Deteles position="Software Engineer"
                        company="Google"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                                        <Deteles position="Software Engineer"
                        company="Google"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                </ul>

        </div>  
    </>
  )
}

export default Expreneces