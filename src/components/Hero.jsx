import { ArrowUpRight, Codeforces, GitHub, LeetCode, LinkedIn } from './ui/Icons'
import { splitName } from '../utils/name'

function Letters({ word, offset, className }) {
  return (
    <span className={`inline-block whitespace-nowrap ${className}`} aria-hidden>
      {Array.from(word).map((ch, i) => (
        <span key={i} className="animate-char" style={{ animationDelay: `${150 + (offset + i) * 45}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  )
}

export default function Hero({ about, contact }) {
  if (!about) return null

  const [first, last] = splitName(about.name)
  const socials = [
    contact?.github && { href: contact.github, label: 'GitHub', Icon: GitHub },
    contact?.linkedin && { href: contact.linkedin, label: 'LinkedIn', Icon: LinkedIn },
    contact?.leetcode && { href: contact.leetcode, label: 'LeetCode', Icon: LeetCode },
    contact?.codeforces && { href: contact.codeforces, label: 'Codeforces', Icon: Codeforces },
  ].filter(Boolean)

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-4 pt-28 sm:px-6 md:pt-36 lg:min-h-[max(100svh,760px)]">
        <h1
          className="font-wide relative z-0 text-center font-extrabold uppercase leading-[0.95] tracking-[0.02em] text-[var(--color-ink)] text-[11.4vw] sm:text-[10vw] lg:text-[clamp(3rem,5.8vw,5.5rem)]"
          aria-label={about.name}
        >
          <Letters word={first} offset={0} className="text-outline" />
          <span className="hidden lg:inline"> </span>
          <br className="lg:hidden" />
          <Letters word={last} offset={first.length} />
        </h1>

        {/* Portrait rising from the bottom edge */}
        <div className="pointer-events-none relative mx-auto mt-6 h-[52vh] w-full max-w-[34rem] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[min(72vh,660px)] lg:max-w-none lg:w-auto">
          <img
            src="/f.png"
            alt={`Portrait of ${about.name}`}
            width={500}
            height={500}
            className="hero-photo absolute bottom-0 left-1/2 h-full w-auto max-w-none object-contain object-bottom mix-blend-multiply lg:relative lg:left-0"
          />
        </div>

        <div className="relative z-20 mt-auto grid gap-8 pb-10 pt-8 md:pb-14 lg:grid-cols-2 lg:items-end">
          <div className="max-w-sm lg:max-w-[18rem] animate-rise" style={{ animationDelay: '900ms' }}>
            <p className="text-2xl md:text-[1.75rem] lg:text-2xl font-bold tracking-tight">{about.title}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">{about.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-dark">
                Let&apos;s collaborate
                <ArrowUpRight className="arrow" />
              </a>
              {contact?.resume && (
                <a href={contact.resume} target="_blank" rel="noopener noreferrer" className="pill">
                  Download CV
                </a>
              )}
            </div>
          </div>

          <ul className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
            {socials.map((item, i) => (
              <li key={item.label} className="animate-rise" style={{ animationDelay: `${1050 + i * 110}ms` }}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="pill min-w-[8.5rem] justify-center">
                  <item.Icon />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
