import { Link, Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaSection } from '../components/CtaSection'
import { pricingPages } from '../data/pages'

export function PricingPage() {
  const { slug } = useParams<{ slug: string }>()
  const page = slug ? pricingPages[slug] : undefined

  if (!page) {
    return <Navigate to="/pricing/custom-websites" replace />
  }

  return (
    <main>
      <PageHero
        label="Pricing"
        title={page.title}
        subtitle={page.tagline}
        cta={{ label: 'Request a Quote', to: '/contact' }}
      />

      <section className="section">
        <div className="container">
          <p className="section-subtitle">{page.intro}</p>
          <div className="pricing-grid">
            {page.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`pricing-card${tier.highlighted ? ' pricing-card-highlighted' : ''}`}
              >
                {tier.highlighted && <span className="pricing-badge">Popular</span>}
                <h3>{tier.name}</h3>
                <p className="pricing-price">{tier.price}</p>
                <p className="pricing-desc">{tier.description}</p>
                <ul>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-outline'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="pricing-note">
            All packages include a free consultation.{' '}
            <Link to={`/services/${slug}`}>Learn more about {page.title} →</Link>
          </p>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
