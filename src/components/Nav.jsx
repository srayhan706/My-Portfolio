import { useEffect, useId, useState } from 'react'
import { splitName } from '../utils/name'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Logo({ name, muted = false }) {
  const gradientId = useId()
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${muted ? 'text-[var(--color-faint)]' : ''}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="1" stopColor="currentColor" />
          </linearGradient>
        </defs>
        <path
          d="M25.5 9.5A11 11 0 1025.5 22.5"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[13px] font-semibold uppercase tracking-[0.06em]">{splitName(name).join(' ')}</span>
    </a>
  )
}

export default function Nav({ name, email }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 pt-3 md:pt-4">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="shell">
        <nav
          className={`flex items-center justify-between gap-4 rounded-[22px] bg-white/90 py-2.5 pl-4 pr-2.5 backdrop-blur-xl transition-shadow duration-500 animate-rise md:pl-5 ${
            scrolled ? 'shadow-[0_12px_32px_-18px_rgba(0,0,0,0.35)]' : ''
          }`}
        >
          <Logo name={name} />
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[15px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={email ? `mailto:${email}` : '#contact'} className="btn-dark !py-2.5">
            Book a call
          </a>
        </nav>
      </div>
    </header>
  )
}
