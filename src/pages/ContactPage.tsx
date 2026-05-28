import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/PageHero'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <PageHero
        label="Contact Us"
        title="Get in Touch"
        subtitle="We are a team of passionate and creative individuals dedicated to crafting captivating designs that leave a lasting impression."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Reach us directly</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Email</span>
                <a href="mailto:hello@marmotmarketing.ca">hello@marmotmarketing.ca</a>
              </li>
              <li>
                <span className="contact-label">Phone</span>
                <a href="tel:7806761115">780 676 1115</a>
              </li>
              <li>
                <span className="contact-label">Location</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Edmonton,+Alberta,+Canada"
                  target="_blank"
                  rel="noreferrer"
                >
                  Edmonton, Alberta, Canada
                </a>
              </li>
              <li>
                <span className="contact-label">Hours</span>
                <span>Mon–Fri, 9am–5pm MT</span>
              </li>
            </ul>
          </div>

          <div className="contact-form-wrap">
            <h2>Request Information</h2>
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
                  <textarea name="message" rows={5} required />
                </label>
                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
