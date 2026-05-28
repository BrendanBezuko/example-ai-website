import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaSection } from '../components/CtaSection'
import { openRoles, values } from '../data/pages'
import { stats } from '../data/content'

export function AboutPage() {
  return (
    <main className="page">
      <PageHero
        label="About us"
        title="A tech-first studio rooted in Alberta"
        subtitle="We connect skilled builders and marketers with local businesses—shipping fast websites and campaigns you can measure."
        cta={{ label: 'Get in touch', to: '/contact' }}
      />

      <section className="section page-intro-section">
        <div className="container page-intro-grid">
          <div>
            <h2 className="section-title section-title-left">Who we are</h2>
            <p className="prose">
              Marmot Marketing sits at the intersection of development and digital
              marketing—helping Alberta businesses grow with sites and campaigns built
              for real outcomes, not vanity metrics.
            </p>
            <p className="prose">
              The name comes from Marmot Basin, where founder Brendan Bezuko learned to
              snowboard—a local hill that still shapes how we show up for clients: grounded,
              direct, and invested in the community we serve.
            </p>
          </div>
          <ul className="page-stat-strip" aria-label="Highlights">
            {stats.map((stat) => (
              <li key={stat.label}>
                <span className="page-stat-value">{stat.value}</span>
                <span className="page-stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Meet the team</p>
          <h2 className="section-title section-title-left">Founder-led, hands-on delivery</h2>
          <p className="page-section-lead">
            You work directly with the person planning and building your project—no layers
            of account managers between you and the work.
          </p>

          <div className="team-card">
            <div className="team-avatar" aria-hidden="true">
              BB
            </div>
            <div className="team-info">
              <h3>Brendan Bezuko</h3>
              <p className="team-role">Founder / Lead Developer · Edmonton, Alberta</p>
              <p className="prose">
                Passionate developer helping local businesses thrive online. Previously a
                full stack developer at a U.S. healthcare startup, shipping Django and
                React systems on Google Cloud serving thousands of patients. Computer
                science background from the University of Victoria; programming and
                freelancing since 2015 across React, Vue, Next.js, Nuxt, WordPress, and
                more.
              </p>
              <ul className="team-links">
                <li>
                  <a href="mailto:hello@marmotmarketing.ca">hello@marmotmarketing.ca</a>
                </li>
                <li>
                  <a href="https://github.com/BrendanBezuko" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/brendan-bezuko-a7b45428a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">What we value</p>
          <h2 className="section-title section-title-left">How we work with clients</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-icon" aria-hidden="true">
                  {v.icon}
                </span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Join our team</p>
          <h2 className="section-title section-title-left">We&apos;re always looking for talent</h2>
          <p className="page-section-lead">
            Designers, marketers, photographers, and builders who care about Alberta
            businesses—reach out if you want to collaborate.
          </p>
          <div className="roles-grid">
            {openRoles.map((role) => (
              <div key={role.title} className="role-card">
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
          <p className="section-cta-text">
            Interested in joining?{' '}
            <Link to="/contact">Get in touch</Link> and tell us how you can contribute.
          </p>
        </div>
      </section>

      <CtaSection className="home-cta-section" />
    </main>
  )
}
