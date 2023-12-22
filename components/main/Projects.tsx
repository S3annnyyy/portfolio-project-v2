"use client"

import React from 'react'
import ProjectComponent from '@/components/sub/ProjectComponent'
import { useInView } from 'react-intersection-observer';
import { projectData } from '@/constants'
import { slideInFromRight, slideInFromLeft } from '@/utils/motion'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='relative flex flex-col h-full w-full z-10'>
      <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h2>
            <p className="text-lg leading-8 text-gray-600">Interesting projects I did over the years</p>              
      </div>
      {projectData.map((project) => {        
          const [ref, inView] = useInView({
            triggerOnce: true, // Trigger the event only once
          });
          return (
            <motion.div 
              key={project.id} 
              ref={ref} 
              className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-6 lg:px-8"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={project.id % 2 == 0 ? slideInFromRight(0.8): slideInFromLeft(0.8)}
            >            
          <div className="relative isolate px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">         
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <div className='flex item-center'>
                <div className='divider mt-2'></div>
                <span className='absolute text-primary ml-36 m:ml-32 lg:ml-28 mb-6'>{"0" +project.id}</span>   
              </div>
                      
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{project.title}</h2>            
              <p className="mt-6 text-lg leading-8 text-gray-300">{project.description}</p>             
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">              
                <a href={project.urlLink} className="text-sm font-semibold leading-6 text-primary z-[20]">
                  View Project <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl text-center lg:flex lg:flex-col lg:justify-center">
                  <div className="mx-auto max-w-xs px-8">
                    <ProjectComponent screen={project.image.src} key={project.id} platform={project.platform}/>
                  </div>
                </div>
            </div>
          </div>
        </motion.div> 
          )
             
      
      })}
      
    </div>
    
  )
}

export default Projects