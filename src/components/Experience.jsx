import { useState } from 'react'
import { Circle, CheckCircle2 } from 'lucide-react'
import { experience } from '../content.js'
import { SectionHeading } from './WorkEducation.jsx'

export default function Experience() {
  const [filter, setFilter] = useState('current')
  const filtered = experience.filter((e) => e.status === filter)
  const counts = {
    current: experience.filter((e) => e.status === 'current').length,
    past: experience.filter((e) => e.status === 'past').length,
  }

  return (
    <section id="experience" className="border-b border-hairline">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Track record" title="Experience" />
          <div className="inline-flex items-center gap-1 rounded-full border border-hairline bg-panel p-1">
            {[{ id: 'current', label: 'Current' }, { id: 'past', label: 'Past' }].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors flex items-center gap-1.5 ${
                  filter === f.id ? 'bg-accent text-paper' : 'text-slate hover:text-ink'
                }`}
              >
                {f.label}
                <span className={`font-mono text-[10px] ${filter === f.id ? 'text-paper/80' : 'text-slate/70'}`}>
                  {counts[f.id]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {filtered.map((job) => (
            <article
              key={job.id}
              className="border border-hairline rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: '#071428' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {job.status === 'current'
                      ? <CheckCircle2 size={15} className="text-accent" />
                      : <Circle size={15} className="text-slate" />}
                    <h3 className="font-display text-xl text-ink">{job.role}</h3>
                  </div>
                  <p className="text-sm text-slate ml-[23px]">{job.org}</p>
                </div>
                <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full tabular shrink-0">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2.5 ml-[23px]">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-slate leading-relaxed flex gap-2.5">
                    <span className="text-accent mt-1.5 shrink-0">▪</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}