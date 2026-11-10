import { pad } from '../utils/format'
import { ArrowUpRight, GitHub } from './ui/Icons'
import Section from './ui/Section'

function ProjectCard({ project, order, wide }) {
  // "ToToCompany — Travel & Flight Booking Platform" -> name + subtitle
  const [name, ...rest] = project.title.split(/\s[—–-]\s/)
  const subtitle = rest.join(' — ')
  const Heading = project.github ? 'a' : 'span'

  return (
    <article className={`card card-hover reveal group relative flex flex-col p-6 md:p-7 ${wide ? 'sm:col-span-2' : ''}`} style={{ '--i': order }}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-faint">{pad(order + 1)}</span>
        {project.github && (
          <span className="flex items-center gap-1.5 text-[13px] text-muted transition-colors group-hover:text-accent">
            <GitHub size={15} />
            Source
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-semibold leading-tight tracking-tight">
        {/* The stretched ::after makes the whole card one link target. */}
        <Heading
          {...(project.github ? { href: project.github, target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="after:absolute after:inset-0 after:rounded-2xl"
        >
          {name}
        </Heading>
      </h3>
      {subtitle && <p className="mt-1.5 text-sm font-medium text-accent">{subtitle}</p>}
      <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.description}</p>

      {project.highlights?.length > 0 && (
        <ul className={`mt-5 gap-x-8 gap-y-2.5 border-t border-line pt-5 ${wide ? 'grid md:grid-cols-2' : 'grid'}`}>
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span aria-hidden className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {project.tech?.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {project.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default function Projects({ index, projects, githubHref }) {
  if (!projects?.length) return null

  return (
    <Section id="projects" index={index} title="Projects" intro="Selected work across backend, full-stack, and systems.">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          // An odd one out at the end spans the full row instead of leaving a gap.
          <ProjectCard key={p.title} project={p} order={i} wide={projects.length % 2 === 1 && i === projects.length - 1} />
        ))}
      </div>
      {githubHref && (
        <p className="reveal mt-8 text-sm" style={{ '--i': projects.length }}>
          <a href={githubHref} target="_blank" rel="noopener noreferrer" className="link">
            More on GitHub
            <ArrowUpRight size={14} />
          </a>
        </p>
      )}
    </Section>
  )
}
