import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'

export default function Research({ research }) {
  const [ref, visible] = useScrollReveal()

  if (!research) return null

  const paperUrl = research.paper_url
  const paperLabel = research.paper_label ?? 'Read paper (PDF)'

  return (
    <section id="research" className="section-shell border-t border-[var(--color-border)]">
      <div
        ref={ref}
        className={`section-inner reveal-base ${visible ? 'reveal-visible' : 'reveal-hidden'}`}
      >
        <SectionHeading
          eyebrow="Research"
          title="Published work"
          description="Machine learning research on efficient long-video understanding with multimodal models."
        />
        <article className="glass-panel rounded-xl p-6 md:p-8 border-l-2 border-l-[var(--color-accent)] group hover:border-l-[var(--color-teal)] hover:shadow-[0_8px_40px_-16px_rgba(157,140,255,0.18)] transition-all duration-300 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-[var(--color-accent-soft)] blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            aria-hidden
          />
          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-md border border-[var(--color-border)] bg-black/25 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[var(--color-teal)]">
              arXiv · Long-video QA
            </span>
            {paperUrl && (
              <a
                href={paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] px-4 py-2.5 text-sm font-medium text-[var(--color-accent-fg)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition"
              >
                {paperLabel}
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>

          <h3 className="font-display text-2xl md:text-[1.85rem] text-white leading-snug group-hover:text-[var(--color-accent-fg)] transition-colors">
            {research.title}
          </h3>
          <p className="text-[var(--color-muted)] mt-4 leading-relaxed max-w-3xl">{research.description}</p>

          {paperUrl && (
            <p className="mt-3 text-xs font-mono text-[var(--color-muted)] break-all">
              <a
                href={paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-accent-fg)] transition-colors"
              >
                {paperUrl}
              </a>
            </p>
          )}

          {research.highlights?.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {research.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm text-[#c4c4ce] leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
          {research.domain?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[var(--color-border)]">
              {research.domain.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-md border border-[var(--color-border)] bg-white/[0.02] text-xs text-[var(--color-muted)] hover:border-[var(--color-accent)]/30 hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  )
}
