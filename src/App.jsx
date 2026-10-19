import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Connect from './components/Connect'
import Footer from './components/Footer'

const portfolioUrl = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/portfolio`
  : '/portfolio.json'

function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 px-6">
      <div className="h-1 w-40 overflow-hidden rounded-full bg-black/10">
        <div className="h-full w-1/2 rounded-full bg-[var(--color-teal)] animate-[loader_1.1s_ease-in-out_infinite]" />
      </div>
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">Loading</p>
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
        <p className="font-medium">Could not load portfolio. Please refresh.</p>
      </div>
    )
  }

  return (
    <>
      <Nav name={data?.about?.name} email={data?.contact?.email} />
      <main>
        <Hero about={data?.about} contact={data?.contact} experience={data?.experience} skills={data?.skills} />
        <Mission about={data?.about} skills={data?.skills} />
        <Skills skills={data?.skills} />
        <Projects projects={data?.projects} githubHref={data?.contact?.github} />
        <Research research={data?.research} />
        <Experience
          experience={data?.experience}
          education={data?.education}
          competitiveProgramming={data?.competitive_programming}
          resume={data?.contact?.resume}
        />
        <Contact contact={data?.contact} />
        <Connect contact={data?.contact} />
      </main>
      <Footer name={data?.about?.name} contact={data?.contact} />
    </>
  )
}
