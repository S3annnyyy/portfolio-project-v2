import ExperienceTimeline from '@/components/main/ExperienceTimeline'
import Hero from '@/components/main/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-full w-full bg-black'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <ExperienceTimeline />
      </div>   
    </main>
  )
}
