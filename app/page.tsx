'use client'

import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
