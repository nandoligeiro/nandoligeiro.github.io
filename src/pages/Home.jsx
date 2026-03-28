import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PostCard from '../components/PostCard'
import NewsletterForm from '../components/NewsletterForm'
import { getBlogPosts } from '../lib/posts'

const stackChips = [
  'Java', 'Kotlin', 'Spring Boot', 'AWS', 'EKS', 'Kafka',
  'Redis', 'PostgreSQL', 'MongoDB', 'Docker', 'OpenTelemetry', 'DDD',
]

export default function Home() {
  const recentPosts = getBlogPosts().slice(0, 3)

  return (
    <>
      <Helmet>
        <title>Fernando Costa | Engenheiro de Software</title>
        <meta name="description" content="Portal de engenharia, liderança técnica, portfólio e blog de Fernando Costa — Software Engineer & Tech Lead em São Paulo." />
      </Helmet>

      {/* — Hero -------------------------------------------- */}
      <section className="hero animate-fade-in" style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(249,115,22,0.06) 0%, transparent 60%)' }}>
        <p className="hero-eyebrow">// Software Engineering &amp; Leadership</p>
        <h1 className="hero-title">
          Olá, sou<br />
          <span>Fernando Costa</span>
        </h1>
        <p className="hero-sub">
          Engenheiro de Software e Arquiteto de Soluções especializado em sistemas cloud-native,
          Java, Kotlin e Spring Boot. Tech Lead apaixonado por boas práticas, DDD e observabilidade.
        </p>
        <div className="hero-actions">
          <Link to="/blog" className="btn btn-primary">✎ Ver Blog</Link>
          <Link to="/portfolio" className="btn btn-outline">◉ Portfólio</Link>
        </div>
        <div className="hero-stack">
          {stackChips.map(tech => (
            <span key={tech} className="stack-chip">{tech}</span>
          ))}
        </div>
      </section>

      {/* — Recent posts ------------------------------------ */}
      {recentPosts.length > 0 && (
        <section className="home-section" style={{ borderTop: '1px solid var(--border)' }}>
          <h2 className="home-section-title">Posts Recentes</h2>
          <div className={recentPosts.length === 1 ? '' : 'grid-2'} style={recentPosts.length >= 3 ? { gridTemplateColumns: 'repeat(3, 1fr)' } : {}}>
            {recentPosts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/blog" className="btn btn-outline">Ver todos os posts →</Link>
          </div>
        </section>
      )}

      {/* — Newsletter CTA ---------------------------------- */}
      <section className="home-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--surface) 0%, rgba(249,115,22,0.05) 100%)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
        }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            Newsletter de Engenharia
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '480px' }}>
            Receba artigos sobre arquitetura, liderança técnica e engenharia de software diretamente no seu inbox.
            Sem spam. Apenas conteúdo que vale.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <div style={{ height: '4rem' }} />
    </>
  )
}
