import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import TechNotes from './pages/TechNotes'
import TechNotePost from './pages/TechNotePost'
import Portfolio from './pages/Portfolio'
import Community from './pages/Community'

function NotFound() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '4rem', color: 'var(--primary)' }}>404</h1>
      <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Pagina nao encontrada.</p>
    </div>
  )
}

function LegacyTechNotesRedirect() {
  const { slug } = useParams()
  return <Navigate to={slug ? `/tech-notes/${slug}` : '/tech-notes'} replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="tech-notes" element={<TechNotes />} />
        <Route path="tech-notes/:slug" element={<TechNotePost />} />
        <Route path="blog" element={<LegacyTechNotesRedirect />} />
        <Route path="blog/:slug" element={<LegacyTechNotesRedirect />} />
        <Route path="leadership" element={<LegacyTechNotesRedirect />} />
        <Route path="leadership/:slug" element={<LegacyTechNotesRedirect />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
