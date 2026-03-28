import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Leadership from './pages/Leadership'
import Portfolio from './pages/Portfolio'
import Community from './pages/Community'

function NotFound() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '4rem', color: 'var(--primary)' }}>404</h1>
      <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Página não encontrada.</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
