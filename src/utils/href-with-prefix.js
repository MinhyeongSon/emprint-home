import { withPrefix } from 'gatsby'

/** Resolves in-app paths (and #hash) for GitHub Pages `pathPrefix`. */
export function hrefWithPrefix(raw) {
  if (!raw || raw.startsWith('http://') || raw.startsWith('https://')) {
    return raw
  }
  const hashIndex = raw.indexOf('#')
  const pathPart = hashIndex >= 0 ? raw.slice(0, hashIndex) : raw
  const hash = hashIndex >= 0 ? raw.slice(hashIndex + 1) : ''
  const path = pathPart === '' || pathPart === '/' ? '/' : pathPart.endsWith('/') ? pathPart : `${pathPart}/`
  const prefixed = withPrefix(path)
  return hash ? `${prefixed}#${hash}` : prefixed
}
