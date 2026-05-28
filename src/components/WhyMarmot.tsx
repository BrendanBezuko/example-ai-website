import { whyMarmot } from '../data/content'

export function WhyMarmot() {
  return (
    <section className="section why-section">
      <div className="container">
        <p className="section-label">Why Marmot</p>
        <h2 className="section-title">More than a pretty homepage</h2>
        <p className="section-subtitle">
          We focus on speed, clarity, and outcomes—so your site earns its keep.
        </p>

        <ul className="why-grid">
          {whyMarmot.map((item) => (
            <li key={item.title} className="why-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
