import { useRef, useEffect } from 'react'

export default function MarkdownRenderer({ html }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    // Highlight code blocks if highlight.js is available
    try {
      const hljs = window.hljs
      if (hljs) {
        ref.current.querySelectorAll('pre code').forEach(block => {
          hljs.highlightElement(block)
        })
      }
    } catch {}
    // Open external links in new tab
    ref.current.querySelectorAll('a[href^="http"]').forEach(a => {
      a.setAttribute('target', '_blank')
      a.setAttribute('rel', 'noopener noreferrer')
    })
  }, [html])

  return (
    <div
      ref={ref}
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
