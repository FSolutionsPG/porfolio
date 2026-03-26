'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-primary"
    >
      {/* Blobs de fondo */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/15 blur-[120px] rounded-full animate-pulse mix-blend-multiply opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cta/10 blur-[120px] rounded-full animate-pulse mix-blend-multiply opacity-30" style={{ animationDelay: '1s' }}></div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/50 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-accent text-sm font-semibold font-heading">🚀 Disponible para proyectos</span>
          </div>
        </motion.div>

        {/* Foto circular con glow */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-cta rounded-full blur-xl opacity-40 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-accent/50 overflow-hidden bg-gradient-to-r from-accent/20 to-cta/20 flex items-center justify-center">
              {/* Placeholder para la foto - reemplazar con tu imagen */}
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src="/foto.jpg"
                  alt="Francisco Pachón"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    // Si la imagen no existe, mostrar un placeholder
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className="absolute w-full h-full bg-gradient-to-br from-accent/30 to-cta/30 flex items-center justify-center text-accent font-heading font-black text-4xl hidden" id="placeholder">
                  FP
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nombre y título */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black mb-4 font-heading tracking-tighter leading-tight"
        >
          <span className="text-text-dark">Francisco</span>
          <br />
          <span className="gradient-text text-5xl md:text-7xl font-black">Pachón Gallardo</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-text-dark/90 mb-6 font-semibold font-heading">
          Founder & CTO | Full-Stack Developer
        </motion.p>

        {/* Descripción */}
        <motion.p variants={itemVariants} className="text-base md:text-lg text-text-dark/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Especializado en desarrollo <span className="text-accent font-semibold">Next.js</span>, automatización de procesos y construcción de soluciones web escalables de alto rendimiento.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 flex-wrap"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 bg-cta text-primary rounded-lg font-bold text-base hover:shadow-lg hover:shadow-cta/40 hover:scale-105 transition-all transform font-heading"
          >
            Contáctame
          </a>
          <a
            href="https://www.linkedin.com/in/fpachongallardo/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-accent text-accent rounded-lg font-bold text-base hover:bg-accent/10 hover:scale-105 transition-all transform font-heading flex items-center gap-2"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/FSolutionsPG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-accent/30 text-text-dark hover:border-accent hover:text-accent rounded-lg font-bold text-base hover:bg-accent/10 hover:scale-105 transition-all transform font-heading flex items-center gap-2"
          >
            <Github size={20} /> GitHub
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-8"
        >
          <div className="flex justify-center text-accent/50 hover:text-accent transition-colors cursor-pointer">
            <ArrowDown className="bounce-arrow" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
