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
