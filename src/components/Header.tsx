import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../data/routes'
import Nav from './Nav'

const logoSrc = '/logo.png'
const portraitSrc = '/portrait.png'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [portraitError, setPortraitError] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === ROUTES.home

  const closeNav = () => setIsNavOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to={ROUTES.home} className="logo-link" aria-label="Zur Startseite">
          {!logoError ? (
            <img
              src={logoSrc}
              alt="Fokus Text Logo"
              className="logo-image"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="image-placeholder logo-placeholder">
              <span>Logo</span>
            </div>
          )}
        </Link>

        {isHome && (
          <div className="slogan">
            <p>Text ist Kommunikation.</p>
            <p>Kommunikation ist Begegnung.</p>
            <p>Begegnung ist der Anfang von allem.</p>
          </div>
        )}

        <div className="header-right">
          <div className="profile">
            <div className="portrait-wrap">
              {!portraitError ? (
                <img
                  src={portraitSrc}
                  alt="Katharina Rolshausen"
                  className="portrait-image"
                  onError={() => setPortraitError(true)}
                />
              ) : (
                <div className="image-placeholder portrait-placeholder">
                  <span>Foto</span>
                </div>
              )}
            </div>
            <Link to={ROUTES.ueberMich} className="profile-name">
              Katharina Rolshausen
            </Link>
          </div>

          <button
            type="button"
            className="hamburger"
            aria-label="Menü öffnen"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <Nav isOpen={isNavOpen} onClose={closeNav} />
    </header>
  )
}
