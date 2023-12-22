import React from 'react'
import ProjectComponent from '@/components/sub/ProjectComponent'
import { projectData } from '@/constants'

const Projects = () => {
  return (
    <div className=''>
      <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h2>
            <p className="text-lg leading-8 text-gray-600">Collections of some interesting projects I did over the years</p>              
      </div>
      {projectData.map((project) => (        
        
        <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{project.title}</h2>            
            <p className="mt-6 text-lg leading-8 text-gray-300">{project.description}</p>             
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">              
              <a href={project.urlLink} className="text-sm font-semibold leading-6 text-white z-[20]">
                View Project <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl text-center lg:flex lg:flex-col lg:justify-center">
                <div className="mx-auto max-w-xs px-8">
                  <ProjectComponent screen={project.image.src} key={project.id} />
                </div>
              </div>
            </div>
        </div>
      </div>      
      
      ))}
      
    </div>
    
  )
}

export default Projects