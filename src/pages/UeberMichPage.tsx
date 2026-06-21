import { useEffect } from 'react'

const paragraphs = [
  'Ich bin Jahrgang 1973. Ehefrau, Mutter, Tochter, Schwester, Tante, Nichte, Cousine und Schwägerin. Also ein Mensch mit vielen Rollen, vielen Blickwinkeln und ziemlich viel Alltagserfahrung.',
  'Ich lebe und arbeite in Berlin und Bludenz. Berlin bringt Tempo, Reibung und Vielfalt. Bludenz bringt Herkunft, Abstand und einen anderen Blick auf die Dinge.',
  'Ich arbeite selbstständig. Und das ist auch gut so.',
  'Ich mag klare Sprache, gute Fragen, echte Begegnungen und kreative Texte, die mehr können als schön klingen.',
]

export default function UeberMichPage() {
  useEffect(() => {
    document.title = 'Über mich – Fokus Text'
  }, [])

  return (
    <main className="page page--content">
      <header className="page-hero page-hero--neutral">
        <h1 className="page-hero__title">Über mich</h1>
      </header>

      <div className="page-intro">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </main>
  )
}
