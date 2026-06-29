import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react'
import { contact, profile } from '../content.js'
import { SectionHeading } from './WorkEducation.jsx'

const links = [
  {
    id: 'github',
    label: 'GitHub',
    detail: 'See the code behind the dashboards',
    href: (c) => c.github,
    icon: Github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    detail: 'Connect or send a message',
    href: (c) => c.linkedin,
    icon: Linkedin,
  },
  {
    id: 'mail',
    label: 'Email',
    detail: (c) => c.email,
    href: (c) => `mailto:${c.email}`,
    icon: Mail,
  },
  {
    id: 'phone',
    label: 'Call',
    detail: (c) => c.phone,
    href: (c) => `tel:${c.phone.replace(/[^+\d]/g, '')}`,
    icon: Phone,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-accent-deep text-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-white/60 mb-2">
          Get in touch
        </p>
        <h2 className="font-display text-3xl md:text-5xl mb-4 max-w-xl">
          Let's talk about your data.
        </h2>
        <p className="text-white/70 max-w-lg mb-12">
          Open to data analyst, BI developer, and analytics engineering roles. {profile.location} — happy to discuss remote or relocation.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((l) => {
            const Icon = l.icon
            const detail = typeof l.detail === 'function' ? l.detail(contact) : l.detail
            return (
              <a
                key={l.id}
                href={l.href(contact)}
                target={l.id === 'github' || l.id === 'linkedin' ? '_blank' : undefined}
                rel={l.id === 'github' || l.id === 'linkedin' ? 'noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 border border-white/15 rounded-2xl px-6 py-5 hover:bg-white/5 hover:border-white/30 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Icon size={17} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{l.label}</span>
                    <span className="block text-xs text-white/55 mt-0.5">{detail}</span>
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </a>
            )
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs text-white/40">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs text-white/40">Built with React + Tailwind</p>
        </div>
      </div>
    </section>
  )
}
