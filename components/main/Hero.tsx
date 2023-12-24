"use client"

import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import Image from "next/image";
import teckstackSVG from "../../public/assets/techstack.svg"
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import TextDecrypt from '@/utils/TextDecrypt'
import StarsCanvas from './StarsBackground';
import HaloCanvas from './HaloBackground';


const Hero = () => {

    const scrollToSection = (sectionID: string) => {
        const section = document.getElementById(sectionID)
        if (section) {section.scrollIntoView({behavior: "smooth"})}
    }

    const x = useMotionValue(200);
    const y = useMotionValue(200);
    const limit = 35

    const rotateX = useTransform(y, [0, 400], [limit, -limit]);
    const rotateY = useTransform(x, [0, 400], [-limit, limit]);

    function handleMouse(event:any) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <div className='relative flex flex-col grid grid-cols-1 md:grid-cols-2 h-screen w-screen gap-1 z-10'>
           <motion.div 
                initial="hidden" 
                animate="visible" 
                className="flex flex-row items-center justify-center px-20 z-[20]"                
            >      
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">                    
                    <motion.div 
                        variants={slideInFromLeft(0.5)} 
                        className="flex flex-col mt-6 max-w-[600px] w-auto h-auto">
                        <p className='text-base md:text-2xl text-textBody font-primary tracking-[0.4rem]'>SEAN YAP CHENG KANG</p>
                    </motion.div>

                    <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col mt-6 max-w-[1000px] w-screen">               
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-primary text-6xl md:text-8xl text-textBody">Portfolio Website</h1>
                    </motion.div>

                    <motion.div variants={slideInFromLeft(0.8)} className="text-white my-5 max-w-[1000px]">
                    <span 
                        className="inline-flex flex-col 
                            h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] 
                            md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] 
                            overflow-hidden"
                        >
                        <ul className='block animate-text-slide text-left leading-tight [&_li]:block text-base md:text-4xl whitespace-nowrap font-extrabold'>
                            <li>Singapore Management University</li>
                            <li>Year 2 Information Systems</li>
                            <li>Business Analytics</li>
                            <li>Digital Cloud Solutions</li>
                            <li>Avid programmer</li>
                            <li aria-hidden="true">Singapore Management University</li>
                        </ul>
                        </span>
                    </motion.div>                 

                    <motion.button onClick={() => scrollToSection('projects')} variants={slideInFromLeft(1)} whileHover={{ scale: 1.1 }} className="py-3 primary-button text-center text-black text-lg cursor-pointer max-w-[200px]">
                        View my projects <ArrowRightIcon className='h-5 w-5 inline'/>
                    </motion.button>
                </div>                
            </motion.div>

            <motion.div 
                    variants={slideInFromRight(0.8)} 
                    className="w-screen h-screen flex justify-center items-center hidden md:block mt-10 ml-16 z-10"
                    // style={{rotateX, rotateY}}
                    // onMouseMove={handleMouse}
                >
                    {/* <Image src={teckstackSVG} alt="work icons"  height={650} width={650} />         */}
                    <HaloCanvas />                                
            </motion.div>
        </div>        
    )
}

export default Hero