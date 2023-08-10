"use client"

import styles from '../display.module.css'

/*

The Display page is intended to be a dynamically generated, simple viewing page. It should take the device list and, based on their type (L,G,or S), add them to the fun diagram.

*/

import DisplayGenerator from '@/app/modules/display/generator'
import DisplayLoad from '@/app/modules/display/load'
import DisplayStorage from '@/app/modules/display/storage'

// *********** END OF IMPORTS ***********

export default function Display() {
    return (
      <div className={styles.backdrop}>
        <DisplayGenerator />
        <DisplayLoad />
        <DisplayStorage />
      </div>
    )
  }