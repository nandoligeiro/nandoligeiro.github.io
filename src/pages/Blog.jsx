import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PostCard from '../components/PostCard'
import TagChip from '../components/TagChip'
import { getBlogPosts } from '../lib/posts'

export default function Blog() {
  const allPosts = getBlogPosts()
  const allTags = [...new Set(allPosts.flatMap(p => p.tags || []))]
  const [activeTag, setActiveTag] = useState(null)

  const filtered = activeTag
    ? allPosts.filter(p => p.tags?.includes(activeTag))
    : allPosts

  return (
    <>
      <Helmet>
        <title>Blog | Fernando Costa</title>
        <meta name="description" content="Artigos sobre arquitetura de software, backend, Kotlin, Java, DDD e liderança técnica." />
      </Helmet>

      <div className="page">
        <div className="page-header">
          <h1 className="page-title">Blog</h1>
          <p className="page-subtitle">
            Artigos autorais sobre engenharia de software, arquitetura e backend.
          </p>
        </div>

        {/* Tag filter */}
        {allTags.length > 0 && (
          <div className="tags-row" style={{ marginBottom: '2rem' }}>
            <TagChip
              label="Todos"
              active={!activeTag}
              onClick={() => setActiveTag(null)}
            />
            {allTags.map(tag => (
              <TagChip
                key={tag}
                label={tag}
                active={activeTag === tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              />
            ))}
          </div>
        )}

        {/* Post list */}
        {filtered.length > 0 ? (
          <div className="grid-2">
            {filtered.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-muted)', marginTop: '2rem' }}>
            Nenhum post encontrado para esta tag.
          </p>
        )}
      </div>
    </>
  )
}
