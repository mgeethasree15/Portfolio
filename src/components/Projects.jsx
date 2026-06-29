import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Github } from 'lucide-react'
import { projects } from '../content.js'
import { SectionHeading } from './WorkEducation.jsx'

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [modal, setModal] = useState(false)
  const [dir, setDir] = useState(1)
  const [animating, setAnimating] = useState(false)

  const go = (next) => {
    if (animating) return
    setDir(next > current ? 1 : -1)
    setAnimating(true)
    setTimeout(() => { setCurrent(next); setAnimating(false) }, 300)
  }

  const prev = () => go(current === 0 ? projects.length - 1 : current - 1)
  const next = () => go(current === projects.length - 1 ? 0 : current + 1)
  const p = projects[current]

  return (
    <section id="projects" className="border-b border-hairline">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHeading eyebrow="Selected work" title="Projects" />
          <span className="font-mono text-sm tabular" style={{ color: '#7BA8C4' }}>
            {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl" style={{ backgroundColor: '#071428', border: '1px solid #06B6D433' }}>
          <div className="transition-all duration-300" style={{ opacity: animating ? 0 : 1, transform: animating ? `translateX(${dir * 40}px)` : 'translateX(0)' }}>
            <div className="p-8 md:p-12">
              <p className="font-display text-[5rem] leading-none select-none mb-2" style={{ color: '#0D2540' }}>
                {String(current + 1).padStart(2, '0')}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-full" style={{ color: '#06B6D4', backgroundColor: '#06B6D422' }}>
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-3" style={{ color: '#E0F2FF' }}>{p.title}</h3>
              <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: '#7BA8C4' }}>{p.summary}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[{ label: 'Problem', text: p.problem }, { label: 'Result', text: p.result }].map((s) => (
                  <div key={s.label} className="rounded-xl p-5" style={{ backgroundColor: '#0D2540' }}>
                    <p className="font-mono text-[10px] uppercase tracking-wide mb-2" style={{ color: '#06B6D4' }}>{s.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#7BA8C4' }}>{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setModal(true)} className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-colors" style={{ backgroundColor: '#06B6D4', color: '#030B1A' }}>
                  Full case study →
                </button>
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-colors" style={{ border: '1px solid #06B6D444', color: '#E0F2FF' }}>
                    <Github size={15} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
          <button onClick={prev} className="absolute left-4 top-8 w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: '#0D2540', border: '1px solid #06B6D433', color: '#E0F2FF' }}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="absolute right-4 top-8 w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: '#0D2540', border: '1px solid #06B6D433', color: '#E0F2FF' }}>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button key={i} onClick={() => go(i)} className="rounded-full transition-all" style={{ width: i === current ? '24px' : '8px', height: '8px', backgroundColor: i === current ? '#06B6D4' : '#0D2540' }} />
          ))}
        </div>
      </div>
      {modal && <ProjectModal project={p} onClose={() => setModal(false)} />}
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  const stages = [
    { label: 'Problem', text: project.problem },
    { label: 'Approach', text: project.approach },
    { label: 'How I solved it', text: project.solution },
    { label: 'Result', text: project.result, image: project.resultImage },
  ]
  return (
    <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center backdrop-blur-sm p-4 md:p-8 overflow-y-auto" style={{ backgroundColor: '#030B1Aaa' }} onClick={onClose}>
      <div className="rounded-2xl max-w-2xl w-full my-8 md:my-0" style={{ backgroundColor: '#071428', border: '1px solid #06B6D433' }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 p-7 md:p-9 pb-0">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-full" style={{ color: '#06B6D4', backgroundColor: '#06B6D422' }}>{t}</span>
              ))}
            </div>
            <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#E0F2FF' }}>{project.title}</h3>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid #06B6D433', color: '#E0F2FF' }}>
            <X size={17} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 px-7 md:px-9 pt-4 pb-6" style={{ borderBottom: '1px solid #06B6D422' }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full" style={{ border: '1px solid #06B6D444', color: '#E0F2FF' }}>
              <Github size={14} /> GitHub
            </a>
          )}
        </div>
        <div className="p-7 md:p-9 space-y-6">
          {stages.map((s, i) => (
            <div key={s.label} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <span className="w-7 h-7 rounded-full font-mono text-xs flex items-center justify-center" style={{ backgroundColor: '#06B6D422', color: '#06B6D4' }}>{i + 1}</span>
                {i < stages.length - 1 && <span className="w-px flex-1 mt-1" style={{ backgroundColor: '#0D2540' }} />}
              </div>
              <div className="pb-1 flex-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] mb-1.5" style={{ color: '#06B6D4' }}>{s.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#7BA8C4' }}>{s.text}</p>
                {s.image && <div className="mt-4 rounded-xl overflow-hidden" style={{ border: '1px solid #06B6D433' }}><img src={s.image} alt="" className="w-full object-cover" /></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}