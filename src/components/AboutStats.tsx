import { Link } from 'react-router-dom'
import { stats } from '../data/content'

export function AboutStats() {
  return (
    <section className="section about-stats-section">
      <div className="container about-stats-inner">
        <div className="about-copy">
          <h2 className="section-title">Helping Businesses Thrive Online</h2>
          <p>
            We&apos;re expert developers who build lightning-fast websites and
            deliver results-driven digital marketing that grows your business. No
            generic templates—just custom solutions that work.
          </p>
          <p className="about-secondary">
            From first sketch to launch (and after), you work directly with the
            people building your site—clear timelines, honest recommendations,
            and support rooted in Alberta.
          </p>

          <nav className="inline-links" aria-label="Popular pages">
            <Link to="/portfolio">See our work</Link>
            <span aria-hidden="true">·</span>
            <Link to="/pricing/custom-websites">View pricing</Link>
            <span aria-hidden="true">·</span>
            <Link to="/about">About us</Link>
          </nav>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
