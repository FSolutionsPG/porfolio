'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Dang3r.es',
    description:
      'Plataforma de branding visual con arquitectura optimizada y SEO avanzado. Resultados excepcionales en posicionamiento orgánico y velocidad de carga.',
    metrics: [
      { label: 'Incremento tráfico', value: '+280%' },
      { label: 'Velocidad carga', value: '0.8s' },
      { label: 'Performance score', value: '98/100' },
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: '#',
  },
  {
    title: 'Eventos VPJ',
    description:
      'Plataforma dinámica de eventos con enfoque en SEO. Posicionamiento estratégico en palabras clave comerciales de alto valor y optimización de conversiones.',
    metrics: [
      { label: 'Posición Google', value: '#3' },
      { label: 'Conversiones', value: '+450%' },
      { label: 'Tiempo sesión', value: '4m 32s' },
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'GSC'],
    link: '#',
  },
  {
    title: 'ADS Creaciones',
    description:
      'E-commerce personalizado de regalos con optimización de conversión. Solución integral de desarrollo técnico y estrategia de marketing digital.',
    metrics: [
      { label: 'Conversión', value: '+89%' },
      { label: 'Ingresos mensuales', value: '€3.2k' },
      { label: 'AOV', value: '+€45' },
    ],
    tech: ['WooCommerce', 'Next.js', 'Stripe', 'Analytics'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      {/* Blobs decorativos */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full mix-blend-multiply opacity-30"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-cta/8 blur-[120px] rounded-full mix-blend-multiply opacity-25" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-text-dark mb-4 text-center">
            <span className="gradient-text">Proyectos Destacados</span>
          </h2>
          <p className="text-center text-text-dark/70 max-w-2xl mx-auto text-lg">
            Trabajos que demuestran impacto real en resultados de negocio.
          </p>
        </motion.div>

        {/* Proyectos */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass border border-accent/30 group-hover:border-accent/60 rounded-lg p-8 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-text-dark font-heading mb-2">
                          {project.title}
                        </h3>
                        <p className="text-text-dark/70 leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>
                      <a
                        href={project.link}
                        className="flex-shrink-0 p-2 hover:bg-accent/20 rounded-lg transition-colors"
                        aria-label="Ver proyecto"
                      >
                        <ExternalLink size={20} className="text-accent" />
                      </a>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent/15 border border-accent/40 rounded-full text-accent text-xs font-bold font-heading group-hover:bg-accent/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="glass border border-accent/30 p-4 rounded-lg text-center group-hover:border-cta/50 group-hover:bg-cta/5 transition-all"
                      >
                        <div className="text-2xl md:text-3xl font-bold text-accent font-heading mb-1">
                          {metric.value}
                        </div>
                        <div className="text-text-dark/60 text-xs leading-tight">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
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
