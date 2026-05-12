import * as React from 'react'
import { Link, withPrefix } from 'gatsby'
import '@fontsource/jetbrains-mono'
import '../styles/global.css'
import siteData from '../data/site'

const navItems = [
  { label: 'Main', to: '/' },
  { label: 'Document', to: '/document/' }
]

function isActivePath(currentPath, targetPath) {
  if (targetPath === '/') return currentPath === '/'
  return currentPath.startsWith(targetPath)
}

export default function Layout({ children, currentPath = '/' }) {
  const logoSrc = withPrefix('/assets/images/emprint-simple-logo.svg')

  return (
    <div className="app-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand-lockup" to="/">
            <img className="brand-lockup__logo" src={logoSrc} alt="Emprint" />
            <div>
              <div className="brand-lockup__title">Emprint</div>
              <div className="brand-lockup__subtitle">workspace runtime</div>
            </div>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.to}
                className={`nav-link ${isActivePath(currentPath, item.to) ? 'is-active' : ''}`}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="nav-link nav-link--external"
              href={siteData.githubRepoUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>
      <main id="content" className="page-content">
        {children}
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <div className="site-footer__title">Emprint</div>
            <p className="site-footer__copy">
              Local-first, Git-native workspace runtime for writing, code, and portable publication.
            </p>
          </div>
          <div className="site-footer__links">
            <Link to="/document/">Document</Link>
            <a href={siteData.githubRepoUrl} target="_blank" rel="noreferrer">
              Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
