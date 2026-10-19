import { useScrollReveal } from '../hooks/useScrollReveal'
import FillText from './ui/FillText'
import { ArrowUpRight, GitHub, LeetCode, LinkedIn, Mail } from './ui/Icons'
import { splitName } from '../utils/name'

export default function Contact({ contact, name, availability }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.3 })

  if (!contact) return null

  const links = [
    contact.github && { href: contact.github, label: 'GitHub', Icon: GitHub },
    contact.linkedin && { href: contact.linkedin, label: 'LinkedIn', Icon: LinkedIn },
    contact.leetcode && { href: contact.leetcode, label: 'LeetCode', Icon: LeetCode },
    contact.email && { href: `mailto:${contact.email}`, label: 'Email', Icon: Mail },
  ].filter(Boolean)

  const shortName = splitName(name).join(' ').trim()

  return (
    <section id="contact" className="relative overflow-hidden">
      <div aria-hidden className="clouds clouds-drift absolute -inset-[8%]" />
      <div
        ref={ref}
        className={`relative mx-auto flex min-h-[90svh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <span className={`pill reveal ${visible ? 'is-visible' : ''}`}>
          <span className="live-dot" />
          {availability}
        </span>

        <h2 className="mt-8 max-w-4xl text-[2.6rem] sm:text-6xl md:text-7xl font-bold uppercase leading-[0.98] tracking-tight text-[#2b2b2b]">
          <FillText text="Have a project in mind?" step={22} delay={150} />
        </h2>

        <p
          className={`reveal mt-6 max-w-xl text-base md:text-lg leading-relaxed text-[var(--color-muted)] ${
            visible ? 'is-visible' : ''
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Open to software engineering roles and collaborations. Let&apos;s build something clear, reliable and
          impactful together.
        </p>

        <div className={`reveal mt-9 ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '650ms' }}>
          <a
            href={`mailto:${contact.email}?subject=Opportunity%20%E2%80%94%20${encodeURIComponent(name ?? '')}`}
            className="btn-dark !px-7 !py-3.5 ring-4 ring-black/10"
          >
            Contact Me
            <ArrowUpRight className="arrow" />
          </a>
        </div>

        <ul className="mt-16 flex flex-wrap items-center justify-center gap-3 md:mt-24 md:gap-6">
          <li className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '800ms' }}>
            <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white">
              <img src="/f.png" alt="" className="h-7 w-7 rounded-full bg-white object-cover object-top" />
              {shortName}
            </a>
          </li>
          {links.map((item, i) => (
            <li
              key={item.label}
              className={`reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${880 + i * 80}ms` }}
            >
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="pill"
              >
                <item.Icon />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
