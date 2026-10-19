import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'
import { ArrowUpRight } from './ui/Icons'

const FRONTEND = ['next.js', 'react', 'react.js', 'javascript']

function categoryOf(project) {
  if (project.category) return project.category
  const tech = (project.tech ?? []).map((t) => t.toLowerCase())
  if (tech.some((t) => t.includes('socket'))) return 'Systems'
  if (tech.some((t) => FRONTEND.includes(t))) return 'Full-stack'
  return 'Backend'
}

function Cover({ project, index }) {
  const dark = index % 2 === 0
  const [headline, ...rest] = project.title.split(/\s[—-]\s/)
  const subtitle = rest.join(' — ') || project.description

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden ${
        dark ? 'bg-[#141414] text-white' : 'bg-[#e9e9e9] text-[var(--color-ink)]'
      }`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 opacity-60 ${
          dark
            ? 'bg-[radial-gradient(circle_at_75%_120%,rgba(255,255,255,0.22),transparent_55%)]'
            : 'bg-[radial-gradient(circle_at_20%_-10%,rgba(255,255,255,0.95),transparent_55%)]'
        }`}
      />
      {/* faux browser window */}
      <div
        className={`absolute inset-x-[8%] top-[16%] bottom-[-6%] rounded-t-xl border transition-transform duration-700 ease-out-expo group-hover:-translate-y-2 group-hover:scale-[1.02] ${
          dark ? 'border-white/10 bg-white/[0.04]' : 'border-black/10 bg-white/70'
        }`}
      >
        <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${dark ? 'border-white/10' : 'border-black/10'}`}>
          {[0, 1, 2].map((d) => (
            <span key={d} className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-white/30' : 'bg-black/20'}`} />
          ))}
          <span className={`ml-3 h-1.5 w-1/3 rounded-full ${dark ? 'bg-white/10' : 'bg-black/10'}`} />
        </div>
        <div className="px-[7%] pt-[6%]">
          <p className="text-[clamp(1.1rem,2.6vw,1.9rem)] font-bold leading-tight tracking-tight line-clamp-1">
            {headline}
          </p>
          <p className={`mt-1.5 text-[11px] sm:text-xs line-clamp-1 ${dark ? 'text-white/50' : 'text-black/50'}`}>
            {subtitle}
          </p>
          <div className="mt-[6%] flex flex-wrap gap-1.5">
            {project.tech?.slice(0, 4).map((t) => (
              <span
                key={t}
                className={`rounded-md px-2 py-1 font-mono text-[10px] ${
                  dark ? 'bg-white/[0.07] text-white/70' : 'bg-black/[0.06] text-black/60'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <span
        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
          dark ? 'bg-white text-[var(--color-ink)]' : 'bg-[var(--color-ink)] text-white'
        }`}
      >
        {categoryOf(project)}
      </span>
    </div>
  )
}

function ProjectCard({ project, index, order, visible }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <article
      className={visible ? 'animate-rise' : 'opacity-0'}
      style={{ animationDelay: `${order * 110}ms` }}
    >
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={onMove}
        className="group relative block overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-2 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] md:cursor-none"
      >
        <div className="relative overflow-hidden rounded-xl">
          <Cover project={project} index={index} />
          {/* cursor-following open button */}
          <span
            aria-hidden
            className="pointer-events-none absolute hidden h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--color-ink)] shadow-lg transition-transform duration-300 ease-out-expo scale-0 group-hover:scale-100 md:flex"
            style={{ left: pos.x - 32, top: pos.y - 40 }}
          >
            <ArrowUpRight size={22} />
          </span>
        </div>
        <div className="px-3 pb-4 pt-5">
          <h3 className="text-xl md:text-[1.4rem] font-semibold leading-snug tracking-tight text-[var(--color-muted)] transition-colors duration-500 group-hover:text-[var(--color-ink)]">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)] line-clamp-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech?.slice(0, 3).map((t) => (
              <span key={t} className="rounded-full border border-[var(--color-line)] px-3.5 py-1.5 text-[13px] font-medium">
                {t}
              </span>
            ))}
            {project.tech?.length > 3 && (
              <span className="rounded-full border border-[var(--color-line)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--color-faint)]">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </a>
    </article>
  )
}

export default function Projects({ projects, githubHref }) {
  const [filter, setFilter] = useState('All')
  const [ref, visible] = useScrollReveal({ threshold: 0.05 })

  if (!projects?.length) return null

  const tabs = ['All', ...new Set(projects.map(categoryOf))]
  const shown = filter === 'All' ? projects : projects.filter((p) => categoryOf(p) === filter)

  return (
    <section id="work" className="section-shell bg-[var(--color-paper)]">
      <div className="section-inner">
        <SectionHeading title="Selected Work" watermark="Portfolio" align="center" />

        <div ref={ref} className={`reveal mb-8 flex flex-wrap items-center justify-between gap-4 ${visible ? 'is-visible' : ''}`}>
          <div className="flex flex-wrap gap-1" role="tablist" aria-label="Filter projects">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={filter === t}
                onClick={() => setFilter(t)}
                className={`rounded-full px-4 py-2 text-[15px] font-semibold transition-all duration-300 ${
                  filter === t ? 'bg-[var(--color-ink)] text-white' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          {githubHref && (
            <a href={githubHref} target="_blank" rel="noopener noreferrer" className="pill">
              View All Work
              <ArrowUpRight className="arrow" />
            </a>
          )}
        </div>

        <div key={filter} className="grid gap-6 md:grid-cols-2 md:gap-8">
          {shown.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={projects.indexOf(p)} order={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
