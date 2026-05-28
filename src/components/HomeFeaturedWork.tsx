import { Link } from 'react-router-dom'
import { portfolioProjects } from '../data/pages'

export function HomeFeaturedWork() {
  const [featured, ...rest] = portfolioProjects

  return (
    <section className="section home-work-section" aria-labelledby="home-work-heading">
      <div className="container">
        <div className="home-section-head">
          <div>
            <p className="section-label">Selected work</p>
            <h2 id="home-work-heading" className="section-title section-title-left">
              Sites that earn their keep
            </h2>
          </div>
          <Link to="/portfolio" className="home-section-link">
            View full portfolio →
          </Link>
        </div>

        <div className="home-work-grid">
          <article className="home-work-featured">
            <Link to="/portfolio" className="home-work-card home-work-card-featured">
              <div className="home-work-image">
                <img src={featured.image} alt="" loading="lazy" />
              </div>
              <div className="home-work-body">
                <p className="home-work-category">{featured.category}</p>
                <h3>{featured.title}</h3>
                <p>{featured.description}</p>
                <ul className="home-work-tags">
                  {featured.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </article>

          <div className="home-work-stack">
            {rest.map((project) => (
              <article key={project.title}>
                <Link to="/portfolio" className="home-work-card home-work-card-compact">
                  <div className="home-work-image">
                    <img src={project.image} alt="" loading="lazy" />
                  </div>
                  <div className="home-work-body">
                    <p className="home-work-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
