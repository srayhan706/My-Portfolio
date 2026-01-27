export default function Hero({ about }) {
  if (!about) return null
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-2xl text-center">
        <p className="text-cyan-400 font-mono text-sm mb-4">Hello, I&apos;m</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          {about.name}
        </h1>
        <p className="text-xl text-emerald-400/90 mt-2">{about.title}</p>
        <p className="text-slate-400 mt-6 text-lg leading-relaxed">
          {about.tagline}
        </p>
        <p className="text-slate-500 mt-4 text-base max-w-xl mx-auto">
          {about.summary}
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg text-slate-400 border border-slate-600 hover:border-cyan-500/50 hover:text-cyan-400 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
