import { useEffect, useState } from 'react'
import { navLinks } from '../content.js'

export default function Nav() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur border-hairline'
          : 'bg-paper border-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10">
        <nav className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={handleClick('home')}
            className="font-mono text-xs tracking-[0.18em] uppercase text-accent-deep"
          >
            Portfolio
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    active === link.id
                      ? 'text-accent-deep bg-accent-soft'
                      : 'text-slate hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile: compact scrollable nav */}
          <ul className="flex md:hidden items-center gap-1 overflow-x-auto -mx-2 px-2 scrollbar-none">
            {navLinks.map((link) => (
              <li key={link.id} className="shrink-0">
                <a
                  href={`#${link.id}`}
                  onClick={handleClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap ${
                    active === link.id
                      ? 'text-accent-deep bg-accent-soft'
                      : 'text-slate'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
