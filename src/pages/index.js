import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import HireMe from "@/components/HireMe";
import Light from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profile from "../../public/images/profile/last.png"
import bikash1 from "../../public/images/profile/bikash1.jpg"
import bikash2 from "../../public/images/profile/bikash2.png"

import TransjationEffact from "@/components/TransjationEffact";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "@/components/Media";
import Link from "next/link";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "MERN Stack Developer.",
      "Frontend Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <>
      <Head>
        <title>profile || Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransjationEffact />
      <main className="flex items-center justify-center text-dark w-full relative min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center flex-col gap-10 md:flex-row justify-between w-full">
            <div className="w-full md:w-1/2 flex items-center justify-center ">
              <div className="  bg-light border-2 border-solid w-[80%] flex  border-dark dark:bg-dark dark:border-light rounded-2xl h-[430px]  p-8 relative order-2">
                <div className="  absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light -z-10" />
                <Image
                  src={bikash2}
                  alt="profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-medium">WELCOME TO MY WORLD</h4>
                <h1 className="text-3xl md:text-5xl font-bold text-dark dark:text-light">
                  Hi, I'm{" "}
                  <span className="text-designColor capitalize">
                    Bikash Chandra
                  </span>
                </h1>
                <h2 className="text-xl md:text-4xl font-bold text-dark dark:text-light">
                  a <span>{text}</span>
                  <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor="#ff014f"
                  />
                </h2>
                <p className="text-sm leading-6 tracking-wide">
                  I’m Bikash Chandra, A MERN Stack Web Developer who has had the
                  privilege of working with many startups, small and large, as
                  well as individuals and entrepreneurs. A designer who
                  specialises in web based projects and online marketing,
                  helping to build businesses.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Link
                    href="/bikash.pdf"
                    className=" font-semibold  uppercase bg-dark/75 text-light border border-dark/75 hover:bg-transparent hover:text-dark duration-300 transition-all dark:bg-light dark:border-light dark:hover:bg-transparent dark:text-dark dark:hover:text-light  py-3 px-5 text-[20px] rounded-md"
                    target="_blank"
                    download
                  >
                    Download CV
                  </Link>
                  <Link
                    href={"/contact"}
                    className="font-semibold  uppercase hover:bg-dark/75 text-dark border border-dark/75 bg-transparent dark:text-light duration-300 transition-all dark:bg-light dark:border-light dark:hover:bg-transparent hover:text-light dark:hover:text-light  py-3 px-5 text-[20px] rounded-md"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>

              {/* Media */}
              {/* <Media /> */}
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className=" absolute md:bottom-4 bottom-1 right-1 md:right-4 w-24 inline-block">
          <Image
            src={Light}
            alt="light"
            className="w-20 h-20 md:w-full hidden md:flex md:h-auto"
          />
        </div>
      </main>
    </>
  );
}
