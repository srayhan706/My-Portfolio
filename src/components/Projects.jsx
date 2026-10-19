import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'

const HIGHLIGHT_LINES = 2

export default function Projects({ projects }) {
  const [ref, visible] = useScrollReveal()

  if (!projects?.length) return null

  const [featured, ...rest] = projects

  return (
    <section id="projects" className="section-shell border-t border-[var(--color-border)]">
      <div
        ref={ref}
        className={`section-inner reveal-base ${visible ? 'reveal-visible' : 'reveal-hidden'}`}
      >
        <SectionHeading
          eyebrow="Projects"
          title="Proof of work"
          description="Selected builds that show backend depth, frontend polish, and real-world problem solving."
        />

        {featured && (
          <article className="glass-panel rounded-xl p-6 md:p-8 mb-6 relative overflow-hidden group hover:border-[var(--color-accent)]/20 hover:shadow-[0_12px_48px_-20px_rgba(157,140,255,0.22)] transition-all duration-300">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--color-accent-soft)] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden
            />
            <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-teal)] mb-3">
                  Featured project
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-[var(--color-accent-fg)] transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{featured.description}</p>
                {featured.highlights?.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {featured.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm text-[#c8c8d0] leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-teal)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-6">
                  {featured.tech?.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md border border-[var(--color-border)] bg-black/20 text-[11px] font-mono text-[var(--color-muted)] hover:border-[var(--color-accent)]/30 hover:text-white transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent-fg)] underline-offset-4 hover:underline transition-colors"
                >
                  Repository →
                </a>
              )}
            </div>
          </article>
        )}

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 md:items-stretch">
          {rest.map((p, i) => (
            <article
              key={p.title}
              className="glass-panel rounded-xl p-5 flex flex-col h-full min-h-[22rem] group hover:border-[var(--color-accent)]/20 hover:-translate-y-1 hover:shadow-[0_8px_32px_-12px_rgba(157,140,255,0.2)] transition-all duration-300 reveal-base"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: visible ? `${(i + 1) * 80}ms` : '0ms',
              }}
            >
              <p className="text-[11px] font-mono text-[var(--color-muted)] mb-2">
                {String(i + 2).padStart(2, '0')}
              </p>
              <h3 className="text-base font-semibold text-white leading-snug min-h-[2.75rem] line-clamp-2 group-hover:text-[var(--color-accent-fg)] transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed line-clamp-3 min-h-[4.25rem]">
                {p.description}
              </p>
              <ul className="mt-3 space-y-1.5 min-h-[3.25rem]">
                {p.highlights?.slice(0, HIGHLIGHT_LINES).map((highlight) => (
                  <li key={highlight} className="text-xs text-[#b8b8c2] leading-relaxed line-clamp-2">
                    · {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-[var(--color-border)] flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5 min-h-[1.75rem]">
                  {p.tech?.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded border border-[var(--color-border)] text-[10px] font-mono text-[var(--color-muted)] group-hover:border-[var(--color-border-strong)] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[var(--color-accent)] hover:text-white transition-colors w-fit"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
