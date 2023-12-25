import React from 'react'
import { Socials } from '@/constants/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='w-screen flex flex-col text-center md:flex-row justify-between mb-[20px] md:px-20 md:text-xs font-primary text-sm text-textBody mt-5 mb-5'>
        <div>Crafted by yours truly</div>
        <div>&copy; 2023 Yap Cheng Kang Sean.</div>
        <div className='mt-2'>
        {Socials.map((social) => (
                <a href={social.link} key={social.name}><FontAwesomeIcon icon={social.icon} className='mx-4 text-base' /></a>                            
            ))}
        </div>
    </div>
  )
}

export default Footer