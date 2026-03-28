import { Helmet } from 'react-helmet-async'
import TimelineItem from '../components/TimelineItem'
import { getPortfolioItems } from '../lib/posts'

const personalStack = [
  { label: 'Java', emoji: '☕' },
  { label: 'Kotlin', emoji: '🎯' },
  { label: 'Spring Boot', emoji: '🍃' },
  { label: 'AWS', emoji: '☁️' },
  { label: 'Kafka', emoji: '📨' },
  { label: 'Docker', emoji: '🐳' },
  { label: 'PostgreSQL', emoji: '🐘' },
  { label: 'Redis', emoji: '⚡' },
  { label: 'OpenTelemetry', emoji: '🔭' },
  { label: 'DDD', emoji: '🧩' },
  { label: 'Kotlin Multiplatform', emoji: '📱' },
  { label: 'Android', emoji: '🤖' },
]

export default function Portfolio() {
  const items = getPortfolioItems()

  return (
    <>
      <Helmet>
        <title>Portfólio | Fernando Costa</title>
        <meta name="description" content="Trajetória profissional e projetos de Fernando Costa — Engenheiro de Software especializado em Java, Kotlin e Cloud-Native." />
      </Helmet>

      <div className="page-wide">
        <div className="page-header">
          <h1 className="page-title">Portfólio</h1>
          <p className="page-subtitle">
            Trajetória profissional, projetos e tecnologias.
          </p>
        </div>

        {/* Personal stack */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem' }}>
            Stack Pessoal
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {personalStack.map(({ label, emoji }) => (
              <span key={label} className="stack-chip">
                <span>{emoji}</span> {label}
              </span>
            ))}
          </div>
        </section>

        {/* Summary card */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="card" style={{ background: 'linear-gradient(135deg, var(--surface) 0%, rgba(249,115,22,0.04) 100%)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>
              Resumo Profissional
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.95rem' }}>
              Engenheiro de Software e Arquiteto de Soluções com experiência em sistemas escaláveis e cloud-native
              utilizando Java, Kotlin e Spring Boot. Atuação sólida em Clean Architecture, DDD e soluções na AWS Cloud (EKS, MSK, RDS, Secrets Manager, ElastiCache).
              Foco em APIs resilientes, práticas modernas de engenharia, testes automatizados e observabilidade.
              Também atuo como Tech Lead orientando times de backend e mobile.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { label: '15+ anos', desc: 'de experiência' },
                { label: 'AWS CCP', desc: 'certificado' },
                { label: 'São Paulo', desc: 'Brasil' },
              ].map(({ label, desc }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>{label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Experiência Profissional
          </h2>
          <div className="timeline">
            {items.map((item, i) => (
              <TimelineItem key={item.slug || i} item={item} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section style={{ marginTop: '3rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Formação
          </h2>
          <div className="grid-2">
            {[
              { title: 'Bacharel em Sistemas de Informação', school: 'UNISA', period: '2008–2011' },
              { title: 'Pós-Grad. Marketing Digital e E-Commerce', school: 'SENAC São Paulo', period: '2016–2017' },
            ].map(({ title, school, period }) => (
              <div key={title} className="card">
                <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  {period}
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.25rem' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{school}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section style={{ marginTop: '2rem', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Certificações
          </h2>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {[
              { name: 'AWS Certified Cloud Practitioner', status: 'active' },
              { name: 'AWS Solutions Architect Associate', status: 'planned' },
            ].map(({ name, status }) => (
              <div key={name} style={{
                background: status === 'active' ? 'rgba(249,115,22,0.1)' : 'var(--surface)',
                border: `1px solid ${status === 'active' ? 'rgba(249,115,22,0.4)' : 'var(--border)'}`,
                borderRadius: 'var(--radius)',
                padding: '0.65rem 1rem',
                fontSize: '0.875rem',
                color: status === 'active' ? 'var(--primary)' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span>{status === 'active' ? '✓' : '◌'}</span>
                {name}
                {status === 'planned' && <span style={{ fontSize: '0.72rem', opacity: 0.7 }}>(planejado)</span>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
