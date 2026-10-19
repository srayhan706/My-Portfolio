import { useScrollReveal } from '../hooks/useScrollReveal'
import { Building, Graduation, Trophy } from './ui/Icons'

const asList = (v) => (Array.isArray(v) ? v : v ? [v] : [])
// "Dynamic Solution Innovators (DSi)" -> "DSi"
const shortOrg = (org) => org.match(/\(([^)]+)\)\s*$/)?.[1] ?? org

export default function Experience({ experience, education, competitiveProgramming, resume }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 })

  const cp = competitiveProgramming
  const cards = [
    ...asList(experience).map((e) => ({
      Icon: Building,
      mark: shortOrg(e.organization),
      title: `${e.role} at ${shortOrg(e.organization)}`,
      meta: e.period,
    })),
    ...asList(education).map((e) => ({
      Icon: Graduation,
      mark: e.institution,
      title: `${e.degree}${e.cgpa ? ` · CGPA ${e.cgpa}` : ''}`,
      meta: e.period,
    })),
    (cp?.leetcode || cp?.codeforces) && {
      Icon: Trophy,
      mark: 'Competitive programming',
      title: [
        cp.leetcode && `LeetCode max ${cp.leetcode.max_rating}`,
        cp.codeforces && `Codeforces max ${cp.codeforces.max_rating}`,
      ]
        .filter(Boolean)
        .join(' · '),
      meta: 'Algorithms & problem solving',
      href: cp.leetcode?.profile ?? cp.codeforces?.profile,
    },
  ].filter(Boolean)

  if (!cards.length) return null

  return (
    <section id="experience" ref={ref} className={`shell grid gap-4 py-14 md:grid-cols-2 md:py-20 ${visible ? 'is-visible' : ''}`}>
      <div className="card reveal reveal-left flex flex-col justify-between gap-8 p-7 md:p-8">
        <h2 className="heading-lg !text-[2rem] md:!text-[2.4rem]">
          Wanna see
          <br />
          my experience?
        </h2>
        {resume && (
          <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-dark self-start !py-2.5">
            Download CV
          </a>
        )}
      </div>

      {cards.map((c, i) => {
        const Tag = c.href ? 'a' : 'div'
        return (
          <Tag
            key={c.title}
            {...(c.href ? { href: c.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`card reveal group block p-7 transition-shadow duration-500 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.35)] md:p-8 ${
              (i + 1) % 2 === 0 ? 'reveal-left' : 'reveal-right'
            }`}
            style={{ transitionDelay: `${120 + i * 120}ms` }}
          >
            <p className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-[var(--color-faint)] transition-colors duration-300 group-hover:text-[var(--color-teal)]">
              <c.Icon size={24} />
              {c.mark}
            </p>
            <p className="mt-6 text-lg font-medium leading-snug tracking-tight">{c.title}</p>
            <p className="mt-3 text-[13px] text-[var(--color-muted)]">{c.meta}</p>
          </Tag>
        )
      })}
    </section>
  )
}
