import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#research', label: 'Research' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ resumeHref }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#about')
  const [mounted, setMounted] = useState(false)
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false })
  const navListRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1))
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.12, 0.35, 0.6] },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Track sliding pill position
  useEffect(() => {
    const nav = navListRef.current
    if (!nav || !mounted) return
    const el = nav.querySelector(`a[href="${active}"]`)
    if (!el) return
    const navRect = nav.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setPill({ left: elRect.left - navRect.left, width: elRect.width, ready: true })
  }, [active, mounted])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
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
            ? 'bg-[rgba(6,6,8,0.90)] backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6 h-[4rem] flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#about"
            className={`font-display text-xl font-semibold text-white tracking-tight hover:text-[var(--color-accent-fg)] transition-colors ${
              mounted ? 'animate-slide-down' : 'opacity-0'
            }`}
          >
            S. Rayhan
          </a>

          {/* Desktop nav with sliding pill */}
          <ul ref={navListRef} className="hidden lg:flex items-center gap-0.5 relative">
            {/* Animated sliding indicator */}
            {pill.ready && (
              <span
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 rounded-md bg-[var(--color-accent-soft)] pointer-events-none"
                style={{
                  left: pill.left,
                  width: pill.width,
                  height: '34px',
                  transition: 'left 0.32s cubic-bezier(0.22,1,0.36,1), width 0.32s cubic-bezier(0.22,1,0.36,1)',
                }}
              />
            )}

            {links.map(({ href, label }, i) => (
              <li key={href}>
                <a
                  href={href}
                  className={`relative z-10 px-3 py-2 rounded-md text-sm transition-colors ${
                    active === href ? 'text-white' : 'text-[var(--color-muted)] hover:text-white'
                  } ${mounted ? 'animate-slide-down' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 50 + 80}ms` }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div
            className={`flex items-center gap-2 ${mounted ? 'animate-slide-down' : 'opacity-0'}`}
            style={{ animationDelay: '480ms' }}
          >
            {resumeHref && (
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs"
              >
                Download CV
              </a>
            )}
            <button
              type="button"
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] text-white hover:bg-white/[0.05] transition"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              <span
                className="transition-all duration-200"
                style={{ display: 'inline-flex', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                {open ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />
        <div
          className={`absolute top-[4rem] left-0 right-0 border-b border-[var(--color-border)] bg-[var(--color-ink-elevated)] p-4 transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="space-y-0.5">
            {links.map(({ href, label }, i) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-2.5 text-base transition-all duration-200 ${
                    active === href
                      ? 'bg-[var(--color-accent-soft)] text-white'
                      : 'text-[var(--color-muted)] hover:text-white hover:bg-white/[0.04]'
                  }`}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? 'translateX(0)' : 'translateX(-8px)',
                    transitionDelay: open ? `${i * 35}ms` : '0ms',
                  }}
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
              className="mt-3 flex w-full items-center justify-center btn-primary transition-all duration-300"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(6px)',
                transitionDelay: open ? `${links.length * 35}ms` : '0ms',
              }}
            >
              Download CV
            </a>
          )}
        </div>
      </div>
    </>
  )
}
