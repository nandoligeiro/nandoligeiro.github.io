import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PostCard from '../components/PostCard'
import TagChip from '../components/TagChip'
import { getTechNotes } from '../lib/posts'

const SOURCE_FILTERS = [
  { value: 'all', label: 'Todos' },
  { value: 'blog', label: 'Blog' },
  { value: 'leadership', label: 'Lideranca' },
]

const TYPE_FILTERS = [
  { value: 'all', label: 'Tudo' },
  { value: 'article', label: 'Artigos' },
  { value: 'toolkit', label: 'Toolkits' },
  { value: 'framework', label: 'Frameworks' },
]

export default function TechNotes() {
  const notes = getTechNotes()
  const [activeSource, setActiveSource] = useState('all')
  const [activeType, setActiveType] = useState('all')
  const [activeTag, setActiveTag] = useState(null)

  const allTags = [...new Set(notes.flatMap(note => note.tags || []))].sort((a, b) => a.localeCompare(b))

  const filtered = notes.filter(note => {
    if (activeSource !== 'all' && note.source !== activeSource) return false
    if (activeType !== 'all' && (note.type || 'article') !== activeType) return false
    if (activeTag && !note.tags?.includes(activeTag)) return false
    return true
  })

  return (
    <>
      <Helmet>
        <title>Tech Notes | Fernando Costa</title>
        <meta
          name="description"
          content="Repositorio unico de artigos, frameworks e toolkits sobre engenharia de software, arquitetura e lideranca tecnica."
        />
      </Helmet>

      <div className="page-wide">
        <div className="page-header">
          <h1 className="page-title">Tech Notes</h1>
          <p className="page-subtitle">
            Todos os artigos, frameworks e toolkits em um unico lugar para navegar por temas de engenharia,
            arquitetura e lideranca tecnica.
          </p>
        </div>

        <div className="filters-panel">
          <div className="filter-group">
            <span className="filter-label">Origem</span>
            <div className="tags-row">
              {SOURCE_FILTERS.map(filter => (
                <TagChip
                  key={filter.value}
                  label={filter.label}
                  active={activeSource === filter.value}
                  onClick={() => setActiveSource(filter.value)}
                />
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Formato</span>
            <div className="tags-row">
              {TYPE_FILTERS.map(filter => (
                <TagChip
                  key={filter.value}
                  label={filter.label}
                  active={activeType === filter.value}
                  onClick={() => setActiveType(filter.value)}
                />
              ))}
            </div>
          </div>

          {allTags.length > 0 && (
            <div className="filter-group">
              <span className="filter-label">Tags</span>
              <div className="tags-row">
                <TagChip
                  label="Todas"
                  active={!activeTag}
                  onClick={() => setActiveTag(null)}
                />
                {allTags.map(tag => (
                  <TagChip
                    key={tag}
                    label={tag}
                    active={activeTag === tag}
                    onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="notes-summary">
          {filtered.length} {filtered.length === 1 ? 'conteudo encontrado' : 'conteudos encontrados'}
        </div>

        {filtered.length > 0 ? (
          <div className="grid-2">
            {filtered.map(note => (
              <PostCard key={note.slug} post={note} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">N</div>
            <p>Nenhuma Tech Note encontrada para os filtros selecionados.</p>
          </div>
        )}
      </div>
    </>
  )
}
