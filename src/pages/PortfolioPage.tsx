import { PageHero } from '../components/PageHero'
import { CtaSection } from '../components/CtaSection'
import { portfolioProjects } from '../data/pages'

export function PortfolioPage() {
  return (
    <main className="page">
      <PageHero
        label="Portfolio"
        title="Work that ships fast and performs"
        subtitle="Recent client projects—each tailored to specific goals, markets, and budgets."
      />

      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioProjects.map((project, index) => (
              <article
                key={project.title}
                className={`portfolio-card${index % 2 === 1 ? ' portfolio-card-reverse' : ''}`}
              >
                <div className="portfolio-image-wrap">
                  <img src={project.image} alt="" loading="lazy" />
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
                      Visit site →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection className="home-cta-section" />
    </main>
  )
}
