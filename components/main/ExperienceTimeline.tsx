"use client"

import React from 'react'
import { workExperience } from '@/constants/index'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import { slideInFromTop } from '@/utils/motion'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const ExperienceTimeline = () => {
  return (
    <div className='relative flex flex-col h-full w-full z-10'>
        <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center w-full z-[20]">      
                <div>                    
                    <motion.div variants={slideInFromTop} className="mx-auto max-w-2xl sm:text-center">
                   
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Work Experience </h2>
                        <p className="text-lg leading-8 text-gray-600">What I have done so far</p>              
                    
                    </motion.div>
                </div>
        </motion.div>
        <div className="flex flex-row items-center justify-center w-full z-10">
        
        <VerticalTimeline>
                    {
                    workExperience.map(element => {
                        return (
                            <VerticalTimelineElement
                                visible={true}
                                key={ element.id }
                                className="vertical-timeline-element--work text=[#d1d1d1]-200"
                                contentStyle={element.contentStyle}
                                contentArrowStyle={element.contentArrowStyle}
                                iconStyle={element.iconStyle}
                                icon={<FontAwesomeIcon icon={element.icon} />}
                            >
                            <h1 className="vertical-timeline-element-title tracking-[2.5px]">{element.title}</h1>                           
                            <h2 className="vertical-timeline-element-subtitle tracking-[1.5px] bg-gradient-to-r from-purple-500 to-primary">{element.company}</h2>
                            <ul className='list-disc'>
                                {element.points.map((point, index) => (
                                    <li key={`experience-points-${index}`}
                                        className='experience-points md:text-justify'>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <p className='experience-date text-[13px]'>{element.date}</p>
                            </VerticalTimelineElement>
                        )
                    })
                    }
                </VerticalTimeline>
        </div>        
    </div>
  )
}

export default ExperienceTimeline