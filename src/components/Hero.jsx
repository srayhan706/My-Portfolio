import { Codeforces, FileText, GitHub, LeetCode, LinkedIn, Mail, MapPin } from './ui/Icons'
import { splitName } from '../utils/name'

function Words({ text, start = 0, step = 90 }) {
  return text.split(' ').map((w, i) => (
    <span key={i} className="inline-block animate-rise" style={{ animationDelay: `${start + i * step}ms` }}>
      {w}
      {' '}
    </span>
  ))
}

export default function Hero({ about, contact, experience, skills }) {
  if (!about) return null

  const role = Array.isArray(experience) ? experience[0] : experience
  const shortName = splitName(about.name).join(' ')
  const headlineRole = about.title.replace(/^junior\s+/i, '').toLowerCase()
  const stack = [
    ...(skills?.backend ?? []),
    ...(skills?.frontend ?? []),
    ...(skills?.devops ?? []),
    ...(skills?.databases ?? []),
  ]

  const socials = [
    contact?.github && { href: contact.github, label: 'GitHub', Icon: GitHub, color: '#181717' },
    contact?.linkedin && { href: contact.linkedin, label: 'LinkedIn', Icon: LinkedIn, color: '#0a66c2' },
    contact?.leetcode && { href: contact.leetcode, label: 'LeetCode', Icon: LeetCode, color: '#f89f1b' },
    contact?.codeforces && { href: contact.codeforces, label: 'Codeforces', Icon: Codeforces, color: '#1f8acb' },
    contact?.email && { href: `mailto:${contact.email}`, label: 'Email', Icon: Mail, color: '#139fb1' },
    contact?.resume && { href: contact.resume, label: 'Résumé', Icon: FileText, color: '#e0457b' },
  ].filter(Boolean)

  return (
    <section id="top" className="shell grid items-center gap-12 pb-14 pt-12 md:pt-20 lg:grid-cols-[1fr_1.08fr] lg:gap-10 lg:pb-20">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-soft)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide text-[var(--color-teal)] animate-rise">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)]" />
          {about.availability ?? 'Open to opportunities'}
        </span>
        <h1 className="mt-6 text-[3.25rem] font-medium leading-[0.92] tracking-[-0.035em] sm:text-[4.5rem] lg:text-[5.25rem]">
          <Words text="Hi, I’m a" start={100} />
          <br />
          <Words text={headlineRole} start={370} />
          <sup className="ml-[-0.15em] inline-block align-[0.9em] text-[0.32em] font-normal animate-rise" style={{ animationDelay: '700ms' }}>
            ©
          </sup>
        </h1>
        <p className="mt-8 max-w-md text-[15px] leading-snug text-[var(--color-muted)] animate-rise" style={{ animationDelay: '800ms' }}>
          {about.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 animate-rise" style={{ animationDelay: '900ms' }}>
          <a href="#contact" className="btn-dark">
            Contact Me
          </a>
          {contact?.resume && (
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-3 text-[15px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              Download CV ↗
            </a>
          )}
        </div>
      </div>

      {/* Bento */}
      <div className="grid grid-cols-2 gap-3">
        <div className="card relative flex min-h-[15rem] flex-col overflow-hidden p-4 sm:p-5 animate-rise" style={{ animationDelay: '250ms' }}>
          <p className="text-lg font-medium tracking-tight sm:text-xl">{shortName}</p>
          {role?.location && (
            <p className="mt-0.5 flex items-center gap-1 text-[13px] text-[var(--color-muted)]">
              <MapPin size={13} />
              {role.location}
            </p>
          )}
          {/* mini preview */}
          <div className="pointer-events-none absolute -right-6 top-[38%] hidden sm:block w-[78%] rotate-[-4deg] rounded-xl border border-[var(--color-line)] bg-[#f7f7f9] p-2.5 shadow-[0_18px_30px_-18px_rgba(0,0,0,0.35)]">
            <div className="mb-2 flex gap-1">
              {[0, 1, 2].map((d) => (
                <span key={d} className="h-1.5 w-1.5 rounded-full bg-black/15" />
              ))}
            </div>
            <p className="font-mono text-[9px] leading-relaxed text-[var(--color-muted)]">
              <span className="text-[var(--color-teal)]">@GetMapping</span>(&quot;/api&quot;)
              <br />
              <span className="text-[#7c6cf0]">public</span> Response serve()
            </p>
          </div>
          <div className="relative mt-auto flex flex-col items-start gap-2 pt-6 sm:pt-24">
            {role && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#efefef]/95 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide backdrop-blur">
                {role.role}
              </span>
            )}
            {role?.organization && (
              <span className="rounded-full bg-[#eaf1ff] px-3 py-1.5 text-[11px] font-medium text-[#2f6fd6]">
                @ {role.organization.replace(/^.*\((.+)\)$/, '$1')}
              </span>
            )}
          </div>
        </div>

        <div className="card overflow-hidden animate-rise" style={{ animationDelay: '350ms' }}>
          <img
            src="/f.png"
            alt={`Portrait of ${about.name}`}
            width={500}
            height={500}
            className="h-full min-h-[15rem] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="col-span-2 grid gap-3 sm:grid-cols-[1.45fr_1fr]">
          <div
            className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(110deg,#9f9bf5,#c4c1fb_70%,#d8d6fd)] p-5 text-white animate-rise"
            style={{ animationDelay: '450ms' }}
          >
            <p className="max-w-[16rem] text-sm leading-snug">
              The technologies I happily
              <br />
              work with &lt;3
            </p>
            <div className="mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
              <div className="flex w-max gap-6 animate-marquee">
                {[...stack, ...stack].map((s, i) => (
                  <span key={i} className="whitespace-nowrap text-lg font-semibold tracking-tight">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-6 gap-2 sm:grid-cols-3">
            {socials.map((s, i) => (
              <li key={s.label} className="animate-rise" style={{ animationDelay: `${550 + i * 70}ms` }}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') || s.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid aspect-square place-items-center rounded-full bg-white shadow-[0_8px_18px_-12px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
                  style={{ color: s.color }}
                >
                  <s.Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
