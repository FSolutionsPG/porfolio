'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: 'Servicios', href: '#services' },
      { name: 'Proyectos', href: '#projects' },
      { name: 'Skills', href: '#skills' },
    ],
    company: [
      { name: 'FSolutions PG', href: 'https://fsolutionspg.com', external: true },
      { name: 'Blog', href: '#', external: false },
      { name: 'Contacto', href: '#contact' },
    ],
    social: [
      { name: 'GitHub', icon: Github, href: 'https://github.com/FSolutionsPG' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/fpachongallardo/' },
      { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/FPachonGallardo' },
    ],
  }

  return (
    <footer className="bg-black/40 border-t border-accent/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="#home" className="inline-block mb-4">
              <div className="text-2xl font-black gradient-text font-heading">
                fpg
              </div>
            </Link>
            <p className="text-text-dark/60 text-sm leading-relaxed">
              Full-Stack Developer & Founder of FSolutions PG. Buildingtech solutions with impact.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-text-dark mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-dark/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-text-dark mb-4 text-sm uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-text-dark/60 hover:text-accent text-sm transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    {link.external && <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-text-dark mb-4 text-sm uppercase tracking-wider">
              Social
            </h3>
            <ul className="space-y-3">
              {links.social.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-dark/60 hover:text-accent transition-colors flex items-center gap-2 group text-sm"
                    >
                      <Icon size={16} className="group-hover:scale-110 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 py-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-dark/60 text-sm text-center md:text-left">
            © {currentYear} Francisco Pachón. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-dark/60 hover:text-accent text-xs transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-text-dark/60 hover:text-accent text-xs transition-colors">
              Términos
            </a>
            <a href="#" className="text-text-dark/60 hover:text-accent text-xs transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
