"use client"

import styles from "./display.module.css"

export default function DisplayLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className={styles.backdrop}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <style jsx global>
        {`
            body {
                background: black;
                color: white;
            }
        `}
      </style>
      <nav></nav>
 
      {children}
    </section>
  )
}