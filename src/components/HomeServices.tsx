import { Link } from 'react-router-dom'
import { services } from '../data/content'

const bentoLayout: Record<string, string> = {
  'Custom Websites': 'home-bento-featured',
  'Basic Websites': 'home-bento-sm',
  SEO: 'home-bento-sm',
  'Email Campaigns': 'home-bento-sm',
  'SMS Campaigns': 'home-bento-sm',
  'Video Ads': 'home-bento-wide',
  'IT Solutions': 'home-bento-wide',
}

export function HomeServices() {
  return (
    <section id="services" className="section home-services-section" aria-labelledby="home-services-heading">
      <div className="container">
        <p className="section-label">What we do</p>
        <h2 id="home-services-heading" className="section-title section-title-left">
          One team for your site and your growth
        </h2>
        <p className="home-services-intro">
          From launch-ready websites to SEO, email, SMS, and ads—everything stays
          aligned under one roof.
        </p>

        <div className="home-bento">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className={`home-bento-card ${bentoLayout[service.title] ?? 'home-bento-sm'}`}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="home-bento-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
