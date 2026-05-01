import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'
import ShareActions from '../components/ShareActions'
import TagChip from '../components/TagChip'
import { formatDate } from '../lib/helpers'
import { getTechNote, getTechNotes } from '../lib/posts'

export default function TechNotePost() {
  const { slug } = useParams()
  const [progress, setProgress] = useState(0)

  const post = getTechNote(slug)
  const allPosts = getTechNotes()
  const idx = allPosts.findIndex(item => item.slug === slug)
  const prev = allPosts[idx + 1] || null
  const next = allPosts[idx - 1] || null

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!post) {
    return (
      <div className="page" style={{ textAlign: 'center', paddingTop: '5rem' }}>
        <h1 style={{ color: 'var(--primary)', fontFamily: 'Space Grotesk' }}>Conteudo nao encontrado</h1>
        <Link to="/tech-notes" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
          Voltar para Tech Notes
        </Link>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Tech Notes</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.cover && <meta property="og:image" content={post.cover} />}
      </Helmet>

      <div className="read-progress" style={{ width: `${progress}%` }} />

      <div className="page article-page">
        <Link to="/tech-notes" className="back-link">
          ← Tech Notes
        </Link>

        <div className="article-header">
          <div className="tags-row" style={{ marginBottom: '1rem' }}>
            {post.sourceLabel && <TagChip label={post.sourceLabel} />}
            {post.type && <TagChip label={post.type} />}
            {(post.tags || []).map(tag => <TagChip key={tag} label={tag} />)}
          </div>

          <h1 className="article-title">{post.title}</h1>

          <div className="article-meta">
            <span>{formatDate(post.date)}</span>
            {post.readTime && <span>{post.readTime}</span>}
          </div>

          <p className="article-excerpt">{post.excerpt}</p>

          <ShareActions title={post.title} excerpt={post.excerpt} />
        </div>

        {post.cover && (
          <figure className="article-cover">
            <img src={post.cover} alt={post.coverAlt || post.title} />
          </figure>
        )}

        <div className="divider" />

        <MarkdownRenderer html={post.html || ''} />

        <div className="divider" style={{ marginTop: '3rem' }} />

        <div className="article-nav">
          {prev ? (
            <Link to={prev.href} className="article-nav-card">
              <div className="article-nav-label">Anterior</div>
              <div className="article-nav-title">{prev.title}</div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link to={next.href} className="article-nav-card article-nav-card-next">
              <div className="article-nav-label">Proximo</div>
              <div className="article-nav-title">{next.title}</div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  )
}
