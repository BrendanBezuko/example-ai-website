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

  const hasPricing = slug === 'basic-websites' || slug === 'custom-websites'

  return (
    <main className="page">
      <PageHero
        label="Services"
        title={page.title}
        subtitle={page.tagline}
        cta={{ label: 'Get started', to: '/contact' }}
      />

      <section className="section page-intro-section">
        <div className="container">
          <p className="prose lead page-service-lead">{page.intro}</p>
          <ul className="highlight-grid">
            {page.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {hasPricing && (
            <p className="pricing-link-wrap">
              <Link to={`/pricing/${slug}`} className="btn btn-outline">
                View pricing →
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">How we work</p>
          <h2 className="section-title section-title-left">From consultation to launch</h2>
          <p className="page-section-lead">
            A clear process with checkpoints—so you always know what&apos;s next and why.
          </p>
          <ol className="home-process-list page-process-list">
            {page.process.map((step, i) => (
              <li key={step.title} className="home-process-step">
                <span className="home-process-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection className="home-cta-section" />
    </main>
  )
}
