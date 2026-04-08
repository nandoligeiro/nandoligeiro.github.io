import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import MarkdownRenderer from '../components/MarkdownRenderer'
import TagChip from '../components/TagChip'
import { formatDate } from '../lib/helpers'
import { getLeadershipItem, getLeadershipContent } from '../lib/posts'

export default function LeadershipPost() {
  const { slug } = useParams()
  const [progress, setProgress] = useState(0)

  const post = getLeadershipItem(slug)
  const allPosts = getLeadershipContent()
  const idx = allPosts.findIndex(p => p.slug === slug)
  const prev = allPosts[idx + 1] || null
  const next = allPosts[idx - 1] || null

  // Reading progress bar
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
        <h1 style={{ color: 'var(--primary)', fontFamily: 'Space Grotesk' }}>Conteúdo não encontrado</h1>
        <Link to="/leadership" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>← Voltar para Liderança</Link>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Liderança Técnica</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Progress bar */}
      <div className="read-progress" style={{ width: `${progress}%` }} />

      <div className="page" style={{ maxWidth: '760px' }}>
        {/* Back */}
        <Link to="/leadership" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '2rem' }}>
          ← Liderança
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="tags-row" style={{ marginBottom: '1rem' }}>
            {(post.tags || []).map(tag => <TagChip key={tag} label={tag} />)}
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', flexWrap: 'wrap', alignItems: 'center' }}>
            <span>{formatDate(post.date)}</span>
            {post.readTime && <span>·</span>}
            {post.readTime && <span>{post.readTime}</span>}
            {post.type && <span className="badge-type">{post.type}</span>}
          </div>
        </div>

        <div className="divider" />

        {/* Content */}
        <MarkdownRenderer html={post.html || ''} />

        <div className="divider" style={{ marginTop: '3rem' }} />

        {/* Prev / Next */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem', marginBottom: '4rem' }}>
          {prev ? (
            <Link to={`/leadership/${prev.slug}`} style={{
              background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem',
              transition: 'var(--transition)', display: 'block', textDecoration: 'none',
            }}
              onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>← Anterior</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{prev.title}</div>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={`/leadership/${next.slug}`} style={{
              background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem',
              transition: 'var(--transition)', display: 'block', textAlign: 'right', textDecoration: 'none',
            }}
              onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Próximo →</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{next.title}</div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </>
  )
}
