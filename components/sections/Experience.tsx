'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Founder & CTO',
    company: 'FSolutions PG',
    location: 'Linares, Jaén',
    period: '2023 - Presente',
    description:
      'Liderazgo técnico y desarrollo de soluciones web a medida. Especialización en arquitecturas escalables, optimización de rendimiento, SEO técnico y automatización de procesos empresariales.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'n8n', 'Vercel'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Proyectos Freelance',
    location: 'Remoto',
    period: '2020 - 2023',
    description:
      'Desarrollo de aplicaciones web y soluciones custom para clientes. Implementación de SEO, automatización de procesos y optimización de conversiones.',
    technologies: ['React', 'Next.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe', 'Google Analytics'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-primary mb-4 text-center">
            <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-center text-text-light max-w-2xl mx-auto text-lg">
            Más de 4 años desarrollando soluciones tech de impacto.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Línea vertical - solo en desktop */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-accent to-transparent hidden md:block"></div>
              )}

              <div className="flex gap-6">
                {/* Dot de timeline */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-primary font-bold text-lg font-heading">
                    {index + 1}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow pb-8 md:pb-12">
                  <div className="glass-light backdrop-blur-md border border-accent/20 rounded-lg p-6 md:p-8 hover:border-accent/40 transition-all">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary font-heading mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-accent">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-text-light/70 text-sm font-medium">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-text-light/60 text-sm mb-4">
                      <MapPin size={16} />
                      {exp.location}
                    </div>

                    {/* Description */}
                    <p className="text-text-light mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent/10 border border-accent/50 rounded-full text-accent text-xs font-semibold font-heading"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
