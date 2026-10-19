import { useEffect, useState } from 'react'
import { ArrowUpRight, Close } from './ui/Icons'

export default function Nav({ data, availability }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  const count = (v) => (Array.isArray(v) ? v.length : v ? 1 : 0)
  const links = [
    { href: '#work', label: 'Work', meta: count(data?.projects) },
    { href: '#stack', label: 'Stack', meta: Object.keys(data?.skills ?? {}).length },
    { href: '#experience', label: 'Experience', meta: count(data?.experience) + count(data?.education) },
    { href: '#research', label: 'Research', meta: count(data?.research) },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['work', 'stack', 'experience', 'research', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
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

  const close = () => setOpen(false)

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[var(--color-paper)]/80 backdrop-blur-xl shadow-[0_1px_0_var(--color-line)]' : ''
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-20 md:h-24'
          }`}
        >
          <a href="#top" className="pill !py-1.5 !text-[13px] animate-slide-down">
            <span className="live-dot" />
            {availability}
          </a>

          <ul className="hidden lg:flex items-center gap-10">
            {links.map(({ href, label, meta }, i) => (
              <li key={href} className="animate-slide-down" style={{ animationDelay: `${80 + i * 60}ms` }}>
                <a href={href} className="group relative flex items-baseline gap-1.5 text-[15px] font-medium">
                  <span className="relative">
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-500 ease-out-expo ${
                        active === href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </span>
                  {meta > 0 && (
                    <span className="font-mono text-[11px] text-[var(--color-faint)]">[{meta}]</span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 animate-slide-down" style={{ animationDelay: '420ms' }}>
            <a href="#contact" className="btn-dark hidden sm:inline-flex !py-2.5">
              Let&apos;s Talk
              <ArrowUpRight className="arrow" />
            </a>
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-ink)] text-white"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              {open ? (
                <Close size={18} />
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 9h16M4 15h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-0 z-40 bg-[var(--color-ink)] text-white transition-[clip-path] duration-700 ease-out-expo ${
          open ? '[clip-path:circle(150%_at_100%_0)]' : '[clip-path:circle(0%_at_100%_0)] pointer-events-none'
        }`}
      >
        <ul className="flex h-full flex-col justify-center gap-2 px-6">
          {links.map(({ href, label, meta }, i) => (
            <li
              key={href}
              className="transition-all duration-700 ease-out-expo"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(24px)',
                transitionDelay: open ? `${150 + i * 60}ms` : '0ms',
              }}
            >
              <a
                href={href}
                onClick={close}
                className="flex items-baseline gap-3 border-b border-[var(--color-line-dark)] py-4 text-4xl font-semibold uppercase tracking-tight"
              >
                {label}
                {meta > 0 && <span className="font-mono text-sm text-white/40">[{meta}]</span>}
              </a>
            </li>
          ))}
          {data?.contact?.resume && (
            <li
              className="mt-6 transition-all duration-700"
              style={{ opacity: open ? 1 : 0, transitionDelay: open ? '500ms' : '0ms' }}
            >
              <a
                href={data.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)]"
              >
                Download CV <ArrowUpRight />
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}
