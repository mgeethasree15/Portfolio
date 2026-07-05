import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WorkEducation from './components/WorkEducation.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/certifications.jsx'
import LemonPhrase from './components/Lemonphrase.jsx'
import Contact from './components/Contact.jsx'
import CursorFx from './components/CursorFx.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <CursorFx />
      <Nav />
      <main>
        <Hero />
        <WorkEducation />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <LemonPhrase />
        <Contact />
      </main>
    </div>
  )
}