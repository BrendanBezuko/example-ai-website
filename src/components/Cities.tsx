import { Link } from 'react-router-dom'
import { cities } from '../data/content'

export function Cities() {
  return (
    <section className="section cities-section">
      <div className="container">
        <p className="section-label">Serving Major Canadian Cities</p>
        <h2 className="section-title">We Serve Clients Across Canada</h2>
        <p className="section-subtitle cities-intro">
          Based in Edmonton with the ability to serve clients across Western
          Canada, we understand the unique business landscape of major Canadian
          cities. Whether you&apos;re in Edmonton, Calgary, Vancouver, or Toronto,
          we&apos;re equipped to deliver exceptional digital marketing and web
          development services tailored to your local market needs.
        </p>

        <div className="cities-grid">
          {cities.map((city) => (
            <article key={city.name} className="city-card">
              <div className="city-image-wrap">
                <img src={city.image} alt={`${city.name} skyline`} loading="lazy" />
              </div>
              <div className="city-body">
                <h3>{city.name}</h3>
                <p>{city.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="cities-cta">
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
