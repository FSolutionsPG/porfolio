'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Frontend',
    color: 'from-accent to-cta',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 88 },
    ],
  },
  {
    name: 'Backend',
    color: 'from-cta to-accent',
    skills: [
      { name: 'Node.js/Express', level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 90 },
      { name: 'API REST/GraphQL', level: 85 },
    ],
  },
  {
    name: 'DevOps & Tools',
    color: 'from-accent via-cta to-accent',
    skills: [
      { name: 'Vercel/Firebase', level: 95 },
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    name: 'Especialidades',
    color: 'from-cta to-accent',
    skills: [
      { name: 'Automatización (n8n)', level: 92 },
      { name: 'SEO Técnico', level: 90 },
      { name: 'Performance', level: 94 },
      { name: 'Arquitectura', level: 88 },
    ],
  },
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
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-primary mb-4 text-center">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-center text-text-light max-w-2xl mx-auto text-lg">
            Stack tecnológico moderno con experiencia real en producción.
          </p>
        </motion.div>

        {/* Grid de categorías */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="border border-accent/20 rounded-lg p-8 bg-white hover:border-accent/40 transition-all"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`}></div>
                <h3 className="text-2xl font-bold font-heading text-primary">
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: (catIndex + skillIndex) * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {/* Label */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-light font-semibold text-sm">
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Barra de progreso */}
                    <div className="w-full bg-light-alt rounded-full h-2.5 overflow-hidden border border-accent/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold font-heading text-primary text-center mb-8">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: 'Next.js', label: 'Full-Stack' },
              { name: 'React', label: 'Frontend' },
              { name: 'TypeScript', label: 'Lenguaje' },
              { name: 'Node.js', label: 'Backend' },
              { name: 'Tailwind', label: 'CSS' },
              { name: 'PostgreSQL', label: 'DB' },
              { name: 'MongoDB', label: 'DB' },
              { name: 'Vercel', label: 'Deploy' },
              { name: 'n8n', label: 'Automation' },
              { name: 'Git', label: 'Control' },
              { name: 'Docker', label: 'DevOps' },
              { name: 'Firebase', label: 'Backend-as-Service' },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="border border-accent/20 rounded-lg p-4 text-center hover:border-accent/50 hover:bg-gradient-to-br hover:from-accent/5 hover:to-cta/5 transition-all cursor-default">
                  <div className="font-bold text-primary font-heading text-sm mb-1 group-hover:text-accent transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-xs text-text-light/60 group-hover:text-text-light transition-colors">
                    {tech.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
