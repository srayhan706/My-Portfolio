import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Education from './components/Education'
import Experience from './components/Experience'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Contact from './components/Contact'
import Footer from './components/Footer'

const portfolioUrl = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/portfolio`
  : '/portfolio.json'

function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
      <div className="h-10 w-10 rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)] animate-spin" />
      <p className="text-sm text-[var(--color-muted)]">Loading portfolio…</p>
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

  if (loading) return <LoadingScreen />

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-[var(--color-accent)]">Could not load portfolio. Please refresh.</p>
      </div>
    )
  }

  return (
    <>
      <ScrollProgress />
      <Nav resumeHref={data?.contact?.resume} />
      <main>
        <Hero about={data?.about} contact={data?.contact} experience={data?.experience} />
        <Experience experience={data?.experience} />
        <Projects projects={data?.projects} />
        <Skills skills={data?.skills} />
        <Education education={data?.education} />
        <Research research={data?.research} />
        <CompetitiveProgramming competitiveProgramming={data?.competitive_programming} />
        <Contact contact={data?.contact} />
      </main>
      <Footer contact={data?.contact} />
    </>
  )
}
