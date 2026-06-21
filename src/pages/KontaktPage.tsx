import { useEffect } from 'react'

export default function KontaktPage() {
  useEffect(() => {
    document.title = 'Kontakt – Fokus Text'
  }, [])

  return (
    <main className="page page--content">
      <header className="page-hero page-hero--neutral">
        <h1 className="page-hero__title">Kontakt</h1>
      </header>

      <div className="contact-block">
        <a href="mailto:k.rolshausen@fokus-text.de" className="contact-link">
          <span className="contact-link__label">E-Mail</span>
          <span className="contact-link__value">k.rolshausen@fokus-text.de</span>
        </a>
        <a href="tel:+491726767889" className="contact-link">
          <span className="contact-link__label">Telefon</span>
          <span className="contact-link__value">+49 172 67 67 88 9</span>
        </a>
      </div>
    </main>
  )
}
