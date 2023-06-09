import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img1 from "../../public/images/projects/1.png"
import img2 from "../../public/images/projects/2.png"
import img3 from "../../public/images/projects/3.png"
import img4 from "../../public/images/projects/4.png"
import img5 from "../../public/images/projects/5.png"
import img6 from "../../public/images/projects/6.png"
import img7 from "../../public/images/projects/7.png"
import img8 from "../../public/images/projects/8.png"
import TransjationEffact from '@/components/TransjationEffact'


const FeaturedProjects = ({type,title,summary,img,link,github})=>{
    return(
        <article className='w-full flex items-center justify-between p-12 rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl relative'>

            <div className=' absolute top-0 -right-3 w-[101%] h-[102%] rounded-[2rem] bg-dark dark:bg-light -z-10'/>
            
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} className='w-full h-auto' alt='Project ing' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-16'>
                <span className=' text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className=' hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10 dark:text-light'> <GithubIcon /> </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'> Visit Project</Link>
                </div>
            </div>
        </article>
    )
}


const ProjectsData = ({type,title,summary,img,link,github})=>{
    return(
        <article className='w-full flex flex-col items-center p-8 justify-between rounded-3xl border relative border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl'>
            <div className=' absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light -z-10'/>
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} className='w-full h-[300px]' alt='Project ing' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-3'>
                <span className=' text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className=' hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-2xl md:text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={github} className='w-10 dark:text-light'> <GithubIcon /> </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'> Visit Project</Link>
                </div>
            </div>
        </article>
    )
}


const Projects = () => {
  return (
    <>
      <Head>
        <title>profile || Project</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransjationEffact />
        <main className='flex flex-col w-full items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text={"My Project "} className='mb-16'/>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-24 gap-10 mb-14'>
                        <ProjectsData
                            type={"Featured Project"}
                            title={"MERN Stack react ecommerce website"}
                            summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Redux, React Router and Recharts,axios. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency"}
                            img={img8}
                            link={"https://ecommerce-website-beryl.vercel.app/"}
                            github={"#"}
                        />
                        <ProjectsData
                            type={"Featured Project"}
                            title={"MERN Stack react ecommerce admin"}
                            summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Redux, axios,react Query, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency"}
                            img={img7}
                            link={"https://shop-admin-puce.vercel.app/"}
                            github={"#"}
                        />
                    <ProjectsData
                            type={"Featured Project"}
                            title={"pdf Download Application"}
                            summary={"A feature-rich Crypto Screener App using html, Tailwind CSS, javascript and owl carosel. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                            img={img1}
                            link={"https://pdf-download.vercel.app"}
                            github={"#"}
                        />
           
          
                         <ProjectsData
                            type={"Featured Project"}
                            title={"ciberconta Application"}
                            summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Redux, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                            img={img2}
                            link={"https://ciberconta.vercel.app/"}
                            github={"#"}
                        />

                            <ProjectsData
                            type={"Featured Project"}
                            title={"travel agency Application"}
                            summary={"A travel-agency Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                            img={img3}
                            link={"https://travel-agency-web-app-react.vercel.app/"}
                            github={"#"}
                        />

                        <ProjectsData
                            type={"Featured Project"}
                            title={"maltimart-ecommerce Application"}
                            summary={"A maltimart-ecommerce Screener App using React, CSS, Redux, React Router. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                            img={img4}
                            link={"https://maltimart-ecommerce-ochre.vercel.app/"}
                            github={"#"}
                        />  

                        <ProjectsData
                            type={"Featured Project"}
                            title={"food Delevary ecommerce Application"}
                            summary={"A food Delevary ecommerce App using React,Tailwind CSS, Redux, React Router firbase full stark project. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                            img={img5}
                            link={"https://food-app-firebase.vercel.app"}
                            github={"#"}
                        />   
                        <ProjectsData
                            type={"Featured Project"}
                            title={"youtub-clone Application"}
                            summary={"A youtub-clone App using React, CSS, Redux, React Router Rapid Api full stark project. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                            img={img6}
                            link={"https://youtub-clone-sand.vercel.app/"}
                            github={"#"}
                        />                       
            
            </div>


        </Layout> 
        </main>
    </>
  )
}

export default Projects