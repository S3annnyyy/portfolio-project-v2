import React from 'react'
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons' 

const Sidebar = () => {
    const Socials = [
        {
            name: "linkedin",
            icon: faLinkedin
        },
        {
            name: "github",
            icon: faGithub
        },
        {
            name: "medium",
            icon: faMedium
        },
    ]
  return (
    <div className='w-15 h-screen fixed top-0 left-0 flex flex-col text-white shadow-lg'>
       
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        
        {Socials.map((social) => (
            <FontAwesomeIcon
                icon={social.icon}                
                key={social.name}
                width={24}
                height={24}
          />
        ))}
    </div>
  )
}

export default Sidebar