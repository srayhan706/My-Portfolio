import { useScrollReveal } from '../../hooks/useScrollReveal'
import FillText from './FillText'

// "/TITLE" heading with a giant faded watermark word behind it.
export default function SectionHeading({ title, watermark, aside, align = 'left' }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.4 })
  const centered = align === 'center'

  return (
    <header
      ref={ref}
      className={`relative mb-12 md:mb-16 pt-8 md:pt-12 ${visible ? 'is-visible' : ''}`}
    >
      {watermark && (
        <span
          aria-hidden
          className={`watermark top-0 ${centered ? 'text-center' : 'text-center md:text-left'}`}
        >
          {watermark}
        </span>
      )}
      <div
        className={`relative flex flex-col gap-3 sm:flex-row sm:items-end ${
          centered ? 'items-center text-center sm:justify-center' : 'sm:justify-between'
        }`}
      >
        <h2 className="text-[2.25rem] sm:text-5xl md:text-[3.5rem] font-semibold uppercase leading-[1] tracking-tight">
          <FillText text={`/${title}`} />
        </h2>
        {aside && (
          <p
            className={`text-sm md:text-base font-medium opacity-0 transition-opacity duration-700 delay-500 ${
              visible ? 'opacity-100' : ''
            }`}
          >
            {aside}
          </p>
        )}
      </div>
    </header>
  )
}
