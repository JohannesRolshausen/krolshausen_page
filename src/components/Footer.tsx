import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { ROUTES, SOCIAL_LINKS } from '../data/routes'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to={ROUTES.impressumDatenschutz}>Impressum &amp; Datenschutz</Link>
        <Link to={ROUTES.kontakt}>Kontakt</Link>
      </div>

      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Katharina Rolshausen
      </p>

      <div className="footer-socials">
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
      </div>
    </footer>
  )
}
