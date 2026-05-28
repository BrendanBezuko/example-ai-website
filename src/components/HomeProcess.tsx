const steps = [
  {
    title: 'Discover',
    description:
      'We learn your goals, audience, and timeline—then recommend what actually moves the needle.',
  },
  {
    title: 'Design & build',
    description:
      'Custom layouts and lean code, with performance and SEO baked in from day one.',
  },
  {
    title: 'Launch & grow',
    description:
      'Go live with tracking in place, then layer SEO, email, or ads as you scale.',
  },
  {
    title: 'Support',
    description:
      'Direct access to the team that built your site—updates, fixes, and honest advice.',
  },
] as const

export function HomeProcess() {
  return (
    <section className="section home-process-section" aria-labelledby="home-process-heading">
      <div className="container">
        <p className="section-label">How it works</p>
        <h2 id="home-process-heading" className="section-title section-title-left">
          From first call to launch in clear steps
        </h2>

        <ol className="home-process-list">
          {steps.map((step, index) => (
            <li key={step.title} className="home-process-step">
              <span className="home-process-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
