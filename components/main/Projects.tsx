import React from 'react'
import ProjectComponent from '@/components/sub/ProjectComponent'
import testIMG from '@/public/assets/test.png'
import { projectData } from '@/constants'

const Projects = () => {
  return (
    <div className=''>
      {projectData.map((project) => (
        <ProjectComponent screen={project.image.src} key={project.id}/>
      ))}
      
    </div>
    
  )
}

export default Projects