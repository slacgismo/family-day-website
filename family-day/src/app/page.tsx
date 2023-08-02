import Image from 'next/image'
import Link from 'next/link'
import type { AppProps } from 'next/app'

// Module Imports

import Homepage from './homepage'

// REDUX imports
import { store } from '../store/store'
import { Provider } from 'react-redux'

export default function Home({ Component, pageProps }: AppProps) {
  return (
      <Homepage {...pageProps} />
  )
}
