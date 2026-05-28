import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { portfolioProjects } from '../data/pages'

export function PortfolioPage() {
  return (
    <main>
      <PageHero
        label="Our Work"
        title="Featured Projects"
        subtitle="Recent client work—each project tailored to specific needs and goals."
      />

      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioProjects.map((project) => (
              <article key={project.title} className="portfolio-card">
                <div className="portfolio-image-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="portfolio-body">
                  <p className="portfolio-category">{project.category}</p>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <ul className="tag-list">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {'url' in project && project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-link"
                    >
                      Visit Site →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="section-cta-center">
            <h2>Ready to Start Your Project?</h2>
            <p>Let&apos;s discuss how we can help bring your vision to life.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
