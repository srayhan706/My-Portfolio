import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { initials } from '../utils/format'
import { ArrowUpRight, Close, Menu, Moon, Sun } from './ui/Icons'

function Logo({ name }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono text-[11px] font-medium tracking-wide text-page">
        {initials(name)}
      </span>
      <span className="text-[15px] font-semibold tracking-tight">{name}</span>
    </a>
  )
}

export default function Nav({ name, links, resume }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()
  const active = useActiveSection(['top', ...links.map((l) => l.id)])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-page/80 backdrop-blur-xl transition-colors duration-300 ${
        scrolled || open ? 'border-line' : 'border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-page"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="shell flex h-16 items-center justify-between gap-4">
        <Logo name={name} />

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  active === l.id ? 'bg-raised font-medium text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} className="icon-btn" aria-label={`Switch to ${nextTheme} theme`} title={`Switch to ${nextTheme} theme`}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          {resume && (
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden !h-10 sm:inline-flex">
              View CV
              <ArrowUpRight size={15} />
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="icon-btn lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <Close size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="shell border-t border-line pb-5 pt-2 lg:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-line py-3.5 text-base ${
                    active === l.id ? 'font-medium text-ink' : 'text-muted'
                  }`}
                >
                  {l.label}
                  <span className="font-mono text-xs text-faint">{l.index}</span>
                </a>
              </li>
            ))}
          </ul>
          {resume && (
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5 w-full sm:hidden">
              View CV
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      )}
    </header>
  )
}
