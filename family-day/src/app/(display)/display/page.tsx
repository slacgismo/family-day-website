
"use client"

import styles from '../display.module.css'

/*

The Display page is intended to be a dynamically generated, simple viewing page. It should take the device list and, based on their type (L,G,or S), add them to the fun diagram.

*/

import DisplayGenerator from '../../modules/display/generator'
import DisplayLoad from '../../modules/display/load'
import DisplayStorage from '../../modules/display/storage'
import Image from 'next/image' // RR
// *********** END OF IMPORTS ***********

export default function Display() {
    return (
      <div className={styles.backdrop}>
          <div className={styles.display}>
          {/*<Creator active={active} />*/}
          <section className={styles.block}>
            <h1> GENERATOR -- THE SUN! </h1>
              <DisplayGenerator />

              {/*<DisplayGenerator props = {{image_path: "https://static.wixstatic.com/media/68532c_db6498551fa04defab60a1e41080154d~mv2.gif"}}/>*/}
              {/*<DisplayGenerator props = {{image_path: "/Solar_panel_under_sun3.gif"}}/>*/}
          </section>
          <section className={styles.block}>
            <h1> LOAD RAAAAH!</h1>
              <DisplayLoad />
          </section>
          <section className={styles.block}>
            <h1> STORAGE RAAAAH!</h1>
              <DisplayStorage />
          </section>
        </div>
      </div>
    )
  }
