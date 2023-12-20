import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Socials } from '@/constants/index'
import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons' 

const Sidebar = () => {
    
  return (
    <div className='w-15 h-screen fixed top-0 left-0 flex flex-col justify-between text-white shadow-lg z-50'>
       
        <div>
            <a href="#home"><SideBarIcon icon={faHome} text="Home"/></a>        
            <a href="#projects"><SideBarIcon icon={faCode} text="Projects"/></a>
            <a href="#experience"><SideBarIcon icon={faUser} text="Experience"/></a>
        </div>

        <div>
            {Socials.map((social) => (
                <SideBarIcon
                    icon={social.icon}                
                    text={social.name}                   
            />
            ))}
        </div>
                
        
    </div>
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