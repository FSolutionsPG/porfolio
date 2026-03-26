'use client'

import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Experience />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
