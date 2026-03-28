import { useState } from 'react'

export default function NewsletterForm({ compact = false }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      // Serverless function endpoint — update when provider is set
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      // Fallback: show success for demo (remove when API is live)
      setStatus('success')
      setEmail('')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        background: 'rgba(249,115,22,0.1)',
        border: '1px solid var(--primary)',
        borderRadius: 'var(--radius)',
        padding: compact ? '0.75rem 1rem' : '1rem 1.25rem',
        color: 'var(--primary)',
        fontWeight: 600,
        fontSize: '0.9rem',
        maxWidth: '440px',
      }}>
        ✓ Inscrição confirmada! Até o próximo post.
      </div>
    )
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={e => { setEmail(e.target.value); setStatus('idle') }}
        disabled={status === 'loading'}
        style={status === 'error' ? { borderColor: '#ef4444' } : {}}
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? '...' : 'Inscrever'}
      </button>
      {status === 'error' && (
        <p style={{ width: '100%', fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>
          Email inválido ou erro. Tente novamente.
        </p>
      )}
    </form>
  )
}
