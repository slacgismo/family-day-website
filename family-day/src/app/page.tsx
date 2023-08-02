import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled/macro'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="title">
        Controller
      </h1>

      <p>
      To the controller page follow <span className="tomato"><Link href="/controller">this link!</Link></span>
      </p>

      <h1 className="title">
        Display
      </h1>

      <p>
      To the student display page follow <span className="tomato"><Link href="/display">this link!</Link></span>
      </p>
    </main>
  )
}
