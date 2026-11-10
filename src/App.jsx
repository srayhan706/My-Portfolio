import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Research from './components/Research'
import Skills from './components/Skills'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { asList, pad } from './utils/format'

const portfolioUrl = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/portfolio`
  : '/portfolio.json'

// Page order. `nav: false` keeps a section out of the header links.
const SECTIONS = [
  { id: 'about', label: 'About', has: (d) => asList(d.about?.summary).length > 0 },
  { id: 'experience', label: 'Experience', has: (d) => asList(d.experience).length + asList(d.education).length > 0 },
  { id: 'projects', label: 'Projects', has: (d) => d.projects?.length > 0 },
  { id: 'research', label: 'Research', has: (d) => Boolean(d.research) },
  { id: 'skills', label: 'Skills', has: (d) => Boolean(d.skills) },
  { id: 'leadership', label: 'Leadership', nav: false, has: (d) => Boolean(d.leadership || d.competitive_programming) },
  { id: 'contact', label: 'Contact', has: (d) => Boolean(d.contact) },
]

function LoadingScreen() {
  return (
    <div role="status" className="flex min-h-screen flex-col items-center justify-center gap-5 px-6">
      <div className="h-0.5 w-40 overflow-hidden rounded-full bg-line">
        <div className="h-full w-1/2 rounded-full bg-accent animate-[loader_1.1s_ease-in-out_infinite]" />
      </div>
      <p className="eyebrow">Loading</p>
    </div>
  )
}

export default function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(portfolioUrl)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to fetch portfolio')
        return r.json()
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  // Sections render only after the fetch, so honour a deep link (e.g. /#research) once they exist.
  useEffect(() => {
    if (!data || !window.location.hash) return
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
  }, [data])

  if (loading) return <LoadingScreen />

  if (error || !data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
        <p className="font-medium">Could not load the portfolio.</p>
        <button type="button" onClick={() => window.location.reload()} className="btn btn-primary">
          Try again
        </button>
      </div>
    )
  }

  // Number only the sections that have content, so the labels never skip.
  const sections = SECTIONS.filter((s) => s.has(data)).map((s, i) => ({ ...s, index: pad(i + 1) }))
  const index = Object.fromEntries(sections.map((s) => [s.id, s.index]))
  const role = asList(data.experience)[0]?.role ?? data.about?.title

  return (
    <>
      <Nav name={data.about?.name} links={sections.filter((s) => s.nav !== false)} resume={data.contact?.resume} />
      <main id="main">
        <Hero about={data.about} contact={data.contact} experience={data.experience} education={data.education} skills={data.skills} />
        <About index={index.about} about={data.about} contact={data.contact} />
        <Experience index={index.experience} experience={data.experience} education={data.education} />
        <Projects index={index.projects} projects={data.projects} githubHref={data.contact?.github} />
        <Research index={index.research} research={data.research} />
        <Skills index={index.skills} skills={data.skills} />
        <Leadership index={index.leadership} leadership={data.leadership} competitiveProgramming={data.competitive_programming} />
        <Contact index={index.contact} contact={data.contact} />
      </main>
      <Footer name={data.about?.name} role={role} />
    </>
  )
}
