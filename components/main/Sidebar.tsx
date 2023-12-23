"use client"

import React, { useState } from 'react'
import { Socials } from '@/constants/index'
import { faHome, faUser, faCode } from '@fortawesome/free-solid-svg-icons' 
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import SideBarIcon from '@/components/sub/SideBarIcon'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string>('home'); // set home be default active when activated  
  const scrollToSection = (sectionID: string) => {
    const section = document.getElementById(sectionID)
    if (section) {
        section.scrollIntoView({behavior: "smooth"})
        setActiveSection(sectionID);
    }
   }

  return (
    <motion.div initial="hidden" animate="visible" className='w-15 h-screen fixed top-0 left-0 flex flex-col justify-between text-white shadow-lg z-50'>
       
        <motion.div variants={slideInFromLeft(0.3)}>
            <a onClick={() => scrollToSection('home')}>
                <SideBarIcon icon={faHome} text="Home" isActive={activeSection === 'home'} />
            </a>
            <a onClick={() => scrollToSection('experience')}>
                <SideBarIcon icon={faUser} text="Experience" isActive={activeSection === 'experience'} />
            </a>
            <a onClick={() => scrollToSection('projects')}>
                <SideBarIcon icon={faCode} text="Projects" isActive={activeSection === 'projects'} />
            </a>
        </motion.div>            
    </motion.div>
  )
}



export default Sidebar