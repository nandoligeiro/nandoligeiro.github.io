import { pathToSlug } from './helpers'

const blogModules = import.meta.glob('/content/blog/*.md', { eager: true })
const leadershipModules = import.meta.glob('/content/leadership/*.md', { eager: true })
const portfolioModules = import.meta.glob('/content/portfolio/*.md', { eager: true })

function sortByDateDesc(a, b) {
  return new Date(b.date || 0) - new Date(a.date || 0)
}

function processEntries(modules, source) {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const { frontmatter, html, content, readTime } = mod.default
      const slug = frontmatter.slug || pathToSlug(path)

      return {
        ...frontmatter,
        slug,
        html,
        content,
        readTime,
        type: frontmatter.type || 'article',
        source,
        sourceLabel: source === 'blog' ? 'Blog' : 'Lideranca',
        href: `/tech-notes/${slug}`,
        legacyHref: `/${source}/${slug}`,
      }
    })
    .filter(post => post.published !== false)
    .sort(sortByDateDesc)
}

const blogPosts = processEntries(blogModules, 'blog')
const leadershipPosts = processEntries(leadershipModules, 'leadership')

export function getTechNotes() {
  return [...blogPosts, ...leadershipPosts].sort(sortByDateDesc)
}

export function getTechNote(slug) {
  return getTechNotes().find(post => post.slug === slug) || null
}

export function getBlogPosts() {
  return blogPosts
}

export function getBlogPost(slug) {
  return blogPosts.find(post => post.slug === slug) || null
}

export function getLeadershipContent() {
  return leadershipPosts
}

export function getLeadershipItem(slug) {
  return leadershipPosts.find(post => post.slug === slug) || null
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
      const ya = parseInt(a.period?.split('–')[0] || a.period || 0, 10)
      const yb = parseInt(b.period?.split('–')[0] || b.period || 0, 10)
      return yb - ya
    })
}
