import * as React from 'react'
import { LocaleProvider } from './src/context/locale-context'

export const wrapRootElement = ({ element }) => <LocaleProvider>{element}</LocaleProvider>
