import { pad } from '../utils/format'
import { ArrowUpRight } from './ui/Icons'
import Section from './ui/Section'

export default function Research({ index, research }) {
  if (!research) return null

  // "CATS: Curvature-Adaptive ..." -> acronym + full title
  const [acronym, ...rest] = research.title.split(':')
  const subtitle = rest.join(':').trim()
  const onArxiv = /arxiv\.org/.test(research.paper_url ?? '')

  return (
    <Section id="research" index={index} title="Research" intro="Machine learning research on efficient long-video understanding.">
      <article className="card reveal overflow-hidden">
        <div className="p-6 md:p-8">
          <p className="eyebrow">{onArxiv ? 'Paper · arXiv' : 'Paper'}</p>
          <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight md:text-[1.75rem]">
            {subtitle ? (
              <>
                <span className="text-accent">{acronym}:</span> {subtitle}
              </>
            ) : (
              research.title
            )}
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{research.description}</p>
          {research.domain?.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {research.domain.map((d) => (
                <li key={d} className="tag">
                  {d}
                </li>
              ))}
            </ul>
          )}
          {research.paper_url && (
            <a href={research.paper_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
              {research.paper_label ?? 'Read paper (PDF)'}
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>

        {research.highlights?.length > 0 && (
          <div className="border-t border-line bg-raised/50 p-6 md:p-8">
            <p className="eyebrow">Key contributions</p>
            <ol className="mt-5 grid gap-6 md:grid-cols-3">
              {research.highlights.map((h, i) => (
                <li key={h}>
                  <span className="font-mono text-xs text-accent">{pad(i + 1)}</span>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </article>
    </Section>
  )
}
