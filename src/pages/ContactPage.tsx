import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'

const contactMethods = [
  {
    label: 'Email',
    value: 'hello@marmotmarketing.ca',
    href: 'mailto:hello@marmotmarketing.ca',
  },
  {
    label: 'Phone',
    value: '780 676 1115',
    href: 'tel:7806761115',
  },
  {
    label: 'Location',
    value: 'Edmonton, Alberta',
    href: 'https://www.google.com/maps/search/?api=1&query=Edmonton,+Alberta,+Canada',
    external: true,
  },
  {
    label: 'Hours',
    value: 'Mon–Fri, 9am–5pm MT',
  },
] as const

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page">
      <PageHero
        label="Contact"
        title="Tell us what you're building"
        subtitle="Share your goals and timeline—we typically reply within one business day with a clear next step."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2 className="section-title section-title-left">Reach us directly</h2>
            <p className="page-section-lead">
              Prefer email or a quick call? Use whichever works—no ticket queues or
              outsourced support lines.
            </p>

            <ul className="contact-cards">
              {contactMethods.map((method) => (
                <li key={method.label} className="contact-card">
                  <span className="contact-label">{method.label}</span>
                  {'href' in method && method.href ? (
                    <a
                      href={method.href}
                      {...('external' in method && method.external
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="contact-card-value">{method.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <nav className="contact-quick-links" aria-label="Helpful links">
              <Link to="/portfolio">View our work</Link>
              <Link to="/faq">Read the FAQ</Link>
              <Link to="/pricing/custom-websites">See pricing</Link>
            </nav>
          </div>

          <div className="contact-form-wrap">
            <h2>Request information</h2>
            <p className="contact-form-intro">
              A few details help us respond with the right recommendations—website,
              SEO, ads, or something else entirely.
            </p>
            {submitted ? (
              <p className="form-success">
                Thanks for reaching out—we&apos;ll get back to you within one business day.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input type="text" name="name" required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="promo" />
                  I agree to receive the occasional promotion offering
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="What are you looking to build? Any timeline or budget in mind?"
                  />
                </label>
                <button type="submit" className="btn btn-primary btn-lg">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
