"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import Image from "next/image";
import teckstackSVG from "../../public/techstack.svg"

const Hero = () => {
    return (
        <div className='relative flex flex-col h-full w-full'>

            <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center px-20 mt-10 w-full z-[20]">      
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">                    
                    <motion.div variants={slideInFromTop} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
                        Hi there!
                    </motion.div>

                    <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">                
                        <span>
                            Welcome to my 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#68e2fa]">{" "}Portfolio Website{" "}</span>
                        </span>            
                    </motion.div>

                    <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
                        I'm currently a Sophomore at Singapore Management University, majoring in Business Analytics & Digital Cloud Solutions
                    </motion.p>

                    <motion.a variants={slideInFromLeft(1)}  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
                        View my projects 
                    </motion.a>
                    
                    
                    
                </div>

                <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center">
                    <Image src={teckstackSVG} alt="work icons"  height={650} width={650} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero