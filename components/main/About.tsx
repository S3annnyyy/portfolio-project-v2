"use client"

import React from 'react'
import Image from 'next/image'
import portrait from '@/public/assets/portrait.jpg'
import { aboutInfo } from '@/data/index'
import  pdf  from "./types.s";
import { motion } from 'framer-motion'


const About = () => {
    const resumePDF = pdf("resume.pdf");   
  return (  
    <div className='flex items-center justify-center'>               

        <div className="relative w-full group max-w-md min-w-0 mx-auto mb-6 break-words bg-gray-800 md:max-w-sm rounded-xl">
            <div className="pb-6">
                <div className="flex flex-wrap justify-center">
                    <div className="flex justify-center w-full">
                        <Image src={portrait} alt='Portrait About' className="border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"/>
                    </div>
                </div>

                <div className="mt-20 text-center items-center">                    
                    <h3 className="mt-1 mb-1 text-2xl font-bold leading-normal text-white">Sean Yap</h3>                    
                    <div className='divider-card mt-5 mx-auto'></div>                    
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-6">
                            <p className="mb-4 font-light leading-relaxed text-gray-600">{aboutInfo}</p>                                
                        </div>
                        <div className='w-full flex flex-row mx-4 space-x-4 place-content-center'>
                            <motion.button className='primary-button-left bg-secondary px-4 py-1' whileHover={{ scale: 1.1 }}>
                                <a href={resumePDF} download="SeanYapResume.pdf">Resume</a>
                            </motion.button>
                            <motion.button className='primary-button bg-primary px-4 py-1' onClick={() => {alert("Sorry! Still under development😅")}} whileHover={{ scale: 1.1 }}>
                                Contact
                            </motion.button>                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default About