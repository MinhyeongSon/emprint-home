import * as React from 'react'
import { useLocale } from '../context/locale-context'

function resolveSeo(pathname, messages) {
  const p = (pathname || '/').replace(/\/$/, '') || '/'
  if (p.endsWith('/404') || p.includes('/404/')) return messages.seo.notFound
  if (p.endsWith('/document') || p.includes('/document/')) return messages.seo.document
  return messages.seo.home
}

export default function LocaleMetaSync({ pathname }) {
  const { locale, messages } = useLocale()

  React.useEffect(() => {
    const lang = locale === 'ko' ? 'ko' : 'en'
    document.documentElement.lang = lang

    const seo = resolveSeo(pathname, messages)
    const suffix = messages.seo.titleSuffix
    const title = seo.pageTitle ? `${seo.pageTitle} | ${suffix}` : suffix
    document.title = title

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', seo.description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', seo.description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', seo.description)
  }, [locale, messages, pathname])

  return null
}
