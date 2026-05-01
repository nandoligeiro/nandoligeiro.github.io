import { useMemo, useState } from 'react'

const SITE_URL = 'https://nandoligeiro.github.io'

function buildCanonicalShareUrl(url) {
  if (!url) return SITE_URL

  const current = new URL(url)
  const pathname = current.pathname.endsWith('/') ? current.pathname : `${current.pathname}/`
  return `${current.origin}${pathname}`
}

export default function ShareActions({ title, excerpt }) {
  const [copied, setCopied] = useState(false)
  const canShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'
  const url = typeof window !== 'undefined' ? buildCanonicalShareUrl(window.location.href) : SITE_URL

  const shareLinks = useMemo(() => {
    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(title)
    const encodedText = encodeURIComponent(`${title} - ${excerpt}`)

    return [
      {
        label: 'LinkedIn',
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      },
      {
        label: 'X',
        href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      },
      {
        label: 'WhatsApp',
        href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      },
    ]
  }, [excerpt, title, url])

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  async function handleNativeShare() {
    if (!canShare) return

    try {
      await navigator.share({
        title,
        text: excerpt,
        url,
      })
    } catch {
      return
    }
  }

  return (
    <div className="share-actions">
      <span className="share-actions-label">Compartilhar</span>
      <div className="share-actions-row">
        {canShare && (
          <button type="button" className="share-button" onClick={handleNativeShare}>
            Share
          </button>
        )}

        <button type="button" className="share-button" onClick={handleCopyLink}>
          {copied ? 'Link copiado' : 'Copiar link'}
        </button>

        {shareLinks.map(link => (
          <a
            key={link.label}
            className="share-button share-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
