export default function Nav() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold text-emerald-400">Rayhan</a>
        <ul className="flex flex-wrap gap-4 md:gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-slate-400 hover:text-cyan-400 transition text-sm">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
