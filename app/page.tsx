import ExperienceTimeline from '@/components/main/ExperienceTimeline'
import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import ProjectComponent from '@/components/sub/ProjectComponent'
import testIMG from '@/public/assets/test.png' 

export default function Home() {
  return (
    <main className='h-full w-full bg-black'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <ExperienceTimeline />
        <ProjectComponent screen={testIMG.src}/>
        <Footer />
      </div>   
    </main>
  )
}
