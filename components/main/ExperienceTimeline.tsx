"use client"

import React, { FC } from 'react'
import { workExperience } from '@/constants/index'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import { slideInFromLeft } from '@/utils/motion'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';
import { IconifyIcon } from '@iconify/react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const ExperienceTimeline:FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the event only once
      });

  return (
    <motion.div
        ref={ref}
        className='relative flex flex-col h-full w-full z-10'
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInFromLeft(0.5)}
    >
        <div className='flex flex-row items-center justify-center w-full z-[20]'>
            <div className='mx-auto max-w-2xl sm:text-center'>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Work Experience </h2>
                <p className="text-lg leading-8 text-gray-600">What I have done so far</p>
            </div>
        </div>
        <VerticalTimeline lineColor="">
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
                        icon={element.company === "Foodpanda" ? <Icon icon={element.icon as IconifyIcon} /> : <FontAwesomeIcon icon={element.icon as IconDefinition} />}
                    >
                        <h1 className="vertical-timeline-element-title tracking-[2.5px]">{element.title} &middot; {element.company}</h1>                           
                        {/* <h2 className="vertical-timeline-element-subtitle tracking-[1.5px] bg-gradient-to-r from-purple-500 to-primary">{element.company}</h2> */}
                        <ul className='list-disc'>
                            {element.points.map((point, index) => (
                                <li key={`experience-points-${index}`}
                                    className='font-light text-textBody text-sm'>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p className='experience-date text-light text-textBody'>{element.date}</p>
                    </VerticalTimelineElement>
                )
            })
            }
        </VerticalTimeline>
    </motion.div>
  )
}

export default ExperienceTimeline