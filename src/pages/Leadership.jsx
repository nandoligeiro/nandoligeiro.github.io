import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PostCard from '../components/PostCard'
import { getLeadershipContent } from '../lib/posts'

const TYPES = ['article', 'toolkit', 'framework']

export default function Leadership() {
  const [tab, setTab] = useState('articles')
  const all = getLeadershipContent()
  const articles = all.filter(p => !p.type || p.type === 'article')
  const toolkit = all.filter(p => p.type === 'toolkit' || p.type === 'framework')
  const items = tab === 'articles' ? articles : toolkit

  return (
    <>
      <Helmet>
        <title>Liderança Técnica | Fernando Costa</title>
        <meta name="description" content="Artigos e recursos práticos sobre liderança técnica, gestão de times, arquitetura e tomada de decisão." />
      </Helmet>

      <div className="page">
        <div className="page-header">
          <h1 className="page-title">Liderança Técnica</h1>
          <p className="page-subtitle">
            Artigos e toolkit prático para engenheiros que lideram.
          </p>
        </div>

        <div className="tabs">
          <button className={`tab ${tab === 'articles' ? 'active' : ''}`} onClick={() => setTab('articles')}>
            Artigos
          </button>
          <button className={`tab ${tab === 'toolkit' ? 'active' : ''}`} onClick={() => setTab('toolkit')}>
            Toolkit
          </button>
        </div>

        {items.length > 0 ? (
          <div className="grid-2">
            {items.map(item => (
              <PostCard key={item.slug} post={item} basePath="/leadership" />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: 'var(--text-muted)',
            background: 'var(--surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              {tab === 'articles' ? '✎' : '◈'}
            </div>
            <p>Em breve — conteúdo sendo preparado.</p>
          </div>
        )}
      </div>
    </>
  )
}
