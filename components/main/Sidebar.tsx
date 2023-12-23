"use client"

import React, { useState, useEffect } from 'react'
import { faHome, faUser, faCode } from '@fortawesome/free-solid-svg-icons' 
import { motion, AnimatePresence } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import SideBarIcon from '@/components/sub/SideBarIcon'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string>('home') // set home be default active when activated
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);  
  const [visible, setVisible] = useState<boolean>(true)

  const scrollToSection = (sectionID: string) => {
    const section = document.getElementById(sectionID)
    if (section) {
        section.scrollIntoView({behavior: "smooth"})
        setActiveSection(sectionID);
    }
   }

   const handleScroll = () => {
    const currScrollPos = window.scrollY
    if (currScrollPos > prevScrollPos) {        
        setVisible(false)
    } else {
        setVisible(true)
    }
    setPrevScrollPos(currScrollPos)
   }

   useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // return () => window.removeEventListener('scroll', handleScroll)
   })

  return (
    <div className='w-15 h-screen fixed top-0 left-0 flex flex-col justify-between text-white shadow-lg z-50'>
        <AnimatePresence>     
            <motion.div
                initial="hidden" 
                animate="visible"
                // exit="exit"
                variants={slideInFromLeft(0.1)}                 
                className={visible ? 'invisible' : ''}
                key={visible ? 'visible' : 'hidden'} // forces react to remount component when value changes -> trigger motion                           
            >
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
        </AnimatePresence>              
    </div>
  )
}



export default Sidebar