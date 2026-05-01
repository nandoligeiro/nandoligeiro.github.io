import { useNavigate } from 'react-router-dom'
import { formatDate } from '../lib/helpers'
import TagChip from './TagChip'

export default function PostCard({ post, basePath = '/tech-notes' }) {
  const navigate = useNavigate()
  const href = post.href || `${basePath}/${post.slug}`

  return (
    <article
      className="post-card animate-slide-up"
      onClick={() => navigate(href)}
      role="link"
      tabIndex={0}
      onKeyDown={event => event.key === 'Enter' && navigate(href)}
    >
      <div className="post-card-tags">
        {post.sourceLabel && <TagChip label={post.sourceLabel} />}
        {post.type && post.type !== 'article' && <TagChip label={post.type} />}
        {(post.tags || []).slice(0, 3).map(tag => (
          <TagChip key={tag} label={tag} />
        ))}
      </div>
      <h3 className="post-card-title">{post.title}</h3>
      <p className="post-card-excerpt">{post.excerpt}</p>
      <div className="post-card-meta">
        <span>{formatDate(post.date)}</span>
        {post.readTime && <span>{post.readTime}</span>}
      </div>
    </article>
  )
}
