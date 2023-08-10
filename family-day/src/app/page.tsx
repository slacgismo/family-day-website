import Image from 'next/image'
import Link from 'next/link'
import type { AppProps } from 'next/app'
// Module Imports

import Homepage from './homepage'

// REDUX imports
import { store } from '../store/store'
import { Provider } from 'react-redux'

// *********** END OF IMPORTS ***********

export default function Home() {
  return (
      <Homepage />
  )
}
