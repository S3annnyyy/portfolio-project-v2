import { lazy, Suspense } from 'react'

const About = lazy(() => import('@/components/main/About'))
const ExperienceTimeline = lazy(() => import('@/components/main/ExperienceTimeline')) 
const Footer = lazy(() => import('@/components/main/Footer'))
const Hero = lazy(() => import('@/components/main/Hero'))
const Projects = lazy(() => import('@/components/main/Projects'))
 
export default function Home() {
  return (
    <main className='h-full w-full bg-black overflow-hidden'>
      <div className='flex flex-col gap-20'>
        <div id='home'><Hero /></div>
        <div id='experience'><ExperienceTimeline /></div>
        <div id='projects'><Projects /></div>
        <div id='about'><About /></div>
        <Footer />
      </div>   
    </main>
  )
}
