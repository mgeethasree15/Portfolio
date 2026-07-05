import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile, roleFilters, contact, skills } from '../content.js'

function useTypewriter(text, speed, delay) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    let i = 0
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) clearInterval(iv)
      }, speed)
      return () => clearInterval(iv)
    }, delay)
    return () => clearTimeout(t)
  }, [text])
  return displayed
}

export default function Hero() {
  const [role, setRole] = useState(roleFilters[0].id)
  const typedName = useTypewriter(profile.name, 70, 300)
  const typedRole = useTypewriter(profile.roleHeadlines[role], 50, 300)

  return (
    <section id="home" className="relative grid-canvas border-b border-hairline">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex flex-col items-center text-center">
          <div role="tablist" className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full p-1 mb-8" style={{border:'1px solid #0D2540',backgroundColor:'#071428'}}>
            {roleFilters.map((r) => (
              <button key={r.id} onClick={() => setRole(r.id)} className="px-4 py-1.5 text-sm font-medium rounded-full transition-colors" style={{backgroundColor:role===r.id?'#06B6D4':'transparent',color:role===r.id?'#030B1A':'#7BA8C4'}}>
                {r.label}
              </button>
            ))}
          </div>
          <div className="relative mb-6">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden" style={{border:'3px solid #06B6D4',boxShadow:'0 0 30px #06B6D455'}}>
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{backgroundColor:'#071428'}}>
                  <span className="font-mono text-xs" style={{color:'#7BA8C4'}}>photo.jpg</span>
                </div>
              )}
            </div>
            <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-400 border-2" style={{borderColor:'#030B1A'}} />
          </div>
          <h1 className="font-display text-5xl md:text-6xl mb-2" style={{color:'#E0F2FF'}}>
            {typedName}<span style={{color:'#06B6D4',animation:'blink 1s step-end infinite'}}>|</span>
          </h1>
          <p className="font-display italic text-xl md:text-2xl mb-2" style={{color:'#06B6D4'}}>
            {typedRole}<span style={{color:'#06B6D4',animation:'blink 1s step-end infinite'}}>|</span>
          </p>
          <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{color:'#7BA8C4'}}>{profile.location} · Available for opportunities</p>
          <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{color:'#7BA8C4'}}>{profile.summary}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" onClick={(e)=>{e.preventDefault();document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full" style={{backgroundColor:'#06B6D4',color:'#030B1A'}}>
              View projects <ArrowDown size={15} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{border:'1px solid #0D2540',color:'#7BA8C4'}}><Linkedin size={17} /></a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{border:'1px solid #0D2540',color:'#7BA8C4'}}><Github size={17} /></a>
            <a href={'mailto:'+contact.email} className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{border:'1px solid #0D2540',color:'#7BA8C4'}}><Mail size={17} /></a>
          </div>
        </div>
        <div className="mt-16 -mx-6 md:-mx-10 overflow-hidden">
          <div className="flex">
            <div className="flex gap-4 whitespace-nowrap" style={{animation:'train 18s linear infinite'}}>
              {[...skills,...skills,...skills].map((s,i) => (
                <span key={i} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shrink-0" style={{backgroundColor:'#071428',border:'1px solid #06B6D444',color:'#E0F2FF'}}>
                  <span>{s.icon}</span>{s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes train{0%{transform:translateX(0)}100%{transform:translateX(-33.333%)}}
      `}</style>
    </section>
  )
}
