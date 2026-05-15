import * as React from 'react'
import { Link, withPrefix } from 'gatsby'
import '@fontsource/jetbrains-mono'
import '../styles/global.css'
import siteData from '../data/site'
import { useLocale } from '../context/locale-context'
import LocaleMetaSync from './locale-meta-sync'

function isActivePath(currentPath, targetPath) {
  if (targetPath === '/') return currentPath === '/'
  return currentPath.startsWith(targetPath)
}

function LocaleSwitcher() {
  const { locale, setLocale, messages } = useLocale()
  const c = messages.common

  return (
    <div className="locale-toggle" role="group" aria-label={c.localeSwitcherLabel}>
      <button
        type="button"
        className={`locale-toggle__btn ${locale === 'en' ? 'is-active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        {c.localeEn}
      </button>
      <button
        type="button"
        className={`locale-toggle__btn ${locale === 'ko' ? 'is-active' : ''}`}
        onClick={() => setLocale('ko')}
        aria-pressed={locale === 'ko'}
      >
        {c.localeKo}
      </button>
    </div>
  )
}

export default function Layout({ children, currentPath = '/' }) {
  const logoSrc = withPrefix('/assets/images/emprint-simple-logo.svg')
  const { messages } = useLocale()
  const c = messages.common

  const navItems = [
    { label: c.navMain, to: '/' },
    { label: c.navDocument, to: '/document/' }
  ]

  return (
    <div className="app-shell">
      <LocaleMetaSync pathname={currentPath} />
      <a className="skip-link" href="#content">
        {c.skipToContent}
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand-lockup" to="/">
            <img className="brand-lockup__logo" src={logoSrc} alt="Emprint" />
            <div>
              <div className="brand-lockup__title">Emprint</div>
              <div className="brand-lockup__subtitle">{c.brandSubtitle}</div>
            </div>
          </Link>
          <div className="site-header__tools">
            <LocaleSwitcher />
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
                {c.navGithub}
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main id="content" className="page-content">
        {children}
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <div className="site-footer__title">{c.footerTitle}</div>
            <p className="site-footer__copy">{c.footerCopy}</p>
          </div>
          <div className="site-footer__links">
            <Link to="/document/">{c.footerDocument}</Link>
            <a href={siteData.githubRepoUrl} target="_blank" rel="noreferrer">
              {c.footerRepo}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
