import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

/**
 * Custom Vite plugin: transforms .md files to JS modules at build time.
 * Runs in Node.js — no browser Buffer issues.
 * Each .md becomes: export default { frontmatter, html, content, readTime }
 */
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
  plugins: [react(), mdPlugin()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
