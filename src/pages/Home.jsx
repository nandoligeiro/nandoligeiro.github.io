import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PostCard from '../components/PostCard'
import NewsletterForm from '../components/NewsletterForm'
import { getTechNotes } from '../lib/posts'

const stackChips = [
  'Java', 'Kotlin', 'Spring Boot', 'AWS', 'EKS', 'Kafka',
  'Redis', 'PostgreSQL', 'MongoDB', 'Docker', 'OpenTelemetry', 'DDD',
]

export default function Home() {
  const recentPosts = getTechNotes().slice(0, 3)

  return (
    <>
      <Helmet>
        <title>Fernando Costa | Engenheiro de Software</title>
        <meta name="description" content="Portal de engenharia, tech notes, portfolio e comunidade de Fernando Costa - Software Engineer e Tech Lead em Sao Paulo." />
      </Helmet>

      <section className="hero animate-fade-in" style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(84,138,247,0.06) 0%, transparent 65%)' }}>
        <p className="hero-eyebrow">// Software Engineering &amp; Leadership</p>
        <h1 className="hero-title">
          Ola, sou<br />
          <span>Fernando Costa</span>
        </h1>
        <p className="hero-sub">
          Engenheiro de Software e Arquiteto de Solucoes especializado em sistemas cloud-native,
          Java, Kotlin e Spring Boot. Tech Lead apaixonado por boas praticas, DDD e observabilidade.
        </p>
        <div className="hero-actions">
          <Link to="/tech-notes" className="btn btn-primary">Ver Tech Notes</Link>
          <Link to="/portfolio" className="btn btn-outline">Ver Portfolio</Link>
        </div>
        <div className="hero-stack">
          {stackChips.map(tech => (
            <span key={tech} className="stack-chip">{tech}</span>
          ))}
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="home-section" style={{ borderTop: '1px solid var(--border)' }}>
          <h2 className="home-section-title">Tech Notes Recentes</h2>
          <div className={recentPosts.length === 1 ? '' : 'grid-2'} style={recentPosts.length >= 3 ? { gridTemplateColumns: 'repeat(3, 1fr)' } : {}}>
            {recentPosts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/tech-notes" className="btn btn-outline">Ver todas as Tech Notes -&gt;</Link>
          </div>
        </section>
      )}

      <section className="home-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--surface) 0%, rgba(84,138,247,0.04) 100%)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
        }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            Newsletter de Engenharia
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '480px' }}>
            Receba artigos sobre arquitetura, lideranca tecnica e engenharia de software diretamente no seu inbox.
            Sem spam. Apenas conteudo que vale.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <div style={{ height: '4rem' }} />
    </>
  )
}
