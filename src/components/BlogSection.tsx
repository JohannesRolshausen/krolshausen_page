import { Link } from 'react-router-dom'
import type { BlogPost, PageContent } from '../data/pageContent'

interface BlogSectionProps {
  posts: BlogPost[]
  accentColor: PageContent['color']
  basePath: string
}

export default function BlogSection({
  posts,
  accentColor,
  basePath,
}: BlogSectionProps) {
  return (
    <section className="blog-section" aria-labelledby="blog-heading">
      <div className="blog-section__header">
        <h2 id="blog-heading" className="blog-section__title">
          Blog
        </h2>
        <span
          className={`blog-section__accent blog-section__accent--${accentColor}`}
          aria-hidden="true"
        />
      </div>

      {posts.length === 0 ? (
        <p className="blog-section__empty">
          Beiträge folgen in Kürze.
        </p>
      ) : (
        <ul className="blog-list">
          {posts.map((post) => (
            <li key={post.id}>
              <article className="blog-card">
                <Link
                  to={`${basePath}/${post.slug}`}
                  className="blog-card__image-link"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {post.image ? (
                    <img
                      src={post.image}
                      alt=""
                      className="blog-card__image"
                    />
                  ) : (
                    <div className="blog-card__image-placeholder">
                      <span>Foto</span>
                    </div>
                  )}
                </Link>
                <div className="blog-card__body">
                  <Link
                    to={`${basePath}/${post.slug}`}
                    className="blog-card__title"
                  >
                    {post.title}
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
