import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { navLinks } from '../data/navigation'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <a href="tel:7806761115" className="top-bar-link">
            780 676 1115
          </a>
          <span className="top-bar-hours">Mon-Fri 9am-5pm</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Logo />

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2" />
                  <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" />
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
                  <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" />
                </>
              )}
            </svg>
          </button>

          <nav
            id="main-nav"
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className={'children' in link && link.children ? 'has-dropdown' : ''}
                  onMouseEnter={() =>
                    'children' in link && link.children
                      ? setOpenDropdown(link.label)
                      : undefined
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {'children' in link && link.children ? (
                    <>
                      <Link to={link.href} className="nav-link" onClick={closeMenu}>
                        {link.label}
                        <svg
                          className="chevron"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 4l4 4 4-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </Link>
                      <ul
                        className={`dropdown ${openDropdown === link.label ? 'is-visible' : ''}`}
                      >
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <NavLink to={child.href} onClick={closeMenu}>
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `nav-link${isActive ? ' nav-link-active' : ''}`
                      }
                      onClick={closeMenu}
                      end={link.href === '/'}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
