export default function Hero({ about, contact }) {
  if (!about) return null

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 md:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_28%)]" />
      <div className="max-w-6xl mx-auto grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="order-2 lg:order-1">
          <p className="text-cyan-400 font-mono text-sm mb-4">Hello, I&apos;m</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {about.name}
          </h1>
          <p className="text-xl md:text-2xl text-emerald-400/90 mt-3">{about.title}</p>
          <p className="text-slate-300 mt-6 text-lg leading-relaxed max-w-2xl">{about.tagline}</p>
          <p className="text-slate-500 mt-5 text-base leading-7 max-w-2xl">{about.summary}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition"
            >
              View projects
            </a>
            {contact?.resume && (
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg text-slate-300 border border-slate-600 hover:border-emerald-500/50 hover:text-emerald-400 transition"
              >
                View CV
              </a>
            )}
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg text-slate-300 border border-slate-600 hover:border-cyan-500/50 hover:text-cyan-400 transition"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-400/15 to-transparent blur-3xl" />
            <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 p-3 shadow-[0_24px_80px_rgba(3,7,18,0.65)] backdrop-blur md:h-[400px] md:w-[400px]">
              <div className="overflow-hidden rounded-full border border-slate-800 bg-slate-950">
                <img
                  src="/f.png"
                  alt="Portrait of Md Shariful Islam Rayhan"
                  className="h-[296px] w-[296px] object-cover object-top md:h-[372px] md:w-[372px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
