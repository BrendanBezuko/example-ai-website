import { whyMarmot } from '../data/content'

type WhyMarmotProps = {
  className?: string
}

export function WhyMarmot({ className = '' }: WhyMarmotProps) {
  return (
    <section className={`section why-section ${className}`.trim()}>
      <div className="container">
        <p className="section-label">Why Marmot</p>
        <h2 className="section-title section-title-left">More than a pretty homepage</h2>
        <p className="section-subtitle section-subtitle-left">
          We focus on speed, clarity, and outcomes—so your site earns its keep.
        </p>

        <ul className="why-grid">
          {whyMarmot.map((item, index) => (
            <li key={item.title} className="why-card">
              <span className="why-card-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
