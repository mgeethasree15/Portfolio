import { skillCategories } from '../content.js'
import { SectionHeading } from './WorkEducation.jsx'

export default function Skills() {
  return (
    <section id="skills" className="border-b border-hairline">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <SectionHeading eyebrow="What I work with" title="Skills" />
        <div className="mt-12 space-y-12">
          {skillCategories.map((cat, ci) => {
            const dots = ['#06B6D4', '#38BDF8', '#0891B2', '#06B6D4']
            const dot = dots[ci % dots.length]
            return (
              <div key={cat.id}>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dot }} />
                  <p className="font-mono text-xs tracking-[0.16em] uppercase" style={{ color: dot }}>
                    {cat.category}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.label}
                      className="group flex flex-col items-center gap-3 rounded-2xl px-4 py-5 hover:scale-105 transition-all duration-200 cursor-default"
                      style={{
                        backgroundColor: '#071428',
                        border: `1px solid ${dot}44`,
                      }}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </span>
                      <span className="text-xs font-semibold text-center leading-tight" style={{ color: '#E0F2FF' }}>
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}