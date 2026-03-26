'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Cpu, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Desarrollo de aplicaciones web completas con Next.js, React y arquitecturas escalables. Desde el frontend hasta el backend, soluciones custom adaptadas a tus necesidades.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Zap,
    title: 'Optimización & Performance',
    description: 'Mejora de velocidad de carga, Core Web Vitals, y rendimiento general. Análisis profundo y optimizaciones técnicas que impacten directamente en tus conversiones.',
    technologies: ['Lighthouse', 'Web Vitals', 'Image Optimization', 'Code Splitting'],
  },
  {
    icon: Cpu,
    title: 'Automatización de Procesos',
    description: 'Integración de sistemas y automatización RPA. Conecta tus herramientas favoritas y elimina tareas repetitivas para enfocarte en lo que realmente importa.',
    technologies: ['n8n', 'Apify', 'Zapier', 'APIs Custom', 'webhooks'],
  },
  {
    icon: TrendingUp,
    title: 'SEO Técnico & Analytics',
    description: 'Implementación de SEO técnico avanzado, estructuración de datos y análisis profundos. Posicionamiento en Google con estrategias basadas en datos.',
    technologies: ['Schema.org', 'Google Search Console', 'Analytics', 'GTM', 'SEO'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-primary mb-4 text-center">
            <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-center text-text-light max-w-2xl mx-auto text-lg">
            Soluciones tech especializadas para llevar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/5 rounded-lg transition-all duration-300"></div>
                <div className="relative border-2 border-light-alt group-hover:border-accent/50 rounded-lg p-8 transition-all duration-300 bg-white group-hover:bg-light-bg/50 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/10 to-cta/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-cta/20 transition-all">
                      <Icon className="w-7 h-7 text-accent group-hover:text-cta transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-accent/5 border border-accent/30 rounded-full text-accent text-xs font-semibold font-heading group-hover:bg-accent/10 group-hover:border-accent/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
