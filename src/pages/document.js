import * as React from 'react'
import Layout from '../components/layout'
import InstallGuide from '../components/install-guide'
import Seo from '../components/seo'
import { useLocale } from '../context/locale-context'
import { DEFAULT_LOCALE, getMessages } from '../content/copy'

export default function DocumentPage({ location }) {
  const { messages } = useLocale()
  const doc = messages.documentPage

  return (
    <Layout currentPath={location.pathname}>
      <div className="docs-page">
        <aside className="docs-sidebar">
          <nav className="docs-nav" aria-label={doc.sidebarAriaLabel}>
            <div className="docs-nav__title">{doc.sidebarTitle}</div>
            <a className="docs-nav__link" href="#overview">
              {doc.navOverview}
            </a>
            {doc.sections.map((section) => (
              <a className="docs-nav__link" key={section.id} href={`#${section.id}`}>
                {section.navLabel ?? section.title}
              </a>
            ))}
            <a className="docs-nav__link" href="#notes">
              {doc.navNotes}
            </a>
          </nav>
        </aside>

        <div className="docs-main">
          <header id="overview" className="docs-hero panel">
            <span className="section-heading__eyebrow">{doc.eyebrow}</span>
            <h1>{doc.title}</h1>
            <p>{doc.intro}</p>
          </header>

          {doc.sections.map((section) =>
            section.id === 'install' ? (
              <article key={section.id} id={section.id} className="docs-section panel">
                <h2>{section.title}</h2>
                <p className="docs-section__lead">{section.summary}</p>
                <p className="docs-section__body">{section.body}</p>
                <InstallGuide
                  showHeader={false}
                  showLead={false}
                  showDirectDownloads
                  sectionId=""
                />
                <ul className="document-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ) : (
              <article key={section.id} id={section.id} className="docs-section panel">
                <h2>{section.title}</h2>
                <p className="docs-section__lead">{section.summary}</p>
                <p className="docs-section__body">{section.body}</p>
                <ul className="document-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            )
          )}

          <footer id="notes" className="docs-section docs-section--notes panel">
            <span className="section-heading__eyebrow">{doc.notesEyebrow}</span>
            <h2>{doc.notesTitle}</h2>
            <p>{doc.notesBody}</p>
          </footer>
        </div>
      </div>
    </Layout>
  )
}

export function Head() {
  const m = getMessages(DEFAULT_LOCALE)
  const seo = m.seo.document
  return (
    <Seo
      title={seo.pageTitle}
      description={seo.description}
      pathname="/document/"
      lang={DEFAULT_LOCALE === 'ko' ? 'ko' : 'en'}
    />
  )
}
