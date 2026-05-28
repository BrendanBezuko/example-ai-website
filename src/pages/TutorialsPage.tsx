import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaSection } from '../components/CtaSection'
import { tutorials } from '../data/pages'

export function TutorialsPage() {
  return (
    <main className="page">
      <PageHero
        label="Resources"
        title="Practical guides for the web"
        subtitle="Short, actionable tutorials on websites, SEO, and performance—written for small business owners and builders."
      />

      <section className="section">
        <div className="container">
          <div className="tutorials-grid">
            {tutorials.map((tutorial, index) => (
              <article key={tutorial.title} className="tutorial-card">
                <span className="tutorial-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="tutorial-category">{tutorial.category}</span>
                <h2>{tutorial.title}</h2>
                <p>{tutorial.description}</p>
                <span className="tutorial-status">Coming soon</span>
              </article>
            ))}
          </div>
          <p className="section-cta-text">
            Want something covered?{' '}
            <Link to="/contact">Suggest a topic</Link> and we&apos;ll prioritize it.
          </p>
        </div>
      </section>

      <CtaSection className="home-cta-section" />
    </main>
  )
}
