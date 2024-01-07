import About from '@/components/main/About'
import ExperienceTimeline from '@/components/main/ExperienceTimeline'
import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
 
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
