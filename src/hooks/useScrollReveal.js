import { useEffect, useRef, useState } from 'react'

// Fires once, as soon as the element's top edge is a little way into the viewport,
// so tall sections reveal just as reliably as short ones.
export function useScrollReveal({ threshold = 0, rootMargin = '0px 0px -80px 0px' } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}
