import { GraduationCap } from 'lucide-react'
import { education } from '../content.js'

export default function WorkEducation() {
  return (
    <section id="work" className="border-b border-hairline">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <SectionHeading eyebrow="Background" title="Education" />
        <div className="mt-12 space-y-6">
          {education.map((ed) => (
            <div key={ed.id} className="border-l-2 border-hairline pl-5">
              <p className="font-mono text-xs text-accent tabular mb-1">{ed.period}</p>
              <h4 className="font-display text-xl text-ink mb-0.5">{ed.school}</h4>
              <p className="text-sm font-medium text-ink mb-2">{ed.credential}</p>
              <p className="text-sm text-slate leading-relaxed">{ed.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-2">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl text-ink">{title}</h2>
    </div>
  )
}