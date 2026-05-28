import { Link } from 'react-router-dom'

type CtaSectionProps = {
  className?: string
}

export function CtaSection({ className = '' }: CtaSectionProps) {
  return (
    <section
      className={`section cta-section ${className}`.trim()}
      aria-labelledby="cta-heading"
    >
      <div className="container cta-inner">
        <div className="cta-copy">
          <h2 id="cta-heading" className="section-title">
            Tell us what you&apos;re building next
          </h2>
          <p>
            Share your timeline and goals—we&apos;ll reply with a clear path
            forward, whether it&apos;s a new site, SEO, or a full funnel.
          </p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get started
          </Link>
          <Link to="/portfolio" className="btn btn-outline">
            Browse the portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
