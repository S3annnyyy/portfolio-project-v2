"use client"

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Socials } from '@/constants/index'
import { faHome, faUser, faCode } from '@fortawesome/free-solid-svg-icons' 
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const Sidebar = () => {
    
  return (
    <motion.div initial="hidden" animate="visible" className='w-15 h-screen fixed top-0 left-0 flex flex-col justify-between text-white shadow-lg z-50'>
       
        <motion.div variants={slideInFromLeft(0.3)}>
            <a href="#home"><SideBarIcon icon={faHome} text="Home"/></a>        
            <a href="#projects"><SideBarIcon icon={faCode} text="Projects"/></a>
            <a href="#experience"><SideBarIcon icon={faUser} text="Experience"/></a>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.3)}>
            {Socials.map((social) => (
                <a href={social.link}><SideBarIcon icon={social.icon} text={social.name} /></a>                            
            ))}
        </motion.div>               
    </motion.div>
  )
}

const SideBarIcon = ({ icon, text='tooltip', w=24, h=24} : {icon:any, text?:string, w?:number, h?:number}) => {
    return (
        <div className='sidebar-icon group'>
            <FontAwesomeIcon
                icon={icon}
                width={w}
                height={h}
            />

            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )    
}

export default Sidebar