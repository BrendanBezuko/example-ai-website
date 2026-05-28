import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'

const helpfulLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/custom-websites' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
] as const

export function NotFoundPage() {
  return (
    <main className="page">
      <PageHero
        label="404"
        title="This page doesn't exist"
        subtitle="The link may be outdated or mistyped. Try one of these instead."
      />
      <section className="section">
        <div className="container">
          <nav className="not-found-links" aria-label="Helpful links">
            {helpfulLinks.map((link) => (
              <Link key={link.href} to={link.href} className="not-found-link">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="section-cta-text">
            Still stuck? <Link to="/contact">Get in touch</Link> and we&apos;ll point you
            in the right direction.
          </p>
        </div>
      </section>
    </main>
  )
}
