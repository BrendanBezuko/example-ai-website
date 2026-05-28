import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { footerLinks } from '../data/navigation'

export function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo compact />
          <p className="footer-tagline">Marmot Marketing</p>
        </div>

        <nav className="footer-nav" aria-label="Site map">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer-col">
              <h3>{heading}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer-social">
          {['Facebook', 'Instagram', 'YouTube', 'Google'].map((network) => (
            <a
              key={network}
              href="#"
              className="social-link"
              aria-label={`Marmot Marketing on ${network}`}
            >
              {network[0]}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Marmot Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
