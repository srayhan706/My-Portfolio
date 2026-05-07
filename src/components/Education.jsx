export default function Education({ education }) {
  const entries = Array.isArray(education) ? education : education ? [education] : []
  if (!entries.length) return null

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
        <p className="text-slate-500 mb-12">Academic background</p>
        <div className="space-y-6">
          {entries.map((entry) => (
            <div
              key={`${entry.degree}-${entry.institution}`}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:p-8"
            >
              <h3 className="text-lg font-semibold text-white">{entry.degree}</h3>
              <p className="text-emerald-400 mt-1">{entry.institution}</p>
              {entry.location && <p className="text-slate-500 text-sm mt-1">{entry.location}</p>}
              <p className="text-slate-500 text-sm mt-2">{entry.period}</p>
              {(entry.cgpa || entry.gpa) && (
                <p className="text-slate-400 mt-2">
                  CGPA: <span className="text-cyan-400 font-mono">{entry.cgpa || entry.gpa}</span>
                  {entry.note && <span className="text-slate-500 text-sm"> ({entry.note})</span>}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
