import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profile from "../../public/images/profile/developer-pic-2.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Sckil from '@/components/Sckil'


const AnimitedNumber = ({value})=>{
  const ref = useRef(null)
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{duration:3000});
  const isInvalue = useInView(ref,{once:true});

  useEffect(()=>{
    if(isInvalue){
      motionValue.set(value)
    }
  },[isInvalue,motionValue,value])

  useEffect(()=>{
    springValue.on("change",(latest)=>{
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  },[springValue,value])

  return <span ref={ref}></span>

}



const About = () => {
  return (
    <>
        <Head>
        <title>profile || About</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex flex-col w-full items-center justify-center'>
        <Layout className='pt-16'> 
            <AnimatedText text={"Passion Fuels Purpose! "} className='mb-16'/>
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className=' col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='text-lg font-bold mb-4 uppercase text-dark/75'>Biography</h2>
                    <p className=' font-medium'>
                    - Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                    and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                    new and innovative ways to bring my clients' visions to life.
                    </p>
                    
                    <p className=' font-medium py-4'>
                    - I believe that design is about more than just making things look pretty – it's about solving problems and 
                    creating intuitive, enjoyable experiences for users. 
                    </p>

                    <p className=' font-medium'>
                    - Whether I'm working on a website, mobile app, or 
                    other digital product, I bring my commitment to design excellence and user-centered thinking to 
                    every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
                </div>

                <div className=' col-span-3 bg-light border-2 border-solid border-dark rounded-2xl h-max p-8 relative'>
                    <div className=' absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] bg-dark -z-10'/>
                    <Image src={profile} alt='profile' className='w-full h-auto rounded-2xl'/>
                </div>

                <div className=' col-span-2 flex flex-col justify-between items-end'>
                    <div className='flex flex-col items-end justify-center'>
                      <span className=' text-7xl font-bold inline-block'><AnimitedNumber value={50}/>+</span>
                      <h2 className='text-xl font-medium text-dark/75'>Satisfied Client</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                      <span className=' text-7xl font-bold inline-block'><AnimitedNumber value={40}/>+</span>
                      <h2 className='text-xl font-medium text-dark/75'>Projects Completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                      <span className=' text-7xl font-bold inline-block'><AnimitedNumber value={5}/>+</span>
                      <h2 className='text-xl font-medium text-dark/75'>Yeras Of Experience</h2>
                    </div>
                </div>
            </div>
            <Sckil/>
        </Layout>
      </main>
    </>
  )
}

export default About