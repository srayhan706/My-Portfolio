import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const field =
  'w-full rounded-[18px] border border-white/70 bg-white/55 px-5 text-sm text-[var(--color-ink)] placeholder:text-[#9a98b8] outline-none backdrop-blur transition focus:border-[#9b96f2] focus:bg-white/80'

// No backend: the form composes an email in the visitor's mail app.
export default function Contact({ contact }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.2 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  if (!contact?.email) return null

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = `Project inquiry from ${form.name}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="shell py-8">
      <div
        ref={ref}
        className={`lavender rounded-[24px] px-5 py-14 sm:px-10 md:py-20 ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="reveal text-[2rem] font-medium leading-[1.05] tracking-[-0.025em] md:text-[2.75rem]">
            Contact me to sizzle your project
          </h2>
          <p className="reveal mt-4 text-sm text-[#55546a]" style={{ transitionDelay: '100ms' }}>
            Feel free to reach out with questions. I&apos;m open to new roles, projects, or just a chat.
          </p>
        </div>

        <form onSubmit={submit} className="mx-auto mt-10 grid max-w-[42rem] gap-4 sm:grid-cols-2">
          <label className="reveal" style={{ transitionDelay: '200ms' }}>
            <span className="sr-only">Name</span>
            <input required value={form.name} onChange={update('name')} placeholder="Name" className={`${field} h-12 !rounded-full`} />
          </label>
          <label className="reveal" style={{ transitionDelay: '260ms' }}>
            <span className="sr-only">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="Email"
              className={`${field} h-12 !rounded-full`}
            />
          </label>
          <label className="reveal sm:col-span-2" style={{ transitionDelay: '320ms' }}>
            <span className="sr-only">Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update('message')}
              placeholder="Work description..."
              className={`${field} resize-none py-4`}
            />
          </label>
          <div className="reveal sm:col-span-2" style={{ transitionDelay: '380ms' }}>
            <button type="submit" className="btn-dark w-full">
              Submit
            </button>
            <p className="mt-3 text-center text-xs text-[#6d6b85]">Opens your email app with the message ready to send.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
