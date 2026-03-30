import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/mission', label: 'Mission' },
  { to: '/research', label: 'Research' },
  { to: '/team', label: 'People' },
]

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <Link to="/" className="nav__logo">Conformal Labs</Link>

        <button
          className={`nav__mobile-toggle ${mobileOpen ? 'nav__mobile-toggle--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`}>
          {NAV_ITEMS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav__link ${pathname === to ? 'nav__link--active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {children}
      </main>

      <footer className="footer">
        <span className="footer__text">&copy; {new Date().getFullYear()} Conformal Labs</span>
        <ul className="footer__links">
          {NAV_ITEMS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="footer__link">{label}</Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}
