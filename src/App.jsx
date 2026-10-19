import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Experience from './components/Experience'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Contact from './components/Contact'
import Footer from './components/Footer'

const portfolioUrl = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/portfolio`
  : '/portfolio.json'

function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-white px-6">
      <div className="h-1 w-40 overflow-hidden rounded-full bg-[var(--color-line)]">
        <div className="h-full w-1/2 rounded-full bg-[var(--color-ink)] animate-[loader_1.1s_ease-in-out_infinite]" />
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">Loading</p>
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

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="font-semibold">Could not load portfolio. Please refresh.</p>
      </div>
    )
  }

  const availability = data?.about?.availability ?? 'Open to Opportunities'

  return (
    <>
      <ScrollProgress />
      <Nav data={data} availability={availability} />
      <main>
        <Hero about={data?.about} contact={data?.contact} />
        <Projects projects={data?.projects} githubHref={data?.contact?.github} />
        <Skills skills={data?.skills} />
        <Experience experience={data?.experience} education={data?.education} />
        <Research research={data?.research} />
        <CompetitiveProgramming competitiveProgramming={data?.competitive_programming} />
        <Contact contact={data?.contact} name={data?.about?.name} availability={availability} />
      </main>
      <Footer name={data?.about?.name} contact={data?.contact} />
    </>
  )
}
