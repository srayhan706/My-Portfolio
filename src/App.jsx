import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Education from './components/Education'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Use FastAPI when VITE_API_URL is set (e.g. production with backend); otherwise static JSON
const portfolioUrl = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/portfolio`
  : '/portfolio.json'

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-amber-400">Could not load portfolio.</p>
      </div>
    )
  }

  return (
    <>
      <Nav />
      <Hero about={data?.about} />
      <Skills skills={data?.skills} />
      <Projects projects={data?.projects} />
      <Research research={data?.research} />
      <Education education={data?.education} />
      <CompetitiveProgramming competitiveProgramming={data?.competitive_programming} />
      <Contact contact={data?.contact} />
      <Footer />
    </>
  )
}
