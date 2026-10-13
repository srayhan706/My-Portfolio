import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ resumeHref }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`)
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.12, 0.35, 0.6] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(5,5,6,0.82)] backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6 h-[4.25rem] flex items-center justify-between gap-4">
          <a
            href="#about"
            className="font-display text-lg text-white tracking-tight hover:text-[var(--color-accent)] transition-colors"
          >
            Rayhan<span className="text-[var(--color-accent)]">.</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    active === href
                      ? 'text-white bg-white/[0.06]'
                      : 'text-[var(--color-muted)] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {resumeHref && (
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-medium text-[#f5ead4] hover:border-[var(--color-accent)]/50 transition-colors"
              >
                Download CV
              </a>
            )}
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-white"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />
        <div
          className={`absolute top-[4.25rem] left-0 right-0 border-b border-[var(--color-border)] bg-[var(--color-ink-elevated)] p-5 transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="space-y-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 text-base ${
                    active === href ? 'bg-white/[0.06] text-white' : 'text-[var(--color-muted)]'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {resumeHref && (
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 flex w-full items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)] px-4 py-3 text-sm font-medium text-[#f5ead4]"
            >
              Download CV
            </a>
          )}
        </div>
      </div>
    </>
  )
}
