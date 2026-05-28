import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content container">
        <h1 className="hero-title">
          <span className="hero-accent">Custom</span>{' '}
          <span className="hero-white">Websites</span>
        </h1>
        <p className="hero-subtitle">
          Lightning-fast sites and marketing that grows your business.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Get Started
        </Link>
      </div>
    </section>
  )
}
