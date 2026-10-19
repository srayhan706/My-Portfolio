import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowUpRight } from './ui/Icons'

// Pills that tumble into the teal card: rotation, horizontal drift and stagger.
const PILL_STYLE = [
  { r: '0deg', dx: '-40px' },
  { r: '-3deg', dx: '30px' },
  { r: '16deg', dx: '-60px' },
  { r: '-2deg', dx: '50px' },
  { r: '4deg', dx: '-20px' },
  { r: '-5deg', dx: '40px' },
]

export default function Connect({ contact }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.3 })

  if (!contact) return null

  const pills = [
    { label: 'Follow me!' },
    { label: '👀 🤩', emoji: true },
    contact.github && { label: 'GitHub', href: contact.github },
    contact.linkedin && { label: 'LinkedIn', href: contact.linkedin },
    contact.leetcode && { label: 'LeetCode', href: contact.leetcode },
    contact.codeforces && { label: 'Codeforces', href: contact.codeforces },
  ].filter(Boolean)

  return (
    <section ref={ref} className={`shell grid gap-4 py-8 lg:grid-cols-[0.82fr_1.18fr] ${visible ? 'is-visible' : ''}`}>
      <div className="card reveal reveal-left flex flex-col justify-between gap-12 p-7 md:p-10">
        <h2 className="text-[3rem] font-medium leading-[0.94] tracking-[-0.035em] md:text-[4.25rem]">
          Let’s
          <br />
          connect
          <br />
          and chat
        </h2>
        {contact.email && (
          <a href={`mailto:${contact.email}`} className="group inline-flex items-center gap-3 self-start text-base uppercase tracking-wide sm:text-lg">
            <span className="break-all">{contact.email}</span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-ink)] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </a>
        )}
      </div>

      <div className="reveal reveal-scale flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[24px] bg-[var(--color-teal)] px-6 py-12" style={{ transitionDelay: '150ms' }}>
        <ul className="flex max-w-[26rem] flex-wrap items-center justify-center gap-y-1">
          {pills.map((p, i) => {
            const s = PILL_STYLE[i % PILL_STYLE.length]
            const Tag = p.href ? 'a' : 'span'
            return (
              <li
                key={p.label}
                className="pill-drop -mx-0.5"
                style={{ '--r': s.r, '--dx': s.dx, animationDelay: `${350 + i * 140}ms` }}
              >
                <Tag
                  {...(p.href ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`inline-block rounded-full border-[1.5px] border-white/80 px-6 py-3 text-xl uppercase tracking-wide text-white transition-colors duration-300 sm:text-[1.6rem] ${
                    p.href ? 'hover:bg-white hover:text-[var(--color-teal)]' : ''
                  } ${p.emoji ? 'normal-case' : ''}`}
                >
                  {p.label}
                </Tag>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
