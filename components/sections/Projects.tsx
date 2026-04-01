'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'FSolutions PG',
    url: 'https://fsolutionspg.com',
    description:
      'Agencia propia de desarrollo web, SEO y automatización de procesos. Diseñada con arquitectura de alto rendimiento, Next.js App Router y estrategia SEO técnica avanzada. El proyecto que engloba el trabajo para todos los clientes.',
    metrics: [
      { label: 'Core Web Vitals', value: '100/100' },
      { label: 'Stack', value: 'Next.js' },
      { label: 'Deploy', value: 'Firebase' },
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'SEO Técnico'],
    badge: 'Proyecto Propio',
    badgeColor: 'bg-cta/20 text-cta',
  },
  {
    title: 'Dang3r.es',
    url: 'https://dang3r.es',
    description:
      'Plataforma de branding visual con diseño agresivo y rendimiento extremo. Optimización WPO avanzada que redujo el tiempo de carga de 4.2s a 0.8s, con impacto directo en posicionamiento orgánico y conversiones.',
    metrics: [
      { label: 'Tiempo de carga', value: '0.8s' },
      { label: 'Tráfico orgánico', value: '+280%' },
      { label: 'Conversiones', value: '+145%' },
    ],
    tech: ['WordPress', 'Elementor Pro', 'WPO', 'SEO Técnico', 'Google Analytics'],
    badge: 'Cliente FSolutions',
    badgeColor: 'bg-accent/10 text-accent',
  },
  {
    title: 'Medical Linares',
    url: 'https://medicallinares.es',
    description:
      'Portal clínico con presencia digital de autoridad en búsquedas locales. Implementación de SEO local especializado que llevó al cliente de la posición 18 a la posición 2 en Google, con sistema de reservas automatizado.',
    metrics: [
      { label: 'Posición Google Local', value: 'Pos. #2' },
      { label: 'Contactos mensuales', value: '+320%' },
      { label: 'Horas ahorradas/sem', value: '12h' },
    ],
    tech: ['WordPress', 'SEO Local', 'Google Business', 'Sistema de reservas', 'Schema.org'],
    badge: 'Cliente FSolutions',
    badgeColor: 'bg-accent/10 text-accent',
  },
  {
    title: 'Eventos VPJ',
    url: 'https://eventosvpj.com',
    description:
      'Plataforma dinámica de eventos con filtros geográficos y escalable sin límite. Posicionamiento estratégico en palabras clave de alto valor que llevó al cliente del puesto 42 al puesto 3 en Google en 6 meses.',
    metrics: [
      { label: 'Posición Google', value: 'Pos. #3' },
      { label: 'Tráfico mensual', value: '+450%' },
      { label: 'Horas ahorradas/sem', value: '18h' },
    ],
    tech: ['WordPress', 'JetEngine', 'Filtros dinámicos', 'SEO Técnico', 'Google Search Console'],
    badge: 'Cliente FSolutions',
    badgeColor: 'bg-accent/10 text-accent',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      {/* Blobs decorativos */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full mix-blend-multiply opacity-30" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-cta/8 blur-[120px] rounded-full mix-blend-multiply opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-text-dark mb-4">
            <span className="gradient-text">Proyectos Reales</span>
          </h2>
          <p className="text-text-dark/70 max-w-2xl mx-auto text-lg">
            Resultados medibles en proyectos de clientes reales.
          </p>
        </motion.div>

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
              <div className="glass border border-accent/30 group-hover:border-accent/60 rounded-lg p-8 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,212,255,0.12)]">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <h3 className="text-2xl font-bold text-text-dark font-heading">{project.title}</h3>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full font-heading ${project.badgeColor}`}>
                            {project.badge}
                          </span>
                        </div>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent/60 hover:text-accent text-sm flex items-center gap-1 transition-colors"
                        >
                          {project.url.replace('https://', '')}
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>

                    <p className="text-text-dark/70 leading-relaxed mb-5 text-sm md:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs font-bold font-heading group-hover:bg-accent/15 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Métricas */}
                  <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
                    {project.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="glass border border-accent/30 p-4 rounded-lg text-center group-hover:border-cta/40 group-hover:bg-cta/5 transition-all"
                      >
                        <div className="text-2xl font-bold text-accent font-heading mb-1">
                          {metric.value}
                        </div>
                        <div className="text-text-dark/50 text-xs leading-tight">{metric.label}</div>
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
