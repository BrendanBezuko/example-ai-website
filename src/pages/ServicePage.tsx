import { Link, Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaSection } from '../components/CtaSection'
import { servicePages } from '../data/pages'

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const page = slug ? servicePages[slug] : undefined

  if (!page) {
    return <Navigate to="/" replace />
  }

  return (
    <main>
      <PageHero
        label="Services"
        title={page.title}
        subtitle={page.tagline}
        cta={{ label: 'Get Started', to: '/contact' }}
      />

      <section className="section">
        <div className="container content-narrow">
          <p className="prose lead">{page.intro}</p>
          <ul className="highlight-list">
            {page.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {(slug === 'basic-websites' || slug === 'custom-websites') && (
            <p className="pricing-link-wrap">
              <Link to={`/pricing/${slug}`}>View pricing →</Link>
            </p>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Faster Delivery</p>
          <h2 className="section-title">Professional Results Faster</h2>
          <p className="section-subtitle">
            Speed and efficiency without compromising quality—here&apos;s how we work.
          </p>
          <ol className="process-list">
            {page.process.map((step, i) => (
              <li key={step.title} className="process-step">
                <span className="process-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
