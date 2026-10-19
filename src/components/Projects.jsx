import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowUpRight } from './ui/Icons'

// Tinted backdrops standing in for project screenshots.
const THEMES = [
  { bg: 'bg-[linear-gradient(135deg,#7fa083,#5f8565)]', win: 'bg-white', text: 'text-[var(--color-ink)]' },
  { bg: 'bg-[linear-gradient(135deg,#e9ecef,#cfd5db)]', win: 'bg-white', text: 'text-[var(--color-ink)]' },
  { bg: 'bg-[linear-gradient(135deg,#3a3a3a,#141414)]', win: 'bg-[#1d1d1f]', text: 'text-white' },
  { bg: 'bg-[linear-gradient(135deg,#8fd0d8,#139fb1)]', win: 'bg-white', text: 'text-[var(--color-ink)]' },
]

function Cover({ project, index, large }) {
  const t = THEMES[index % THEMES.length]
  const [headline, ...rest] = project.title.split(/\s[—-]\s/)
  const subtitle = rest.join(' — ') || project.description

  return (
    <div className={`relative overflow-hidden rounded-[18px] ${t.bg} ${large ? 'aspect-[16/8.5]' : 'aspect-[4/3.1]'}`}>
      <div aria-hidden className="absolute -right-10 -top-16 h-56 w-56 rounded-[40px] bg-white/10 rotate-12" />
      <div aria-hidden className="absolute -bottom-20 left-10 h-48 w-72 rounded-[40px] bg-black/5 -rotate-6" />
      <div
        className={`absolute left-1/2 top-[14%] w-[78%] -translate-x-1/2 rotate-[-3deg] rounded-2xl p-4 shadow-[0_30px_50px_-24px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-0 group-hover:scale-[1.04] sm:p-5 ${t.win} ${t.text}`}
      >
        <div className="mb-4 flex items-center gap-1.5">
          {[0, 1, 2].map((d) => (
            <span key={d} className="h-2 w-2 rounded-full bg-current opacity-20" />
          ))}
          <span className="ml-3 h-2 w-1/3 rounded-full bg-current opacity-10" />
        </div>
        <p className={`font-semibold leading-tight tracking-tight line-clamp-1 ${large ? 'text-2xl sm:text-4xl' : 'text-xl'}`}>
          {headline}
        </p>
        <p className="mt-1.5 text-xs opacity-55 line-clamp-1 sm:text-sm">{subtitle}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech?.slice(0, large ? 6 : 3).map((x) => (
            <span key={x} className="rounded-md bg-current/10 px-2 py-1 font-mono text-[10px]">
              <span className="opacity-70">{x}</span>
            </span>
          ))}
        </div>
        <div className="mt-5 space-y-2">
          <span className="block h-2 w-full rounded-full bg-current opacity-[0.07]" />
          <span className="block h-2 w-4/5 rounded-full bg-current opacity-[0.07]" />
          {large && <span className="block h-2 w-2/3 rounded-full bg-current opacity-[0.07]" />}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index, large }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 })

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${large ? 'sm:col-span-2' : ''}`}
      style={{ transitionDelay: large ? '0ms' : `${(index % 2) * 120}ms` }}
    >
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group card block rounded-[28px] p-3 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] sm:p-4"
      >
        <Cover project={project} index={index} large={large} />
        <div className="px-1 pb-1 pt-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-medium uppercase tracking-wide">{project.title}</h3>
            <span className="inline-flex shrink-0 items-center gap-1 text-sm text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-ink)]">
              GitHub
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </div>
          {large && <p className="mt-2 max-w-2xl text-sm leading-snug text-[var(--color-muted)]">{project.description}</p>}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech?.slice(0, 3).map((x, i) => (
              <span key={x} className={`tag ${i === 0 ? 'tag-teal' : ''}`}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  )
}

export default function Projects({ projects, githubHref }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.3 })

  if (!projects?.length) return null

  return (
    <section id="work" className="shell grid gap-8 py-14 md:py-20 lg:grid-cols-[230px_1fr]">
      <div ref={ref} className={`lg:sticky lg:top-28 lg:self-start ${visible ? 'is-visible' : ''}`}>
        <h2 className="heading-lg reveal">
          Selected
          <br />
          work
        </h2>
        {githubHref && (
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark reveal mt-6 !py-2.5"
            style={{ transitionDelay: '150ms' }}
          >
            See All
          </a>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} large={i === 0} />
        ))}
      </div>
    </section>
  )
}
