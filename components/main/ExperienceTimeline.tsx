"use client"

import React from 'react'
import { workExperience } from '@/constants/index'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const ExperienceTimeline = () => {
  return (
    <div className='relative flex flex-col h-full w-full z-10'>
        <div className="flex flex-row items-center justify-center px-20 mt-10 w-full z-10">
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
                                        className='experience-points text-justify'>
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