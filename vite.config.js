import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const SITE_URL = 'https://nandoligeiro.github.io'

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function ensureAbsoluteUrl(url = '/') {
  if (!url) return SITE_URL
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return new URL(url, `${SITE_URL}/`).toString()
}

function createSocialHtml(template, metadata) {
  const {
    title,
    description,
    canonicalUrl,
    imageUrl,
    imageAlt,
  } = metadata

  return template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${escapeHtml(description)}"`)
    .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${escapeHtml(title)}"`)
    .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${escapeHtml(description)}"`)
    .replace(
      /<meta property="og:type" content=".*?"\s*\/>/,
      `<meta property="og:type" content="article" />\n    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />\n    <meta property="og:image" content="${escapeHtml(imageUrl)}" />\n    <meta property="og:image:secure_url" content="${escapeHtml(imageUrl)}" />\n    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="${escapeHtml(title)}" />\n    <meta name="twitter:description" content="${escapeHtml(description)}" />\n    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />\n    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
    )
}

function collectTechNotes() {
  const sources = [
    { dir: 'content/blog', source: 'blog' },
    { dir: 'content/leadership', source: 'leadership' },
  ]

  return sources.flatMap(({ dir, source }) => {
    if (!fs.existsSync(dir)) return []

    return fs.readdirSync(dir)
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(dir, file)
        const raw = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(raw)
        if (data.published === false) return null

        const slug = data.slug || file.replace(/\.md$/, '')
        return {
          title: data.title || slug,
          description: data.excerpt || 'Tech Notes by Fernando Costa',
          slug,
          source,
          cover: data.cover || '/tech-notes/specjam.png',
          coverAlt: data.coverAlt || data.title || slug,
        }
      })
      .filter(Boolean)
  })
}

function socialPreviewPagesPlugin() {
  return {
    name: 'social-preview-pages',
    closeBundle() {
      const distDir = path.resolve('dist')
      const indexPath = path.join(distDir, 'index.html')

      if (!fs.existsSync(indexPath)) return

      const template = fs.readFileSync(indexPath, 'utf8')
      const notes = collectTechNotes()

      notes.forEach(note => {
        const canonicalUrl = `${SITE_URL}/tech-notes/${note.slug}/`
        const imageUrl = ensureAbsoluteUrl(note.cover)
        const html = createSocialHtml(template, {
          title: `${note.title} | Tech Notes`,
          description: note.description,
          canonicalUrl,
          imageUrl,
          imageAlt: note.coverAlt,
        })

        const targets = [
          path.join(distDir, 'tech-notes', note.slug, 'index.html'),
          path.join(distDir, note.source, note.slug, 'index.html'),
        ]

        targets.forEach(target => {
          fs.mkdirSync(path.dirname(target), { recursive: true })
          fs.writeFileSync(target, html)
        })
      })
    },
  }
}

function mdPlugin() {
  return {
    name: 'md-plugin',
    async transform(code, id) {
      if (!id.endsWith('.md')) return null

      const { data: frontmatter, content } = matter(code)

      const result = await remark()
        .use(remarkGfm)
        .use(remarkHtml, { sanitize: false })
        .process(content)

      const html = result.toString()
      const words = content.trim().split(/\s+/).length
      const readTime = `${Math.ceil(words / 200)} min de leitura`

      return {
        code: `export default ${JSON.stringify({ frontmatter, html, content, readTime })}`,
        map: null,
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), mdPlugin(), socialPreviewPagesPlugin()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
