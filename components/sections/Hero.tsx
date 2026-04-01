'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, ExternalLink, ArrowDown, MapPin, Zap } from 'lucide-react'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const roles = [
  'Desarrollador Web & Especialista SEO',
  'Ingeniero de Telecomunicaciones (Finalizando)',
  'Técnico en Telecomunicaciones & Electricidad',
  'Fundador de FSolutions PG',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-primary"
    >
      {/* Blobs de fondo */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/15 blur-[120px] rounded-full animate-pulse mix-blend-multiply opacity-40" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cta/10 blur-[120px] rounded-full animate-pulse mix-blend-multiply opacity-30" style={{ animationDelay: '1s' }} />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge disponibilidad */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <Zap size={14} className="text-cta" />
            <span className="text-accent text-sm font-semibold font-heading">Disponibilidad Inmediata</span>
          </div>
        </motion.div>

        {/* Foto con ring glow */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-cta rounded-full blur-xl opacity-40 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-accent/50 overflow-hidden bg-gradient-to-br from-accent/20 to-cta/20 flex items-center justify-center">
              <Image
                src="/foto.jpg"
                alt="Francisco Pachón Gallardo"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Nombre */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black mb-4 font-heading tracking-tighter leading-tight"
        >
          <span className="text-text-dark">Francisco</span>
          <br />
          <span className="gradient-text">Pachón Gallardo</span>
        </motion.h1>

        {/* Roles en lista — versátil */}
        <motion.div variants={itemVariants} className="mb-6 flex flex-wrap justify-center gap-2">
          {roles.map((role, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs md:text-sm font-semibold font-heading rounded-full glass border border-accent/30 text-text-dark/80 hover:border-accent/60 hover:text-accent transition-all"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Descripción */}
        <motion.p variants={itemVariants} className="text-base md:text-lg text-text-dark/70 max-w-2xl mx-auto mb-4 leading-relaxed">
          Combino base técnica en telecomunicaciones con habilidades avanzadas en programación y marketing digital.
          Orientado a resultados, adaptación rápida y trabajo en equipo.
        </motion.p>

        {/* Localización */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-1 text-text-dark/50 text-sm mb-10">
          <MapPin size={14} />
          <span>Linares, Jaén · España</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 bg-cta text-primary rounded-lg font-bold text-base hover:shadow-lg hover:shadow-cta/40 hover:scale-105 transition-all font-heading"
          >
            Contactar
          </a>
          <a
            href="https://www.linkedin.com/in/fpachongallardo/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-accent text-accent rounded-lg font-bold text-base hover:bg-accent/10 hover:scale-105 transition-all font-heading flex items-center gap-2"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://fsolutionspg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-accent/30 text-text-dark hover:border-accent hover:text-accent rounded-lg font-bold text-base hover:bg-accent/10 hover:scale-105 transition-all font-heading flex items-center gap-2"
          >
            <ExternalLink size={18} /> FSolutions PG
          </a>
          <a
            href="https://github.com/FSolutionsPG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-accent/20 text-text-dark/60 hover:border-accent/50 hover:text-accent/80 rounded-lg font-bold text-base hover:bg-accent/5 hover:scale-105 transition-all font-heading flex items-center gap-2"
          >
            <Github size={18} /> GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-12"
        >
          <ArrowDown className="w-5 h-5 mx-auto text-accent/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
