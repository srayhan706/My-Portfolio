import { useScrollReveal } from '../hooks/useScrollReveal'
import { Cloud, Code, Database, Layout, Server, Terminal } from './ui/Icons'

const SERVICES = [
  {
    keys: ['backend', 'frameworks'],
    title: 'Backend Development',
    Icon: Server,
    blurb: 'I build reliable REST APIs with secure authentication and a modular, maintainable architecture.',
  },
  {
    keys: ['frontend'],
    title: 'Frontend Development',
    Icon: Layout,
    blurb: 'Responsive, accessible interfaces that are wired cleanly to real backend services.',
  },
  {
    keys: ['devops', 'platforms'],
    title: 'DevOps & Deployment',
    Icon: Cloud,
    blurb: 'Containerised services shipped to Linux servers with automated CI/CD pipelines.',
  },
  {
    keys: ['databases'],
    title: 'Databases',
    Icon: Database,
    blurb: 'Relational schema design, efficient queries and data that stays consistent.',
  },
  {
    keys: ['programming_languages', 'languages'],
    title: 'Languages',
    Icon: Code,
    blurb: 'Comfortable across systems, backend and scripting languages, picking the right one for the job.',
  },
  {
    keys: ['scripting_automation', 'tools'],
    title: 'Tools & Automation',
    Icon: Terminal,
    blurb: 'Scripts and tooling that remove repetitive work, plus everyday version control.',
  },
]

export default function Skills({ skills }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 })

  if (!skills) return null

  const services = SERVICES.map((s) => ({
    ...s,
    items: s.keys.flatMap((k) => skills[k] ?? []),
  })).filter((s) => s.items.length)

  return (
    <section id="services" ref={ref} className={`shell grid gap-8 py-14 md:py-20 lg:grid-cols-[230px_1fr] ${visible ? 'is-visible' : ''}`}>
      <h2 className="heading-lg reveal">
        How Can I
        <br />
        Assist You?
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => {
          const { title, blurb, items } = s
          return (
            <article
              key={title}
              className="card reveal group flex flex-col p-5 transition-shadow duration-500 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.35)] md:p-6"
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <div className="flex gap-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eeeefd] text-[#7a72ef] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <s.Icon size={20} />
                </span>
                <div>
                  <p className="text-[13px] leading-snug text-[var(--color-muted)]">{blurb}</p>
                  <p className="mt-3 text-[12px] leading-relaxed text-[var(--color-faint)]">{items.join(' · ')}</p>
                </div>
              </div>
              <div className="mt-8 flex items-end justify-between">
                <h3 className="text-lg font-medium tracking-tight">{title}</h3>
                <span className="text-lg text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-teal)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
