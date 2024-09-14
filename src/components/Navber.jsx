import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { CircularText, DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import {motion} from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'



const CoustomLink = ({href,title,className=""})=>{

    const router = useRouter()
 

    return(
        <Link href={href} className={`${className} group relative`}>
            {title}

            <span className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
             group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const CoustomLinkMobile = ({setIsOpen,href,title,className=""})=>{

    const router = useRouter()
 

    return(
        <Link href={href} onClick={()=>setIsOpen((pre)=>!pre)} className={`${className} group relative text-light dark:text-dark`}>
            {title}

            <span className={`h-[2px] inline-block dark:bg-dark bg-light absolute left-0 -bottom-0.5
             group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const Navber = () => {

    const [mode,setMode] = useThemeSwitcher()
    const [isOpen,setIsOpen] = useState(false)
    const router = useRouter()

    const handelOpen = ()=>{
        setIsOpen((pre)=>!pre)
    }

  return (
    <header className='w-full max-w-[1200px] mx-auto z-50 lg:py-8 p-0 font-medium flex  dark:text-light items-center justify-between relative'>

        <button onClick={handelOpen} className='flex items-center justify-center flex-col lg:hidden'>
            <span className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
            <span className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "outline-purple-100"}`}></span>
            <span className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm  ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
        </button>

        <div className='w-full items-center justify-between hidden lg:flex'>
        <nav>
            <CoustomLink href={"/"} title={"Home"} className='mr-4'/>
            <CoustomLink href={"/about"} title={"About"} className='mx-4'/>
            <CoustomLink href={"/projects"} title={"Projects"} className='mx-4'/>
            <CoustomLink href={"/contact"} title={"Contact Me"} className='mx-4'/>
        </nav>
        <nav className='flex items-center'>
            <motion.a href="https://www.linkedin.com/in/bikash120" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedInIcon/></motion.a>
            <motion.a href="https://github.com/bikashroy120" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon/></motion.a>
            <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><PinterestIcon/></motion.a>
            <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3'><DribbbleIcon/></motion.a>
            <button className='flex items-center justify-center ml-3 text-[20px]' onClick={()=> setMode(mode==="light"? "dark" : "light")}>
                {
                    mode ==="dark" ?
                    <SunIcon className={" fill-dark"}/> : <MoonIcon  className={"fill-dark"}/>
                }
            </button>
        </nav>
        </div>


        {
            isOpen ? 
            (
                <motion.div
                initial={{scale:0,opacity:0,x:"-50%" ,y:"-50%"}}
                animate={{scale:1,opacity:1}}
                className='min-w-[95vw] sm:min-w-[80vw] items-center justify-between z-30 flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/75 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                <nav className='flex items-center justify-center flex-col gap-3'>
                    <CoustomLinkMobile setIsOpen={setIsOpen} href={"/"} title={"Home"} className=''/>
                    <CoustomLinkMobile setIsOpen={setIsOpen} href={"/about"} title={"About"} className=''/>
                    <CoustomLinkMobile setIsOpen={setIsOpen} href={"/projects"} title={"Projects"} className=''/>
                    <CoustomLinkMobile setIsOpen={setIsOpen} href={"/contact"} title={"Contact Me"} className='mb-3'/>
                </nav>
                <nav className='flex items-center'>
                    <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'><TwitterIcon/></motion.a>
                    <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon className={"dark:text-dark"}/></motion.a>
                    <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedInIcon/></motion.a>
                    <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><PinterestIcon/></motion.a>
                    <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3'><DribbbleIcon/></motion.a>
                    <button className='flex items-center justify-center ml-3 text-[20px]' onClick={()=> setMode(mode==="light"? "dark" : "light")}>
                        {
                            mode ==="dark" ?
                            <SunIcon className={" fill-dark"}/> : <MoonIcon  className={"fill-dark"}/>
                        }
                    </button>
                </nav>
                </motion.div>
            ):
            null
        }

        <div className=' absolute top-0.5 md:top-2 left-[50%] translate-x-[-50%]'>
            <Logo/>
        </div>
        <div className=' lg:hidden flex items-center justify-center overflow-hidden'>
        <div onClick={()=>router.push("contact")} className='w-24 h-auto flex items-center justify-center relative '>
            <CircularText className={"fill-dark dark:fill-light animate-spin-slow"}/>
            <button className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50px] h-[50px] text-light rounded-full border-2 border-dark dark:border-light hover:bg-transparent hover:text-dark font-bold text-[12px] bg-dark dark:bg-light dark:text-dark'>Heir Me</button>
        </div>
    </div>
    </header>
  )
}

export default Navber