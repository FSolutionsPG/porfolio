'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Desarrollo Web',
    color: 'from-accent to-cta',
    skills: [
      { name: 'HTML/CSS', level: 92 },
      { name: 'JavaScript', level: 85 },
      { name: 'PHP', level: 75 },
      { name: 'Node.js', level: 72 },
      { name: 'Angular', level: 65 },
    ],
  },
  {
    name: 'SEO & Marketing Digital',
    color: 'from-cta to-accent',
    skills: [
      { name: 'SEO On-Page', level: 90 },
      { name: 'SEO Técnico', level: 88 },
      { name: 'Google Search Console', level: 88 },
      { name: 'Google Analytics', level: 85 },
      { name: 'WordPress / CMS', level: 90 },
    ],
  },
  {
    name: 'Telecomunicaciones & Sistemas',
    color: 'from-accent via-cta to-accent',
    skills: [
      { name: 'Cisco Networking', level: 82 },
      { name: 'Ciberseguridad (CISCO)', level: 78 },
      { name: 'Sistemas Eléctricos', level: 88 },
      { name: 'AutoCAD 3D', level: 80 },
      { name: 'Teleasistencia / Telecom', level: 85 },
    ],
  },
  {
    name: 'Programación & Herramientas',
    color: 'from-cta to-accent',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'SQL', level: 72 },
      { name: 'C++', level: 65 },
      { name: 'UX/UI', level: 75 },
      { name: 'Automatización web', level: 80 },
    ],
  },
]

const techStack = [
  { name: 'WordPress', label: 'CMS' },
  { name: 'Next.js', label: 'Framework' },
  { name: 'JavaScript', label: 'Frontend' },
  { name: 'HTML/CSS', label: 'Web' },
  { name: 'PHP', label: 'Backend' },
  { name: 'Node.js', label: 'Backend' },
  { name: 'Python', label: 'Scripting' },
  { name: 'SQL', label: 'Base de datos' },
  { name: 'CISCO', label: 'Redes' },
  { name: 'AutoCAD', label: 'Diseño' },
  { name: 'SEO Técnico', label: 'Marketing' },
  { name: 'Firebase', label: 'Deploy' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-primary mb-4">
            <span className="gradient-text">Skills & Conocimientos</span>
          </h2>
          <p className="text-text-light max-w-2xl mx-auto text-lg">
            Perfil técnico versátil combinando desarrollo web, telecomunicaciones y marketing digital.
          </p>
        </motion.div>

        {/* Grid de categorías */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="border border-accent/20 rounded-lg p-8 bg-white hover:border-accent/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-xl font-bold font-heading text-primary">{category.name}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: (catIndex + skillIndex) * 0.04 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-light font-semibold text-sm">{skill.name}</span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-light-alt rounded-full h-2.5 overflow-hidden border border-accent/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold font-heading text-primary text-center mb-8">Tecnologías & Herramientas</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group border border-accent/20 rounded-lg p-4 text-center hover:border-accent/50 hover:bg-gradient-to-br hover:from-accent/5 hover:to-cta/5 transition-all cursor-default"
              >
                <div className="font-bold text-primary font-heading text-xs mb-1 group-hover:text-accent transition-colors">
                  {tech.name}
                </div>
                <div className="text-xs text-text-light/50 group-hover:text-text-light/80 transition-colors">
                  {tech.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
