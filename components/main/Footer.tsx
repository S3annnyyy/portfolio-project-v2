import React from 'react'
import { Socials } from '@/constants/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='w-screen flex flex-col text-center md:flex-row justify-between mb-[20px] md:px-20 text-base md:text-xs text-white mt-5 mb-5'>
        <div>Crafted by yours truly</div>
        <div>&copy; 2023 Yap Cheng Kang Sean.</div>
        <div>
        {Socials.map((social) => (
                <a href={social.link} key={social.name}><FontAwesomeIcon icon={social.icon} className='mx-4 text-xl' /></a>                            
            ))}
        </div>
    </div>
  )
}

export default Footer