import { Helmet } from 'react-helmet-async'
import NewsletterForm from '../components/NewsletterForm'

const communityLinks = [
  {
    icon: '💼',
    label: 'LinkedIn',
    description: 'Conexões profissionais e posts curtos sobre engenharia.',
    href: 'https://linkedin.com/in/nandoligeiro',
    handle: 'linkedin.com/in/nandoligeiro',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    description: 'Código aberto, projetos pessoais e contribuições.',
    href: 'https://github.com/nandoligeiro',
    handle: 'github.com/nandoligeiro',
  },
  {
    icon: '📸',
    label: 'Instagram',
    description: 'Bastidores da vida de engenheiro e dicas rápidas.',
    href: 'https://instagram.com/nandoligeiro',
    handle: '@nandoligeiro',
  },
]

export default function Community() {
  return (
    <>
      <Helmet>
        <title>Comunidade | Fernando Costa</title>
        <meta name="description" content="Conecte-se com Fernando Costa — LinkedIn, GitHub, Instagram e newsletter de engenharia de software." />
      </Helmet>

      <div className="page">
        <div className="page-header">
          <h1 className="page-title">Comunidade</h1>
          <p className="page-subtitle">
            Onde me encontrar e como ficar por dentro do conteúdo.
          </p>
        </div>

        {/* Social links */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Redes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {communityLinks.map(({ icon, label, description, href, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="community-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="community-icon">{icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, marginBottom: '0.2rem' }}>{label}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{description}</div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'JetBrains Mono', whiteSpace: 'nowrap' }}>
                  {handle}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section>
          <div style={{
            background: 'linear-gradient(135deg, var(--surface) 0%, rgba(249,115,22,0.05) 100%)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
          }}>
            <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              Newsletter
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', lineHeight: 1.7 }}>
              Artigos sobre arquitetura de software, liderança técnica e engenharia backend diretamente no seu email.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginBottom: '1.75rem' }}>
              Sem spam. Frequência mensal ou quando tiver algo que realmente valha.
            </p>
            <NewsletterForm />
          </div>
        </section>

        {/* Contact */}
        <section style={{ marginTop: '2.5rem', marginBottom: '4rem' }}>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>✉️</span>
            <div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, marginBottom: '0.2rem' }}>Email</div>
              <a href="mailto:nandoligeiro@gmail.com" style={{ color: 'var(--primary)', fontSize: '0.9rem', fontFamily: 'JetBrains Mono' }}>
                nandoligeiro@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
