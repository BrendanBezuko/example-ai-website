import { Link } from 'react-router-dom'

type PageHeroProps = {
  label?: string
  title: string
  subtitle?: string
  cta?: { label: string; to: string }
}

export function PageHero({ label, title, subtitle, cta }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="container page-hero-inner">
        {label && <p className="page-hero-eyebrow">{label}</p>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        {cta && (
          <Link to={cta.to} className="btn btn-primary btn-lg">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}
