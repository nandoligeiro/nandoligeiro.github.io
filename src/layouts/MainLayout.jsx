import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const home = pathname === '/'

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="wordmark" onClick={() => setMenuOpen(false)}><span>FC</span><strong>Fernando Costa</strong></Link>
        <nav className={menuOpen ? 'open' : ''} aria-label="Navegação principal">
          <a href={home ? '#work' : '/#work'} onClick={() => setMenuOpen(false)}>Work</a>
          <NavLink to="/tech-notes" onClick={() => setMenuOpen(false)}>Notes</NavLink>
          <a href={home ? '#thesis' : '/#thesis'} onClick={() => setMenuOpen(false)}>Thesis</a>
          <a href={home ? '#talks' : '/#talks'} onClick={() => setMenuOpen(false)}>Talks</a>
          <a href={home ? '#about' : '/#about'} onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(value => !value)} aria-expanded={menuOpen} aria-label="Abrir menu">{menuOpen ? 'Close' : 'Menu'}</button>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Fernando Costa</span><span>Built with intention, not hype.</span></footer>
    </div>
  )
}
