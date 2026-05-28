import { Link } from 'react-router-dom'
import { services } from '../data/content'

const serviceIcons: Record<string, string> = {
  'Custom Websites': '🌐',
  'Basic Websites': '📄',
  SEO: '🔍',
  'Email Campaigns': '✉️',
  'SMS Campaigns': '💬',
  'Video Ads': '🎬',
  'IT Solutions': '⚙️',
}

export function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <p className="section-label">Our Services</p>
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">
          Complete digital marketing solutions to grow your business
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <Link key={service.title} to={service.href} className="service-card">
              <span className="service-icon" aria-hidden="true">
                {serviceIcons[service.title] ?? '✦'}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
