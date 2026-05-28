import './App.css'
import { images } from './images'

const PHONE = '(555) 123-4567'
const PHONE_HREF = 'tel:+15551234567'
const EMAIL = 'hello@reliableplumbing.com'

const services = [
  {
    title: 'Emergency repairs',
    description: 'Burst pipes, major leaks, and no hot water — we respond fast, day or night.',
    image: images.services.emergency,
    alt: 'Plumber responding to an emergency water leak',
  },
  {
    title: 'Drain cleaning',
    description: 'Slow sinks, clogged tubs, and backed-up lines cleared the right way.',
    image: images.services.drain,
    alt: 'Clean bathroom sink and faucet',
  },
  {
    title: 'Water heaters',
    description: 'Repair, replacement, and installation for tank and tankless units.',
    image: images.services.waterHeater,
    alt: 'Residential water heater installation',
  },
  {
    title: 'Fixture installs',
    description: 'Faucets, toilets, disposals, and showers installed cleanly and to code.',
    image: images.services.fixtures,
    alt: 'Modern kitchen faucet fixture',
  },
  {
    title: 'Leak detection',
    description: 'Find hidden leaks before they damage walls, floors, or your bill.',
    image: images.services.leak,
    alt: 'Water droplet close-up representing leak detection',
  },
  {
    title: 'Repiping & remodels',
    description: 'Kitchen, bath, and whole-home plumbing for upgrades and renovations.',
    image: images.services.repipe,
    alt: 'Plumber working on pipes during a remodel',
  },
]

function App() {
  return (
    <div className="site">
      <header className="header">
        <a href="#" className="logo">
          <img src="/images/logo.svg" alt="" width={36} height={36} />
          Reliable Plumbing
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href={PHONE_HREF} className="btn btn-primary header-cta">
          Call {PHONE}
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Licensed & insured · Local family business</p>
            <h1>Plumbing done right, when you need it most</h1>
            <p className="hero-lead">
              From everyday fixes to emergency calls, we show up on time, explain the
              work clearly, and leave your home clean.
            </p>
            <div className="hero-actions">
              <a href={PHONE_HREF} className="btn btn-primary">
                Call for service
              </a>
              <a href="#contact" className="btn btn-secondary">
                Request a quote
              </a>
            </div>
            <ul className="hero-trust">
              <li>Same-day appointments</li>
              <li>Upfront pricing</li>
              <li>100% satisfaction guarantee</li>
            </ul>
          </div>
          <figure className="hero-media">
            <img
              src={images.hero}
              alt="Licensed plumber working under a kitchen sink"
              width={640}
              height={480}
              fetchPriority="high"
            />
          </figure>
        </section>

        <section id="services" className="section services">
          <h2>Our services</h2>
          <p className="section-lead">
            Residential plumbing for homes in the greater metro area.
          </p>
          <ul className="service-grid">
            {services.map((service) => (
              <li key={service.title} className="service-card">
                <img
                  className="service-card-img"
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={260}
                  loading="lazy"
                />
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="section about">
          <figure className="about-media">
            <img
              src={images.about}
              alt="Plumbing tools and equipment ready for a service call"
              width={520}
              height={400}
              loading="lazy"
            />
          </figure>
          <div className="about-inner">
            <h2>Why homeowners call us</h2>
            <p>
              We&apos;ve been fixing pipes and earning trust in this community for over
              15 years. Every job gets a licensed plumber — not a sales pitch. You get
              honest recommendations, fair rates, and work that passes inspection.
            </p>
            <ul className="about-list">
              <li>Licensed, bonded & insured</li>
              <li>Background-checked technicians</li>
              <li>Respect for your home and schedule</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Get in touch</h2>
          <p className="section-lead">
            Call for emergencies. Email or call for estimates — we usually respond within
            one business day.
          </p>
          <div className="contact-cards">
            <div className="contact-card">
              <h3>Phone</h3>
              <a href={PHONE_HREF}>{PHONE}</a>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="contact-card">
              <h3>Hours</h3>
              <p>
                Mon–Fri 7am–6pm
                <br />
                Sat 8am–2pm
                <br />
                24/7 emergency line
              </p>
            </div>
            <div className="contact-card">
              <h3>Service area</h3>
              <p>Metro area and surrounding suburbs within 30 miles.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Reliable Plumbing. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
