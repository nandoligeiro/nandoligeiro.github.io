import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PostCard from '../components/PostCard'
import { getTechNotes } from '../lib/posts'

const projects = [
  {
    index: '01', status: 'OPEN SOURCE · PYPI', title: 'SpecJam',
    description: 'Um meta-harness para transformar pedidos ambíguos em fluxos de engenharia duráveis, auditáveis e orientados por evidências.',
    tags: ['Agent harness', 'Memory', 'Evaluation', 'Python'], href: 'https://github.com/nandoligeiro/SpecJam', cta: 'Explorar projeto', featured: true,
  },
  {
    index: '02', status: 'OPEN SOURCE · KNOWLEDGE SYSTEM', title: 'Ligeiro Mindware',
    description: 'Conhecimento técnico empacotado como capacidade: skills, referências e ferramentas reutilizáveis por agentes de IA.',
    tags: ['Agent skills', 'Knowledge', 'Evals'], href: 'https://github.com/nandoligeiro/ligeiro-mindware', cta: 'Ver no GitHub',
  },
  {
    index: '03', status: 'ARCHITECTURE LAB', title: 'Fraud Detection Engine',
    description: 'Projeto de referência para detecção de transações em tempo real com arquitetura orientada a eventos, segurança e observabilidade.',
    tags: ['Java 21', 'Kafka', 'DDD', 'OpenTelemetry'], href: 'https://github.com/nandoligeiro/fraud-detection-engine', cta: 'Ler arquitetura',
  },
]

const thesisSteps = ['experience', 'memory', 'retrieval', 'session', 'execution', 'evaluation', 'learned experience']

const talks = [
  { eyebrow: 'DISTRIBUTED SYSTEMS', title: 'Idempotência em Sistemas Distribuídos', description: 'Retries, duplicidade, concorrência e mensageria sem cobrar duas vezes.', href: '/slides/idempotencia-distribuida/' },
  { eyebrow: 'SPEC-DRIVEN DEVELOPMENT', title: 'Spec-Driven AI Engineering', description: 'Da intenção ao código com um case de API Java e Spring Boot.', href: '/slides/spec-driven-java-api/' },
  { eyebrow: 'META-HARNESS', title: 'Harness Engineering', description: 'Da instrução solta a um sistema de execução verificável.', href: '/slides/harness-engineering/' },
  { eyebrow: 'AGENT ENGINEERING', title: 'Modern Agent Skills', description: 'Agent, subagent e skill como responsabilidades diferentes.', href: '/slides/modern-agent-skills/' },
  { eyebrow: 'KNOWLEDGE ARCHITECTURE', title: 'Skill Monorepo', description: 'Governança e distribuição de capacidades reutilizáveis.', href: '/slides/skill-monorepo-architecture/' },
  { eyebrow: 'SKILL ENGINEERING', title: 'Single Skill Architecture', description: 'A anatomia de uma skill pequena, testável e evolutiva.', href: '/slides/single-skill-architecture/' },
]

export default function Home() {
  const recentPosts = getTechNotes().slice(0, 3)

  return (
    <>
      <Helmet>
        <title>Fernando Costa — Software Architecture &amp; AI Engineering</title>
        <meta name="description" content="Projetos, pesquisas e notas de Fernando Costa sobre arquitetura de software, agentes de IA e engenharia de sistemas." />
      </Helmet>

      <section className="signal-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="signal-copy">
          <p className="kicker"><span>Independent engineering lab</span><span>São Paulo · Brazil</span></p>
          <h1>Software architecture<br />for the <em>agentic age.</em></h1>
          <p className="hero-lead">Sou Fernando Costa. Investigo como arquitetura, memória e avaliação tornam agentes de IA parceiros confiáveis na construção de software.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-solid">Explorar trabalhos <span>↓</span></a>
            <Link to="/tech-notes" className="button button-ghost">Ler notas</Link>
            <a href="#talks" className="button button-ghost">Ver talks</a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="orbit-core"><span>HUMAN</span><strong>×</strong><span>AGENT</span></div>
          <div className="orbit-label label-a">CONTEXT</div><div className="orbit-label label-b">JUDGMENT</div><div className="orbit-label label-c">SYSTEMS</div>
        </div>
      </section>

      <section className="ticker" aria-label="Áreas de atuação">
        <span>ARCHITECTURE</span><i>✦</i><span>AGENT SYSTEMS</span><i>✦</i><span>JAVA</span><i>✦</i><span>CLOUD</span><i>✦</i><span>ENGINEERING LEADERSHIP</span>
      </section>

      <section className="editorial-section" id="work">
        <div className="section-heading">
          <p className="section-number">01 / SELECTED WORK</p>
          <h2>Ideias que viraram<br /><em>sistemas.</em></h2>
          <p>Projetos públicos na interseção entre engenharia de software, conhecimento e agentes.</p>
        </div>
        <div className="project-list">
          {projects.map(project => (
            <a className={`project-row${project.featured ? ' featured' : ''}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <span className="project-index">{project.index}</span>
              <div className="project-body"><span className="project-status">{project.status}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              <span className="project-link">{project.cta} ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="thesis-section" id="thesis">
        <div className="section-heading inverse">
          <p className="section-number">02 / CURRENT THESIS</p><h2>Contexto certo.<br /><em>Na hora certa.</em></h2>
          <p>Um agente não melhora apenas com mais contexto. Ele melhora quando experiência vira memória governada, recuperada e avaliada.</p>
        </div>
        <div className="thesis-flow">{thesisSteps.map((step, index) => <div className="thesis-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>)}</div>
        <blockquote>“Software confiável não nasce do prompt perfeito. Nasce de um sistema que sabe aprender sem esquecer de verificar.”</blockquote>
      </section>

      {recentPosts.length > 0 && (
        <section className="editorial-section" id="notes">
          <div className="section-heading horizontal"><div><p className="section-number">03 / FIELD NOTES</p><h2>Pensamento em<br /><em>movimento.</em></h2></div><p>Arquitetura, agentes e decisões de engenharia — escritos enquanto as ideias ainda estão quentes.</p></div>
          <div className="notes-grid">{recentPosts.map(post => <PostCard key={post.slug} post={post} />)}</div>
          <Link className="text-link" to="/tech-notes">Todas as notas <span>→</span></Link>
        </section>
      )}

      <section className="talks-section" id="talks">
        <div className="section-heading horizontal"><div><p className="section-number">04 / TALKS &amp; VISUAL ESSAYS</p><h2>Ideias feitas para<br /><em>circular.</em></h2></div><p>Apresentações autorais para explicar engenharia moderna sem transformar complexidade em fumaça.</p></div>
        <div className="talk-grid">{talks.map((talk, index) => <a href={talk.href} className="talk-card" key={talk.title}><span className="talk-index">0{index + 1}</span><div><span>{talk.eyebrow}</span><h3>{talk.title}</h3><p>{talk.description}</p></div><b>↗</b></a>)}</div>
      </section>

      <section className="closing-section" id="about">
        <p className="section-number">05 / ABOUT</p><h2>Engenharia continua sendo<br />um trabalho <em>humano.</em></h2>
        <p>IA amplia a execução. Arquitetura sustenta as escolhas. Julgamento conecta as duas coisas.</p>
        <div className="closing-links"><a href="https://github.com/nandoligeiro" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/nandoligeiro" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </section>
    </>
  )
}
