import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaSection } from '../components/CtaSection'
import { openRoles, values } from '../data/pages'

export function AboutPage() {
  return (
    <main>
      <PageHero
        label="About Us"
        title="A Tech-First Marketing Company"
        subtitle="Founded in 2024, Marmot Marketing connects talented programmers, animators, marketers, and more with Alberta businesses—fostering local growth through creative, measurable digital work."
        cta={{ label: 'Get in Touch', to: '/contact' }}
      />

      <section className="section">
        <div className="container content-narrow">
          <h2 className="section-title section-title-left">Who We Are</h2>
          <p className="prose">
            Marmot Marketing is at the forefront of enhancing Alberta&apos;s local scene by
            connecting skilled professionals with the community and local businesses. Our
            mission is to foster growth and innovation within the region, providing
            unparalleled expertise and creative solutions.
          </p>
          <p className="prose">
            The name matters to us: founder Brendan Bezuko learned to snowboard at Marmot
            Basin, a local Alberta ski hill that still holds a special place—so when it
            came time to name the company, Marmot felt like the right way to carry that
            connection and passion into the work we do.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Meet the Team</p>
          <h2 className="section-title">Founder-led, hands-on delivery</h2>
          <p className="section-subtitle">
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
          <p className="section-label">Our Mission</p>
          <h2 className="section-title">Connecting Talent with Opportunity</h2>
          <p className="section-subtitle">
            We bridge the gap between Alberta&apos;s creative talent and the businesses that
            need them—helping local companies succeed in an increasingly digital world.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-label">Join Our Team</p>
          <h2 className="section-title">We&apos;re Always Looking for Talent</h2>
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

      <section className="section">
        <div className="container">
          <p className="section-label">What We Value</p>
          <h2 className="section-title">Our Core Principles</h2>
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

      <CtaSection />
    </main>
  )
}
