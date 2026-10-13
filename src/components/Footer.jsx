export default function Footer({ contact }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] px-5 sm:px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-muted)]">
        <p>© {year} Md Shariful Islam Rayhan</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {contact?.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          )}
          {contact?.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
          )}
          <a href="#about" className="hover:text-white transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
