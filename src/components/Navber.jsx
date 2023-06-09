import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
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

const Navber = () => {

    const [mode,setMode] = useThemeSwitcher()

  return (
    <header className='w-full px-32 py-8 font-medium flex  dark:text-light items-center justify-between'>

        <nav>
            <CoustomLink href={"/"} title={"Home"} className='mr-4'/>
            <CoustomLink href={"/about"} title={"About"} className='mx-4'/>
            <CoustomLink href={"/projects"} title={"Projects"} className='mx-4'/>
            <CoustomLink href={"/articles"} title={"Articles"} className='mx-4'/>
        </nav>
        <nav className='flex items-center'>
            <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'><TwitterIcon/></motion.a>
            <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon/></motion.a>
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
        <div className=' absolute top-2 left-[50%] translate-x-[-50%]'>
            <Logo/>
        </div>
    </header>
  )
}

export default Navber