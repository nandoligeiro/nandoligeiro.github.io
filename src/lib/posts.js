import { pathToSlug } from './helpers'

// Build-time imports — mdPlugin transforms each .md into a JS module
// Each module exports: { frontmatter, html, content, readTime }

const blogModules = import.meta.glob('/content/blog/*.md', { eager: true })
const leadershipModules = import.meta.glob('/content/leadership/*.md', { eager: true })
const portfolioModules = import.meta.glob('/content/portfolio/*.md', { eager: true })

function processEntries(modules) {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const { frontmatter, html, content, readTime } = mod.default
      const slug = frontmatter.slug || pathToSlug(path)
      return { ...frontmatter, slug, html, content, readTime }
    })
    .filter(p => p.published !== false)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
}

export function getBlogPosts() {
  return processEntries(blogModules)
}

export function getBlogPost(slug) {
  return getBlogPosts().find(p => p.slug === slug) || null
}

export function getLeadershipContent() {
  return processEntries(leadershipModules)
}

export function getLeadershipItem(slug) {
  return getLeadershipContent().find(p => p.slug === slug) || null
}

export function getPortfolioItems() {
  return Object.entries(portfolioModules)
    .map(([path, mod]) => {
      const { frontmatter, html, content } = mod.default
      return {
        ...frontmatter,
        slug: frontmatter.slug || pathToSlug(path),
        html,
        content,
      }
    })
    .sort((a, b) => {
      const ya = parseInt(a.period?.split('–')[0] || a.period || 0)
      const yb = parseInt(b.period?.split('–')[0] || b.period || 0)
      return yb - ya
    })
}
