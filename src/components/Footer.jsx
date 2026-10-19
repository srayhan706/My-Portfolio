import { Logo } from './Nav'

export default function Footer({ name, contact }) {
  const year = new Date().getFullYear()

  return (
    <footer className="shell pb-6 pt-2">
      <div className="flex flex-col items-center justify-between gap-4 rounded-[22px] bg-white/60 px-5 py-3 sm:flex-row">
        <Logo name={name} muted />
        <p className="text-sm text-[var(--color-faint)]">©{year}</p>
        {contact?.email && (
          <a href={`mailto:${contact.email}`} className="btn-dark !py-2.5">
            Book a call
          </a>
        )}
      </div>
    </footer>
  )
}
