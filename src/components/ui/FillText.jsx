// Splits text into characters that ink in one after another once the parent
// gets the `is-visible` class (see .fill-char in index.css). Words stay
// unbreakable so lines only wrap between them.
export default function FillText({ text, step = 28, delay = 0, className = '' }) {
  let index = 0

  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span key={w} aria-hidden>
          {w > 0 && ' '}
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch) => {
              const i = index++
              return (
                <span key={i} className="fill-char" style={{ transitionDelay: `${delay + i * step}ms` }}>
                  {ch}
                </span>
              )
            })}
          </span>
        </span>
      ))}
    </span>
  )
}
