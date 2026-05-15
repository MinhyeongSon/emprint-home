import * as React from 'react'
import siteData from '../data/site'
import { useLocale } from '../context/locale-context'

export default function DownloadGrid({ compact = false }) {
  const { messages } = useLocale()
  const d = messages.downloads

  const rows = siteData.downloads.map((item) => {
    const platform = d.platforms[item.id] || {}
    return {
      ...item,
      label: platform.label ?? item.id,
      detail: platform.detail ?? ''
    }
  })

  const title = compact ? d.compactTitle : d.pageTitle

  return (
    <section className={`release-panel ${compact ? 'release-panel--compact' : ''}`} id="downloads">
      <div className="section-heading">
        <span className="section-heading__eyebrow">{d.sectionEyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div className="download-grid">
        {rows.map((item) => (
          <article className="download-card" key={item.filename}>
            <div>
              <div className="download-card__title">{item.label}</div>
              <div className="download-card__detail">{item.detail}</div>
              <code className="download-card__filename">{item.filename}</code>
            </div>
            {item.disabled ? (
              <span className="button button--disabled" aria-disabled="true">
                {d.releasePending}
              </span>
            ) : (
              <a className="button button--secondary" href={item.href}>
                {d.downloadCta}
              </a>
            )}
          </article>
        ))}
      </div>
      {siteData.isPlaceholderRelease ? <p className="config-notice">{d.placeholderNotice}</p> : null}
    </section>
  )
}
