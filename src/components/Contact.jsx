export default function Contact({ contact }) {
  if (!contact) return null
  const links = [
    { href: `mailto:${contact.email}`, label: contact.email, icon: '✉' },
    { href: `tel:${contact.phone.replace(/\s/g, '')}`, label: contact.phone, icon: '📞' },
    { href: contact.github, label: 'GitHub', icon: '⌘' },
    { href: contact.linkedin, label: 'LinkedIn', icon: 'in' },
  ]
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Get in touch</h2>
        <p className="text-slate-500 mb-12">Open to collaboration and opportunities</p>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition"
            >
              <span className="text-cyan-400 font-mono text-sm">{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
