import { ArrowUp } from './ui/Icons'

export default function Footer({ name, role }) {
  const year = new Date().getFullYear()

  return (
    <footer className="shell">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {year} {name}
          {role && <span className="text-faint"> · {role}</span>}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}
