import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../data/routes'

interface NavProps {
  isOpen: boolean
  onClose: () => void
}

export default function Nav({ isOpen, onClose }: NavProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <>
      <button
        type="button"
        className={`nav-overlay ${isOpen ? 'nav-overlay--visible' : ''}`}
        aria-label="Menü schließen"
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      />
      <nav
        className={`nav-panel ${isOpen ? 'nav-panel--open' : ''}`}
        aria-hidden={!isOpen}
      >
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="nav-link" onClick={onClose}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
