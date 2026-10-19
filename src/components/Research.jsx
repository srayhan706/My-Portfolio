import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowUpRight } from './ui/Icons'

export default function Research({ research }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 })

  if (!research) return null

  const [acronym, ...rest] = research.title.split(':')
  const subtitle = rest.join(':').trim()

  return (
    <section id="research" ref={ref} className={`shell grid gap-8 py-14 md:py-20 lg:grid-cols-[230px_1fr] ${visible ? 'is-visible' : ''}`}>
      <div>
        <h2 className="heading-lg reveal">
          Published
          <br />
          research
        </h2>
        <p className="reveal mt-4 max-w-[14rem] text-sm text-[var(--color-muted)]" style={{ transitionDelay: '100ms' }}>
          Machine learning research on efficient long-video understanding.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
        <article className="card reveal flex flex-col p-6 md:p-8" style={{ transitionDelay: '150ms' }}>
          <div className="flex flex-wrap gap-1.5">
            {research.domain?.map((d, i) => (
              <span key={d} className={`tag ${i === 0 ? 'tag-teal' : ''}`}>
                {d}
              </span>
            ))}
          </div>
          <h3 className="mt-8 text-5xl font-medium tracking-[-0.04em] md:text-6xl">{subtitle ? acronym : research.title}</h3>
          {subtitle && <p className="mt-3 text-xl font-medium leading-snug tracking-tight">{subtitle}</p>}
          <p className="mt-4 text-[15px] leading-snug text-[var(--color-muted)]">{research.description}</p>
          {research.paper_url && (
            <a href={research.paper_url} target="_blank" rel="noopener noreferrer" className="btn-dark mt-8 self-start">
              {research.paper_label ?? 'Read paper (PDF)'}
              <ArrowUpRight />
            </a>
          )}
        </article>

        <article className="lavender reveal rounded-[24px] p-6 md:p-8" style={{ transitionDelay: '280ms' }}>
          <p className="text-sm font-medium uppercase tracking-wide text-[#5b55c9]">Key contributions</p>
          <ol className="mt-6 space-y-5">
            {research.highlights?.map((h, i) => (
              <li key={h} className="flex gap-4">
                <span className="text-lg text-[#5b55c9]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[15px] leading-snug text-[#3a3a4a]">{h}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  )
}
