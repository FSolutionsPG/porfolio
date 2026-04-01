'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Fundador & CEO',
    company: 'FSolutions PG',
    companyUrl: 'https://fsolutionspg.com',
    location: 'Linares, Jaén',
    period: '2024 – Presente',
    current: true,
    description:
      'Agencia de desarrollo web, SEO y automatización de procesos. Gestión técnica y estratégica de proyectos para clientes de distintos sectores. Desarrollo de soluciones web de alto rendimiento con Next.js y WordPress, optimización SEO técnica y local, y automatización de flujos de trabajo.',
    technologies: ['Next.js', 'TypeScript', 'WordPress', 'SEO Técnico', 'SEO Local', 'Automatización'],
  },
  {
    title: 'Desarrollador Web & Especialista SEO',
    company: 'AngelMindSEO',
    location: 'Remoto',
    period: 'Oct 2024 – Mar 2025',
    current: false,
    description:
      'Resolución de problemas técnicos complejos en proyectos web. Implementación de estrategias SEO on-page y técnico. Auditoría y optimización web, automatización de procesos y mejora del rendimiento de sitios web.',
    technologies: ['SEO On-Page', 'SEO Técnico', 'CMS', 'Auditoría Web', 'Automatización'],
  },
  {
    title: 'Técnico de Mantenimiento & Operador CNC',
    company: 'Sistemas SAU S.L.',
    location: 'Linares, Jaén',
    period: 'Jun 2019 – 2024',
    current: false,
    description:
      'Mantenimiento, reparación y puesta a punto de maquinaria industrial. Operación de máquinas CNC. Participación en la confección de sistemas de protección solar con componentes domotizados.',
    technologies: ['CNC', 'Mantenimiento industrial', 'Domótica', 'Sistemas eléctricos'],
  },
  {
    title: 'Técnico en Instalaciones de Telecomunicaciones & Teleasistencia',
    company: 'Cruz Roja Española',
    location: 'Linares, Jaén',
    period: 'Jun 2023 – Sep 2023',
    current: false,
    description:
      'Instalación y configuración de sistemas de comunicación bidireccional y teleasistencia avanzada en domicilios para personas con situaciones de dependencia. Atención directa al usuario y mantenimiento preventivo de equipos.',
    technologies: ['Telecomunicaciones', 'Teleasistencia', 'Atención al usuario', 'Reparación de equipos'],
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
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-primary mb-4">
            <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-text-light max-w-2xl mx-auto text-lg">
            Trayectoria profesional en tecnología, telecomunicaciones y desarrollo web.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {/* Dot + línea vertical */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`flex items-center justify-center h-12 w-12 rounded-full font-bold text-sm font-heading ${exp.current ? 'bg-cta text-primary' : 'bg-accent/20 text-accent border-2 border-accent/40'}`}>
                  {exp.current ? '●' : index + 1}
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 flex-grow mt-2 bg-gradient-to-b from-accent/40 to-transparent min-h-[2rem]" />
                )}
              </div>

              {/* Card */}
              <div className="flex-grow pb-6">
                <div className="glass-light border border-accent/20 rounded-lg p-6 md:p-8 hover:border-accent/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-primary font-heading mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2">
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                            {exp.company}
                          </a>
                        ) : (
                          <span className="text-accent font-semibold">{exp.company}</span>
                        )}
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-cta/20 text-cta text-xs font-bold rounded-full font-heading">Actual</span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-right flex-shrink-0">
                      <div className="flex items-center gap-1 text-text-light/70 text-sm justify-end">
                        <Calendar size={14} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-text-light/50 text-xs justify-end">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-light mb-4 leading-relaxed text-sm md:text-base">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs font-semibold font-heading">
                        {tech}
                      </span>
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
