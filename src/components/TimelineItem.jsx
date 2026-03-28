export default function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
      <div className="card" style={{ marginLeft: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>
              {item.title}
            </h3>
            {item.role && (
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>
                {item.role}
              </p>
            )}
          </div>
          <span style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.2em 0.65em',
            whiteSpace: 'nowrap',
            fontFamily: 'JetBrains Mono, monospace',
          }}>
            {item.period}
          </span>
        </div>

        {item.highlights && item.highlights.length > 0 && (
          <ul style={{ margin: '0.75rem 0', paddingLeft: '1.25rem', listStyle: 'disc' }}>
            {item.highlights.map((h, i) => (
              <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                {h}
              </li>
            ))}
          </ul>
        )}

        {item.stack && item.stack.length > 0 && (
          <div className="tags-row" style={{ marginTop: '0.75rem' }}>
            {item.stack.map(tech => (
              <span key={tech} className="tag" style={{ cursor: 'default' }}>{tech}</span>
            ))}
          </div>
        )}

        {(item.links?.github || item.links?.demo) && (
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            {item.links?.github && (
              <a href={item.links.github} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.4rem 0.9rem' }}
                onClick={e => e.stopPropagation()}>
                GitHub →
              </a>
            )}
            {item.links?.demo && (
              <a href={item.links.demo} target="_blank" rel="noopener noreferrer"
                className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.4rem 0.9rem' }}
                onClick={e => e.stopPropagation()}>
                Demo →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
