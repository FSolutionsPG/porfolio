'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fpachongallardo@gmail.com',
    href: 'mailto:fpachongallardo@gmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+34 627 916 693',
    href: 'tel:+34627916693',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '@fpachongallardo',
    href: 'https://www.linkedin.com/in/fpachongallardo/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@FSolutionsPG',
    href: 'https://github.com/FSolutionsPG',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      {/* Blobs decorativos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full mix-blend-multiply opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cta/8 blur-[120px] rounded-full mix-blend-multiply opacity-25"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-text-dark mb-4">
            ¿Listo para colaborar?
          </h2>
          <p className="text-text-dark/70 max-w-2xl mx-auto text-lg">
            Estoy disponible para proyectos, consultoría y colaboraciones. Ponte en contacto conmigo a través de cualquiera de estos canales.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : '_blank'}
                rel={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block"
              >
                <div className="glass border border-accent/30 group-hover:border-accent/60 rounded-lg p-6 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] hover:translate-y-[-4px]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-cta/20 group-hover:from-accent/30 group-hover:to-cta/30 transition-all">
                        <Icon className="w-6 h-6 text-accent group-hover:text-cta transition-colors" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-text-dark font-heading mb-1 group-hover:text-accent transition-colors">
                        {method.label}
                      </h3>
                      <p className="text-text-dark/70 font-medium text-sm group-hover:text-accent/80 transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-accent/0 group-hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-accent/10 to-cta/10 border border-accent/30 rounded-lg p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-dark mb-4">
            ¿Necesitas un equipo tech confiable?
          </h3>
          <p className="text-text-dark/70 mb-8 text-lg max-w-2xl mx-auto">
            Además de mi trabajo personal, en <span className="font-semibold text-accent">FSolutions PG</span> tenemos un equipo especializado en soluciones web y automatización.
          </p>
          <a
            href="https://fsolutionspg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-cta text-primary rounded-lg font-bold text-base hover:shadow-lg hover:shadow-cta/40 hover:scale-105 transition-all transform font-heading"
          >
            Visita FSolutions PG
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
