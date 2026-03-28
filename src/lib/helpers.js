/**
 * Converts a title to a URL-friendly slug.
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

/**
 * Formats a date string to pt-BR locale.
 * e.g. "2026-03-28" → "28 de março de 2026"
 */
export function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Estimates reading time in minutes.
 */
export function readTime(content) {
  const words = content?.trim().split(/\s+/).length || 0
  const minutes = Math.ceil(words / 200)
  return `${minutes} min de leitura`
}

/**
 * Extract filename (slug) from a glob path.
 * e.g. "/content/blog/meu-post.md" → "meu-post"
 */
export function pathToSlug(path) {
  return path.split('/').pop().replace('.md', '')
}
