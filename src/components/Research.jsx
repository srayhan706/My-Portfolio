import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'
import { ArrowUpRight, FileText } from './ui/Icons'

export default function Research({ research }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 })

  if (!research) return null

  const [acronym, ...rest] = research.title.split(':')
  const subtitle = rest.join(':').trim()

  return (
    <section id="research" className="section-shell bg-white">
      <div className="section-inner">
        <SectionHeading title="Research" watermark="Paper" aside="Published on arXiv" />

        <article
          ref={ref}
          className={`reveal group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] ${
            visible ? 'is-visible' : ''
          }`}
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr]">
            <div className="p-6 sm:p-10 md:p-12">
              <div className="flex flex-wrap gap-2">
                {research.domain?.map((d) => (
                  <span key={d} className="rounded-full border border-[var(--color-line)] bg-white px-3.5 py-1.5 text-[13px] font-semibold">
                    {d}
                  </span>
                ))}
              </div>
              <h3 className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="text-5xl md:text-7xl font-bold tracking-tight">{subtitle ? acronym : research.title}</span>
                {subtitle && <span className="text-lg md:text-xl font-medium text-[var(--color-faint)]">/Paper</span>}
              </h3>
              {subtitle && (
                <p className="mt-4 max-w-xl text-xl md:text-2xl font-semibold leading-snug tracking-tight">{subtitle}</p>
              )}
              <p className="mt-5 max-w-xl leading-relaxed text-[var(--color-muted)]">{research.description}</p>
              {research.paper_url && (
                <a href={research.paper_url} target="_blank" rel="noopener noreferrer" className="btn-dark mt-8">
                  {research.paper_label ?? 'Read paper (PDF)'}
                  <ArrowUpRight className="arrow" />
                </a>
              )}
            </div>

            <div className="relative border-t border-[var(--color-line)] bg-[var(--color-ink-soft)] p-6 text-white sm:p-10 lg:border-l lg:border-t-0">
              <FileText size={28} className="text-white/40" />
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Key contributions</p>
              <ol className="mt-5 space-y-5">
                {research.highlights?.map((h, i) => (
                  <li
                    key={h}
                    className={`reveal flex gap-4 ${visible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: `${300 + i * 140}ms` }}
                  >
                    <span className="font-mono text-sm text-white/35">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[15px] leading-relaxed text-white/85">{h}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
