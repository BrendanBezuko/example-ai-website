import { Link } from 'react-router-dom'
import { stats } from '../data/content'

export function Hero() {
  return (
    <section className="home-hero" aria-label="Introduction">
      <div className="home-hero-glow" aria-hidden="true" />
      <div className="container home-hero-inner">
        <div className="home-hero-copy">
          <p className="home-hero-eyebrow">Alberta-based web studio</p>
          <h1 className="home-hero-title">
            Build a site that&apos;s{' '}
            <span className="home-hero-highlight">fast</span>, findable, and built
            to grow revenue
          </h1>
          <p className="home-hero-lead">
            Marmot Marketing designs custom websites and runs digital campaigns
            for small businesses—no bloated themes, no hand-offs to a call center.
          </p>
          <div className="home-hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a project
            </Link>
            <Link to="/portfolio" className="btn btn-outline btn-lg">
              See our work
            </Link>
          </div>
          <ul className="home-hero-stats" aria-label="Highlights">
            {stats.map((stat) => (
              <li key={stat.label}>
                <span className="home-hero-stat-value">{stat.value}</span>
                <span className="home-hero-stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="home-hero-visual" aria-hidden="true">
          <div className="home-hero-frame">
            <div className="home-hero-frame-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="home-hero-frame-body">
              <div className="home-hero-metric home-hero-metric-primary">
                <span className="home-hero-metric-label">Performance</span>
                <span className="home-hero-metric-value">98</span>
                <span className="home-hero-metric-sub">Lighthouse score</span>
              </div>
              <div className="home-hero-metric">
                <span className="home-hero-metric-label">Organic traffic</span>
                <span className="home-hero-metric-value">+142%</span>
                <span className="home-hero-metric-sub">After SEO launch</span>
              </div>
              <div className="home-hero-metric">
                <span className="home-hero-metric-label">Page load</span>
                <span className="home-hero-metric-value">&lt;1s</span>
                <span className="home-hero-metric-sub">First contentful paint</span>
              </div>
              <div className="home-hero-chart">
                <div className="home-hero-chart-bar" style={{ height: '42%' }} />
                <div className="home-hero-chart-bar" style={{ height: '68%' }} />
                <div className="home-hero-chart-bar" style={{ height: '55%' }} />
                <div className="home-hero-chart-bar" style={{ height: '88%' }} />
                <div className="home-hero-chart-bar" style={{ height: '72%' }} />
                <div className="home-hero-chart-bar is-active" style={{ height: '100%' }} />
              </div>
            </div>
          </div>
          <p className="home-hero-visual-caption">
            Real metrics from client launches—not stock dashboard filler.
          </p>
        </div>
      </div>
    </section>
  )
}
