import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'



const Deteles = ({type,time,place,info})=>{
    const ref = useRef(null)
    return(
        <li ref={ref} className='py-8 first:pt-0 last:pb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reparens={ref}/>
            <motion.div 
                initial={{y:70}}
                whileInView={{y:0}}
                transition={{duration:0.5,type:"spring"}}
            >
                <h3 className=' font-bold capitalize text-2xl'>{type}</h3>
                <span className=' font-medium capitalize text-dark/75'>
                    {time} | {place}
                </span>
                <p className=' font-medium capitalize w-full'>{info}</p>
            </motion.div>
        </li>
    )
}


const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    );
  return (
    <div className='pb-64'>
        <h2 className='text-8xl font-bold mt-48 mb-24 w-full text-center dark:text-light'>EXPERIENCE</h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div
                style={{scaleY:scrollYProgress}}
                className=' absolute top-0 left-9 bg-dark w-[4px] h-full origin-top dark:bg-light'/>

                <ul className='w-full flex items-center justify-between ml-4 flex-col dark:text-light'>
                    <Deteles
                        type="Bachelor Of Science In Computer Science"
                        time="2016-2020"
                        place="Massachusetts Institute Of Technology (MIT)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence."
                    />
                                        <Deteles
                        type="Bachelor Of Science In Computer Science"
                        time="2016-2020"
                        place="Massachusetts Institute Of Technology (MIT)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence."
                    />
                                        <Deteles
                        type="Bachelor Of Science In Computer Science"
                        time="2016-2020"
                        place="Massachusetts Institute Of Technology (MIT)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence."
                    />
                </ul>

        </div>  
    </div>
  )
}

export default Education