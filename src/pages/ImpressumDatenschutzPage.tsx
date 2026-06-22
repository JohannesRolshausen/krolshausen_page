import { useEffect } from 'react'
import {
  DATENSCHUTZ_SECTIONS,
  IMPRESSUM_SECTIONS,
  KONTAKT_SECTION,
  type LegalSection,
} from '../data/impressumDatenschutz'

function LegalBlock({
  title,
  sections,
}: {
  title: string
  sections: LegalSection[]
}) {
  return (
    <section className="legal-block" aria-labelledby={`legal-${title}`}>
      <h2 id={`legal-${title}`} className="legal-block__title">
        {title}
      </h2>
      {sections.map((section) => (
        <div key={section.heading} className="legal-section">
          <h3 className="legal-section__heading">{section.heading}</h3>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ))}
    </section>
  )
}

export default function ImpressumDatenschutzPage() {
  useEffect(() => {
    document.title = 'Impressum & Datenschutz – Fokus Text'
  }, [])

  return (
    <main className="page page--content page--legal">
      <header className="page-hero page-hero--neutral">
        <h1 className="page-hero__title">Impressum &amp; Datenschutz</h1>
      </header>

      <div className="page-intro">
        {KONTAKT_SECTION && (
          <section
            className="legal-block legal-block--kontakt"
            aria-labelledby="legal-kontakt"
          >
            <h2 id="legal-kontakt" className="legal-block__title">
              {KONTAKT_SECTION.heading}
            </h2>
            <div className="legal-section">
              {KONTAKT_SECTION.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}
        <LegalBlock title="Impressum" sections={IMPRESSUM_SECTIONS} />
        <LegalBlock title="Datenschutz" sections={DATENSCHUTZ_SECTIONS} />
      </div>
    </main>
  )
}
