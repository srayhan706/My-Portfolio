export default function Footer({ name, contact }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-ink)] px-4 py-8 text-white/55 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          © {year} {name}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {contact?.resume && (
            <a href={contact.resume} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Résumé
            </a>
          )}
          {contact?.email && (
            <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
              {contact.email}
            </a>
          )}
          <a href="#top" className="hover:text-white transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
