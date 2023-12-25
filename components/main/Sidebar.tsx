"use client"

import React, { useState, useEffect, FC } from 'react'
import { faHome, faUser, faCode } from '@fortawesome/free-solid-svg-icons' 
import { motion, AnimatePresence } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import SideBarIcon from '@/components/sub/SideBarIcon'

const Sidebar:FC = () => {
  const [activeSection, setActiveSection] = useState<string>('') // set home be default active when activated
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
    return () => window.removeEventListener('scroll', handleScroll)
   })

  return (   
    <AnimatePresence>
        <motion.div 
            className={`w-15 h-screen fixed flex flex-col z-50 ${visible ? 'invisible' : ''}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInFromLeft(0.1)} 
            key={visible ? 'visible' : 'hidden'} // forces react to remount component when value changes -> trigger motion
        >
            <motion.button  whileTap={{ scale: 0.9 }} onClick={() => scrollToSection('home')}>
                <SideBarIcon icon={faHome} text="Home" isActive={activeSection === 'home'} />
            </motion.button>
            <motion.button  whileTap={{ scale: 0.9 }} onClick={() => scrollToSection('experience')}>
                <SideBarIcon icon={faUser} text="Experience" isActive={activeSection === 'experience'} />
            </motion.button>
            <motion.button  whileTap={{ scale: 0.9 }} onClick={() => scrollToSection('projects')}>
                <SideBarIcon icon={faCode} text="Projects" isActive={activeSection === 'projects'} />
            </motion.button>
    </motion.div>
    </AnimatePresence>
  )
}


export default Sidebar