"use client"

import styles from "./controller.module.css"

export default function ControllerLayout({
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
                background: beige;
                color: black;
            }
        `}
      </style>
      <nav></nav>
 
      {children}
    </section>
  )
}