import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const ResumeCard = ({title,subTitle,result,des}) => {
    return (
      <div className="w-full h-1/3 group flex">
        <div className="w-10 h-[6px] bgOpacity mt-16 relative">
          <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
            <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
          </span>
        </div>
        <div className="w-full bg-gray-300 dark:bg-gray-700 shadow-lg duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-dark dark:text-light  duration-300">
                {title}
              </h3>
              <p className="text-sm mt-2 text-dark dark:text-light duration-300">
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
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of DVI (2006 - 2010)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div> 
    </>
  )
}

export default Expreneces