import * as React from 'react'
import { withPrefix } from 'gatsby'
import siteData from '../data/site'

function toAbsoluteUrl(pathname) {
  const baseUrl = `${siteData.siteUrl.replace(/\/+$/, '')}/`
  return new URL(pathname.replace(/^\/+/, ''), baseUrl).toString()
}

export default function Seo({ title, description, pathname = '/', lang = 'ko' }) {
  const pageTitle = title ? `${title} | Emprint` : 'Emprint'
  const pageDescription =
    description ||
    'Emprint is a calm personal archive and publishing platform: local files, Git-shaped history, and anthologies instead of feeds.'
  const imageUrl = toAbsoluteUrl('assets/images/icon-512.png')
  const canonicalUrl = toAbsoluteUrl(pathname)

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="theme-color" content="#cd7b00" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="icon" href={withPrefix('/favicon.ico')} />
      {!siteData.isPlaceholderSiteUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
    </>
  )
}
