import { BadgeCheck } from 'lucide-react'
import { certifications } from '../content.js'
import { SectionHeading } from './WorkEducation.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-hairline">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <SectionHeading eyebrow="Verified credentials" title="Certifications" />
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((c) => (
            <div
              key={c.id}
              className="group flex items-start gap-4 rounded-2xl px-5 py-5 transition-all"
              style={{
                backgroundColor: '#071428',
                border: '1px solid #06B6D444',
              }}
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
                style={{ backgroundColor: '#06B6D422' }}
              >
                <BadgeCheck size={18} style={{ color: '#06B6D4' }} />
              </span>
              <div>
                <p className="text-sm font-medium leading-snug" style={{ color: '#E0F2FF' }}>{c.name}</p>
                <p className="font-mono text-xs mt-1" style={{ color: '#06B6D4' }}>{c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}