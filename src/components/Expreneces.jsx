import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const ResumeCard = ({title,subTitle,result,des}) => {
    return (
      <div className="w-full h-auto group flex">
        <div className="w-10 h-[6px] bgOpacity mt-16 relative">
          <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black dark:bg-white bg-opacity-60">
            <span className="w-3 h-3 rounded-full bg-bodyColor dark:bg-gray-700 inline-flex group-hover:bg-designColor duration-300"></span>
          </span>
        </div>
        <div className="w-full bg-gray-300 dark:bg-gray-700 shadow-lg duration-300 py-8  rounded-lg p-4 lg:px-10 flex flex-col justify-center gap-6 lg:gap-10">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lgl:gap-0 lg:items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-dark dark:text-light  duration-300">
                {title}
              </h3>
              <p className="text-sm md:text-xl mt-2 text-dark dark:text-light duration-300">
                {subTitle}
              </p>
            </div>
            <div>
              <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center text-sm font-medium">
                {result}
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base font-medium text-dark dark:text-light duration-300">
            {des}
          </p>
        </div>
      </div>
    );
  }


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

        {/* <div ref={ref} className='md:w-[75%] w-[90%] mx-auto relative dark:text-light'>

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

        </div>  */}

        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl dark:text-light font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black  dark:border-l-gray-700 border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SSC "
            subTitle="Singerdabri Hat High School & College (2017)"
            result="4.36/5"
            des="
            I passed SSC from SINGARDABHIAT HIGH SCHOOL & COLLEGE in 2017 from science department, my result is 4.36 out of 5."
          />
          <ResumeCard
            title="Diploma In Engineering"
            subTitle="Thakurgong Polytechnic Institute (2017 - 2022)"
            result="3.79/4"
            des=" I completed Diploma in Computer Technology in 2022 from Thakurgaon Polytechnic Institute, my result is 3.79 out of 4"
          />
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl dark:text-light md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black dark:border-l-gray-700 border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Develoment Course"
            subTitle="Complex Academy - (2021 - 2022)"
            result="Thakurgaon"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Front-End Developer"
            subTitle="Tech DSF - (2022 - Present)"
            result="Thakurgaon"
            des=" I am currently working as a Frontend developer in tech DSF software company, where I successfully completed 9 projects."
          />
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
    </motion.div> 
    </>
  )
}

export default Expreneces