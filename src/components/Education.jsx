export default function Education({ education }) {
  if (!education) return null
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
        <p className="text-slate-500 mb-12">Academic background</p>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
          <p className="text-emerald-400 mt-1">{education.institution}</p>
          <p className="text-slate-500 text-sm mt-2">{education.period}</p>
          <p className="text-slate-400 mt-2">
            Cumulative GPA: <span className="text-cyan-400 font-mono">{education.gpa}</span>
            {education.note && (
              <span className="text-slate-500 text-sm"> ({education.note})</span>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
