"use client" 

import { SparklesIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion"
import Image from "next/image";

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
  } from "@/utils/motions";
import Link from "next/link";

export const HomeContent = () => {
    return (
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
          <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[rgb(66,248,236)] opacity-[0.9]]"
            >
              <SparklesIcon className="text-[rgb(66,227,248)] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px]">
                Software Engineer Portofolio
              </h1>
            </motion.div>
    
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span>
                Providing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  the best
                </span>{" "}
                project experience.
              </span>
            </motion.div>
    
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-white my-5 max-w-[600px]"
            >
              Hello, I'm Prayugo Dwi Setiyoko. As a Software Engineer with extensive experience, 
              I specialize in creating seamless and efficient web applications. Explore my projects and see what I can do.
            </motion.p>
    
            <motion.a
              href="/about"
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              Learn more
            </motion.a>
          </div>
    
          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center"
          >
            <Image
              src="/hero-bg.svg"
              alt="work icons"
              height={650}
              width={650}
              draggable={false}
              className="select-none"
            />
          </motion.div>
        </motion.div>
      );
}