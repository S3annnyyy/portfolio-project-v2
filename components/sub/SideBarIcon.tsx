import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBarIcon = ({ icon, text='tooltip', w=24, h=24, isActive=false} : {icon:any, text?:string, w?:number, h?:number, isActive?:boolean}) => {
    return (
        <div className={`sidebar-icon group ${isActive ? 'active' : ''}`}>
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

export default SideBarIcon