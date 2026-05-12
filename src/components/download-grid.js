import * as React from 'react'
import siteData from '../data/site'

export default function DownloadGrid({ title = 'Install Emprint', compact = false }) {
  return (
    <section className={`release-panel ${compact ? 'release-panel--compact' : ''}`} id="downloads">
      <div className="section-heading">
        <span className="section-heading__eyebrow">Downloads</span>
        <h2>{title}</h2>
      </div>
      <div className="download-grid">
        {siteData.downloads.map((item) => (
          <article className="download-card" key={item.filename}>
            <div>
              <div className="download-card__title">{item.label}</div>
              <div className="download-card__detail">{item.detail}</div>
              <code className="download-card__filename">{item.filename}</code>
            </div>
            {item.disabled ? (
              <span className="button button--disabled" aria-disabled="true">
                Release URL pending
              </span>
            ) : (
              <a className="button button--secondary" href={item.href}>
                Download
              </a>
            )}
          </article>
        ))}
      </div>
      {siteData.isPlaceholderRelease ? <p className="config-notice">{siteData.notice}</p> : null}
    </section>
  )
}
