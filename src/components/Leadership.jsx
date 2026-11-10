import { asList, pad } from '../utils/format'
import { ArrowUpRight, Codeforces, LeetCode, Users } from './ui/Icons'
import Section from './ui/Section'

const JUDGES = [
  { key: 'leetcode', name: 'LeetCode', Icon: LeetCode },
  { key: 'codeforces', name: 'Codeforces', Icon: Codeforces },
]

export default function Leadership({ index, leadership, competitiveProgramming }) {
  const roles = asList(leadership)
  const ratings = JUDGES.map((j) => ({ ...j, ...competitiveProgramming?.[j.key] })).filter((j) => j.max_rating)

  if (!roles.length && !ratings.length) return null

  return (
    <Section id="leadership" index={index} title="Beyond the code" intro="Leadership, community work, and problem solving.">
      <div className="space-y-4">
        {roles.map((l, i) => (
          <article key={`${l.role}-${l.organization}`} className="card reveal overflow-hidden" style={{ '--i': i }}>
            <div className="flex gap-5 p-6 md:p-7">
              <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-raised text-muted sm:grid">
                <Users size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-lg font-semibold leading-snug tracking-tight">
                      {l.role}, {l.organization}
                    </h3>
                    <p className="mt-1 text-[15px] text-muted">{[l.institution, l.location].filter(Boolean).join(' · ')}</p>
                  </div>
                  <p className="pt-1 font-mono text-xs text-muted">{l.period}</p>
                </div>
                {l.description && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{l.description}</p>}
              </div>
            </div>

            {l.highlights?.length > 0 && (
              <ol className="grid gap-6 border-t border-line bg-raised/50 p-6 md:grid-cols-3 md:p-7">
                {l.highlights.map((h, n) => (
                  <li key={h}>
                    <span className="font-mono text-xs text-accent">{pad(n + 1)}</span>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{h}</p>
                  </li>
                ))}
              </ol>
            )}
          </article>
        ))}

        {ratings.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {ratings.map((r, i) => {
              const Tag = r.profile ? 'a' : 'div'
              return (
                <Tag
                  key={r.key}
                  {...(r.profile ? { href: r.profile, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`card reveal group block p-6 md:p-7 ${r.profile ? 'card-hover' : ''}`}
                  style={{ '--i': roles.length + i }}
                >
                  <p className="flex items-center justify-between text-sm text-muted">
                    <span className="flex items-center gap-2">
                      <r.Icon size={17} />
                      {r.name}
                    </span>
                    {r.profile && <ArrowUpRight size={15} className="transition-colors group-hover:text-accent" />}
                  </p>
                  <p className="mt-5 text-4xl font-semibold tracking-[-0.03em]">{r.max_rating}</p>
                  <p className="mt-1.5 text-sm text-muted">
                    Max rating{r.username ? ` · @${r.username}` : ''}
                  </p>
                </Tag>
              )
            })}
          </div>
        )}
      </div>
    </Section>
  )
}
