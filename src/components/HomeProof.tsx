import { Link } from 'react-router-dom'
import { cities } from '../data/content'

export function HomeProof() {
  return (
    <section className="section home-proof-section" aria-labelledby="home-proof-heading">
      <div className="container home-proof-inner">
        <div className="home-proof-copy">
          <h2 id="home-proof-heading" className="section-title section-title-left">
            Helping Alberta businesses thrive online
          </h2>
          <p>
            We&apos;re developers and marketers who build lightning-fast sites and
            campaigns that tie back to real business outcomes—not vanity traffic
            reports.
          </p>
          <p>
            From first sketch to launch and beyond, you work directly with the
            people building your site. Clear timelines, honest recommendations,
            and support rooted in the communities we serve.
          </p>
          <nav className="inline-links" aria-label="Popular pages">
            <Link to="/pricing/custom-websites">View pricing</Link>
            <span aria-hidden="true">·</span>
            <Link to="/about">About the team</Link>
            <span aria-hidden="true">·</span>
            <Link to="/contact">Get in touch</Link>
          </nav>
        </div>

        <div className="home-proof-locations">
          <p className="home-proof-locations-label">Serving clients across Canada</p>
          <ul className="home-location-pills">
            {cities.map((city) => (
              <li key={city.name}>
                <span className="home-location-pill">{city.name}</span>
              </li>
            ))}
          </ul>
          <p className="home-proof-locations-note">
            Based in Edmonton with remote delivery for Calgary, Vancouver, Toronto,
            and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}
