'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, User, Car, Clock, Users } from 'lucide-react'

const competencias = [
  'Resolución de problemas técnicos complejos',
  'Trabajo en equipo y liderazgo colaborativo',
  'Aprendizaje continuo y adaptación ágil',
  'Comunicación técnica con usuarios',
  'Automatización de procesos',
  'Auditoría y optimización web',
]

const formacion = [
  {
    icon: GraduationCap,
    titulo: 'Grado en Ing. de Tecnologías de Telecomunicación',
    centro: 'Universidad de Jaén',
    periodo: 'Sep 2019 – Actualidad',
    estado: 'En curso',
    detalles: ['Cursos de gestión de sistemas CISCO hasta nivel 2', 'Analista junior en Ciberseguridad por CISCO'],
  },
  {
    icon: Award,
    titulo: 'Técnico Superior en Sistemas Eléctricos y Automatizados',
    centro: 'IES Cristo del Rosario · Linares, Jaén',
    periodo: 'Promoción 2013',
    estado: 'Completado',
    detalles: ['Mejor nota del curso', 'Proyecto final: asistencia a usuarios y gestión-resolución de problemas'],
  },
]

const certificaciones = [
  { titulo: 'Introduction to Cybersecurity', entidad: 'CISCO', color: 'text-accent' },
  { titulo: 'Gestión de Sistemas CISCO Nivel 2', entidad: 'CISCO Networking Academy', color: 'text-accent' },
  { titulo: 'Analista Junior en Ciberseguridad', entidad: 'CISCO', color: 'text-accent' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-primary mb-4">
            <span className="gradient-text">Sobre Mí</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Perfil */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-accent to-cta" />
              <h3 className="text-2xl font-bold font-heading text-primary">Perfil Profesional</h3>
            </div>
            <p className="text-text-light leading-relaxed mb-6 text-lg">
              Desarrollador Web y Especialista SEO con base técnica en Ingeniería de Telecomunicaciones.
              Combino conocimientos avanzados en programación con experiencia en instalaciones técnicas y
              automatización de procesos. Orientado a resultados, adaptación rápida y trabajo en equipo
              en cualquier ámbito.
            </p>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-accent to-cta" />
              <h3 className="text-xl font-bold font-heading text-primary">Competencias</h3>
            </div>
            <ul className="space-y-2 mb-6">
              {competencias.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-text-light text-sm">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-cta to-accent" />
              <h3 className="text-lg font-bold font-heading text-primary">Más información</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Car, label: 'Carnet B1 · Vehículo propio' },
                { icon: Clock, label: 'Disponibilidad inmediata' },
                { icon: Users, label: 'Don de gentes' },
                { icon: User, label: 'Fácil adaptación' },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2 text-text-light/70 text-sm border border-accent/15 rounded-lg px-3 py-2 bg-light-bg">
                  <Icon size={14} className="text-accent flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificaciones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-cta to-accent" />
              <h3 className="text-2xl font-bold font-heading text-primary">Certificaciones</h3>
            </div>
            <div className="space-y-3">
              {certificaciones.map((cert, i) => (
                <div key={i} className="flex items-start gap-3 border border-accent/20 rounded-lg p-4 bg-light-bg hover:border-accent/40 transition-all">
                  <Award size={18} className="text-cta flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary text-sm font-heading">{cert.titulo}</p>
                    <p className="text-xs text-text-light/60 mt-0.5">{cert.entidad}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Formación Académica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black font-heading text-primary">
            <span className="gradient-text">Formación Académica</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {formacion.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-accent/20 rounded-lg p-6 md:p-8 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] transition-all bg-white"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-cta/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full font-heading ${item.estado === 'En curso' ? 'bg-cta/20 text-cta' : 'bg-accent/10 text-accent'}`}>
                        {item.estado}
                      </span>
                      <span className="text-xs text-text-light/60 font-medium">{item.periodo}</span>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-primary font-heading mb-1">{item.titulo}</h4>
                <p className="text-accent font-semibold text-sm mb-4">{item.centro}</p>

                <ul className="space-y-1.5">
                  {item.detalles.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-light text-sm">
                      <span className="text-cta mt-1 flex-shrink-0">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
