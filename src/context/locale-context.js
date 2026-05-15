import * as React from 'react'
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  getMessages,
  isValidLocale
} from '../content/copy'

const LocaleContext = React.createContext(null)

function readStoredLocale() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return isValidLocale(raw) ? raw : null
  } catch {
    return null
  }
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = React.useState(DEFAULT_LOCALE)

  React.useEffect(() => {
    const stored = readStoredLocale()
    if (stored) {
      setLocaleState(stored)
      return
    }
    const auto = typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('ko')
      ? 'ko'
      : DEFAULT_LOCALE
    setLocaleState(auto)
  }, [])

  const setLocale = React.useCallback((next) => {
    if (!isValidLocale(next)) return
    setLocaleState(next)
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const messages = React.useMemo(() => getMessages(locale), [locale])

  const value = React.useMemo(
    () => ({
      locale,
      setLocale,
      messages
    }),
    [locale, setLocale, messages]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
