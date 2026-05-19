import * as React from 'react'
import { Link } from 'gatsby'
import { hrefWithPrefix } from '../utils/href-with-prefix'
import InstallGuide from '../components/install-guide'
import Layout from '../components/layout'
import Seo from '../components/seo'
import siteData from '../data/site'
import { useLocale } from '../context/locale-context'
import { DEFAULT_LOCALE, getMessages } from '../content/copy'

export default function IndexPage({ location }) {
  const { messages } = useLocale()
  const L = messages.landing

  return (
    <Layout currentPath={location.pathname}>
      <div className="page-narrative">
        <section className="hero hero--editorial">
          <div className="hero__copy">
            <div className="hero-mark" aria-hidden="true">
              <span className="hero-mark__prompt">&gt;</span>
              <span className="hero-mark__cursor">_</span>
            </div>
            <p className="hero__epigraph">{L.hero.epigraph}</p>
            <h1>{L.hero.title}</h1>
            <p className="hero__lede">{L.hero.lede}</p>
            <p className="hero__ribbon" role="presentation">
              {L.hero.ribbon}
            </p>
            <div className="button-row button-row--tight">
              <a className="button" href="#install">
                {L.closing.primaryCta}
              </a>
              <Link className="button button--secondary" to="/document/">
                {L.closing.secondaryCta}
              </Link>
              <a
                className="button button--ghost"
                href={siteData.githubRepoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {L.closing.tertiaryCta}
              </a>
            </div>
            <p className="hero__meta">
              {L.hero.releaseLabel} <span className="hero__meta-sep">·</span>{' '}
              <strong>{siteData.currentVersion}</strong>
            </p>
          </div>

          <div className="hero__panel panel">
            <div className="hero__support">
              <a
                className="button hero__support-btn"
                href={siteData.kofiUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {L.hero.supportCta}
              </a>
              <p className="hero__support-hint">{L.hero.supportHint}</p>
            </div>
            <div className="console-card console-card--support">
              <div className="console-card__header">
                <span>{L.hero.panelLeft}</span>
                <span>{L.hero.panelRight}</span>
              </div>
              <pre>{L.hero.supportLines.join('\n')}</pre>
            </div>
          </div>
        </section>

        <section className="explore-section" id="features">
          <div className="explore-section__header">
            <span className="section-heading__eyebrow">{L.features.eyebrow}</span>
            <h2 className="explore-section__title">{L.features.title}</h2>
            <p className="explore-section__intro">{L.features.intro}</p>
          </div>
          <div className="feature-grid explore-section__grid">
            {L.features.items.map((item) => (
              <article className="panel feature-card" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a className="feature-card__link" href={hrefWithPrefix(item.linkTo)}>
                  {item.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="section-rule" aria-hidden="true" />

        <section className="editorial-section editorial-section--center">
          <span className="section-heading__eyebrow">{L.why.eyebrow}</span>
          <h2 className="editorial-section__title">{L.why.title}</h2>
          <div className="editorial-section__prose">
            {L.why.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="split-section panel">
          <div className="split-section__text">
            <span className="section-heading__eyebrow">{L.commit.eyebrow}</span>
            <h2 className="editorial-section__title editorial-section__title--tight">{L.commit.title}</h2>
            <p className="split-section__body">{L.commit.body}</p>
          </div>
          <div className="split-section__aside">
            <div className="console-card console-card--tight">
              <div className="console-card__header">
                <span>{L.commit.panelLeft}</span>
                <span>{L.commit.panelRight}</span>
              </div>
              <pre>{L.commit.logLines.join('\n')}</pre>
            </div>
          </div>
        </section>

        <section className="editorial-section" id="anthologies">
          <div className="editorial-section__header">
            <span className="section-heading__eyebrow">{L.anthologies.eyebrow}</span>
            <h2 className="editorial-section__title editorial-section__title--tight">{L.anthologies.title}</h2>
            <p className="editorial-section__intro">{L.anthologies.intro}</p>
          </div>
          <div className="anthology-shelf">
            {L.anthologies.items.map((item) => (
              <article className="anthology-card" key={item.id}>
                <div className="anthology-card__label">{item.name}</div>
                <div className="anthology-card__mood">{item.mood}</div>
                <p className="anthology-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="duo-panels">
          <article className="panel duo-panels__card">
            <span className="section-heading__eyebrow">{L.fragments.eyebrow}</span>
            <h2 className="editorial-section__title editorial-section__title--tight">{L.fragments.title}</h2>
            <p className="duo-panels__body">{L.fragments.body}</p>
          </article>
          <article className="panel duo-panels__card">
            <span className="section-heading__eyebrow">{L.blank.eyebrow}</span>
            <h2 className="editorial-section__title editorial-section__title--tight">{L.blank.title}</h2>
            <p className="duo-panels__body">{L.blank.body}</p>
          </article>
        </section>

        <section className="editorial-section editorial-section--center editorial-section--tight">
          <span className="section-heading__eyebrow">{L.quiet.eyebrow}</span>
          <h2 className="editorial-section__title editorial-section__title--tight">{L.quiet.title}</h2>
          <p className="editorial-section__intro">{L.quiet.intro}</p>
          <ul className="quiet-list">
            {L.quiet.values.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <div className="section-rule" aria-hidden="true" />

        <InstallGuide />

        <section className="editorial-section editorial-section--center closing-band">
          <span className="section-heading__eyebrow">{L.closing.eyebrow}</span>
          <h2 className="editorial-section__title editorial-section__title--tight">{L.closing.title}</h2>
          <p className="editorial-section__intro closing-band__body">{L.closing.body}</p>
          <div className="button-row button-row--tight closing-band__actions">
            <a className="button" href="#install">
              {L.closing.primaryCta}
            </a>
            <Link className="button button--secondary" to="/document/">
              {L.closing.secondaryCta}
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export function Head() {
  const m = getMessages(DEFAULT_LOCALE)
  const seo = m.seo.home
  return (
    <Seo
      title={seo.pageTitle}
      description={seo.description}
      pathname="/"
      lang={DEFAULT_LOCALE === 'ko' ? 'ko' : 'en'}
    />
  )
}
