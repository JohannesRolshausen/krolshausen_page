import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PAGE_CONTENT } from '../data/pageContent'
// import BlogSection from './BlogSection'

export default function ContentPage() {
  const { pathname } = useLocation()
  const content = PAGE_CONTENT[pathname]

  useEffect(() => {
    if (content) {
      document.title = `${content.title} – Fokus Text`
    }
  }, [content])

  if (!content) {
    return <main className="page page--sub" />
  }

  return (
    <main className="page page--content">
      <header className={`page-hero page-hero--${content.color}`}>
        <h1 className="page-hero__title">{content.title}</h1>
      </header>

      <div className="page-intro">
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {content.cta && (
        <section className={`page-cta page-cta--${content.color}`}>
          <span className="page-cta__label">{content.cta.label}</span>
          <h2 className="page-cta__title">{content.cta.title}</h2>
          {content.cta.text && <p className="page-cta__text">{content.cta.text}</p>}
          <a
            className="page-cta__button"
            href={content.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{content.cta.buttonLabel}</span>
            <svg
              className="page-cta__arrow"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h13" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </section>
      )}

      {/* Blog – wird später wieder aktiviert
      {content.showBlog && (
        <BlogSection
          posts={content.blogPosts ?? []}
          accentColor={content.color}
          basePath={pathname}
        />
      )}
      */}
    </main>
  )
}
