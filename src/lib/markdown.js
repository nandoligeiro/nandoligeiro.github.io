import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

/**
 * Converts markdown string to HTML string.
 */
export async function markdownToHtml(content) {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content)
  return result.toString()
}
