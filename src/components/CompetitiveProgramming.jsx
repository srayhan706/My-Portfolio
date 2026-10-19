import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowUpRight, Codeforces, LeetCode } from './ui/Icons'

function CountUp({ to, run }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!run || !to) return undefined
    let frame
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / 1600, 1)
      setValue(Math.round(to * (1 - Math.pow(1 - t, 4))))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [run, to])

  return value
}

export default function CompetitiveProgramming({ competitiveProgramming }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.3 })

  if (!competitiveProgramming) return null

  const cp = competitiveProgramming
  const profiles = [
    cp.leetcode && {
      label: 'LeetCode',
      Icon: LeetCode,
      url: cp.leetcode.profile ?? `https://leetcode.com/u/${cp.leetcode.username}/`,
      username: cp.leetcode.username,
      rating: cp.leetcode.max_rating,
    },
    cp.codeforces && {
      label: 'Codeforces',
      Icon: Codeforces,
      url: cp.codeforces.profile ?? `https://codeforces.com/profile/${cp.codeforces.username}`,
      username: cp.codeforces.username,
      rating: cp.codeforces.max_rating,
    },
  ].filter((p) => p?.username)

  if (!profiles.length) return null

  return (
    <section className="bg-white px-4 pb-20 sm:px-6 md:pb-28">
      <div ref={ref} className="section-inner grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
        <div className={`reveal flex flex-col justify-end ${visible ? 'is-visible' : ''}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-faint)]">/Problem solving</p>
          <p className="mt-3 max-w-xs text-2xl font-semibold leading-tight tracking-tight">
            Sharpening algorithms on competitive platforms.
          </p>
        </div>
        {profiles.map((p, i) => (
          <a
            key={p.label}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-6 transition-colors duration-500 hover:bg-[var(--color-ink)] hover:text-white ${
              visible ? 'is-visible' : ''
            }`}
            style={{ transitionDelay: `${150 + i * 120}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <p.Icon /> {p.label}
              </span>
              <ArrowUpRight className="transition-transform duration-500 group-hover:rotate-45" />
            </div>
            <p className="font-wide mt-10 text-6xl font-extrabold tracking-tight tabular-nums">
              <CountUp to={p.rating} run={visible} />
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)] transition-colors group-hover:text-white/60">
              Max rating · @{p.username}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
