import React from 'react'
import Layout from './Layout'
import {motion} from "framer-motion"
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'

const Footer = () => {
  return (
    <div className=' border-t-4 border-dark dark:border-light py-8'>
        <Layout className='!py-0'>
            <div className='flex items-center flex-col gap-3 md:flex-row justify-between w-full h-auto dark:text-light'>
                <h2 className=' text-xl'>{new Date().getFullYear()} &copy; All Right Reserved</h2>
                <nav className='flex items-center'>
                <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'><TwitterIcon/></motion.a>
                <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon/></motion.a>
                <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedInIcon/></motion.a>
                <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><PinterestIcon/></motion.a>
                <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3'><DribbbleIcon/></motion.a>
                </nav>
                <h2 className=' text-xl underline'>Say Hey</h2>
            </div>
        </Layout>
    </div>
  )
}

export default Footer