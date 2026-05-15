import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useLocale } from '../context/locale-context'
import { DEFAULT_LOCALE, getMessages } from '../content/copy'

export default function NotFoundPage({ location }) {
  const { messages } = useLocale()
  const n = messages.notFound

  return (
    <Layout currentPath={location.pathname}>
      <section className="section-block section-block--narrow">
        <div className="panel not-found-card">
          <span className="section-heading__eyebrow">{n.eyebrow}</span>
          <h1>{n.title}</h1>
          <p>{n.body}</p>
          <div className="button-row">
            <Link className="button" to="/">
              {n.mainCta}
            </Link>
            <Link className="button button--secondary" to="/document/">
              {n.documentCta}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function Head() {
  const m = getMessages(DEFAULT_LOCALE)
  const seo = m.seo.notFound
  return (
    <Seo
      title={seo.pageTitle}
      description={seo.description}
      pathname="/404/"
      lang={DEFAULT_LOCALE === 'ko' ? 'ko' : 'en'}
    />
  )
}
