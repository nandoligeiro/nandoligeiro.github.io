import { useNavigate } from 'react-router-dom'
import { formatDate } from '../lib/helpers'
import TagChip from './TagChip'

export default function PostCard({ post, basePath = '/blog' }) {
  const navigate = useNavigate()

  return (
    <article
      className="post-card animate-slide-up"
      onClick={() => navigate(`${basePath}/${post.slug}`)}
      role="link"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && navigate(`${basePath}/${post.slug}`)}
    >
      <div className="post-card-tags">
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
