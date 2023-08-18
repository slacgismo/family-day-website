
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
// "use client"

// import styles from '../display.module.css'
// import ControllerGenerator from '@/app/modules/controller/generator'

// // /*

// // The Display page is intended to be a dynamically generated, simple viewing page. It should take the device list and, based on their type (L,G,or S), add them to the fun diagram.

// // */


// // // *********** END OF IMPORTS ***********

// export default function Display() {
//     return (
//       <div>
//         Display
//         <hr />
//         <ControllerGenerator>
//         <hr />
//       </div>
//     )
//   }

// // ------------------------------------------------------------------------------------------------------------------------------------------
// //   "use client"

// // /*

// // The Controller page is the core of the application. It has the "creator" element, which adds devices to the device list. This is where most state manipulation will happen.

// // When adding a device and before updating state, the system needs to:
// // Confirm ip address is correct. If failed query, it needs to display an error.
// // On success, if custom name field is an empty string, use the device's name. 
// // Then, it needs to query the remaining fields to populate initial state.
// // Then, run addDevice.

// // Each device module needs to "stream" the data from their respective IP and update their own state values. This needs a timer to minimize re-rendering. (Add update reducer for the module actions)

// // */

// // // import styles from '../controller.module.css'


// // import { addDevice } from '@/reducers/deviceList'
// // import { useDispatch } from 'react-redux'
// // import { useEffect, useState } from 'react'
// // import { AppDispatch, useAppSelector } from '@/store/store'
// // import { useSelector } from 'react-redux'
// // import ControllerGenerator from '@/app/modules/controller/generator'
// // import ControllerLoad from '@/app/modules/controller/load'
// // import ControllerStorage from '@/app/modules/controller/storage'

// // // *********** END OF IMPORTS ***********

// // export default function Controller() {
// //   const [active, setActive] = useState(false)
// //   const [deviceSelected, setDeviceSelected] = useState("")
// //   const [typeSelected, setTypeSelected] = useState("")
// //   const [ip, setIp] = useState("")

// //   useEffect(() => {
// //     if (deviceSelected === "other" && !active) {
// //       setActive(true);
// //     } else if (deviceSelected !== "other" && active) {
// //       setActive(false);
// //     }
// //     // No changes if deviceSelected is not "other" and active is already false
// //   }, [deviceSelected, active]);

// //   // one of the select types will include an "other" option. If other is selected,
// //   // then I will render a text field for the custom text. 
// //     const Creator = (obj: {active: boolean}) => {
// //       return (
// //         <div className={styles.creator}>
// //           <select className={styles.deviceTypes} />
// //           <input className={styles.ipaddress} />
// //           <select className={styles.deviceList}/>
// //           <input className={styles.customName} />
// //           <button className={styles.add} />
// //         </div>
// //       )
// //     }

// //     return (
// //       <div className={styles.backdrop}>
// //         <div className={styles.controller}>
// //           <Creator active={active} />
// //           <section className={styles.block}>
// //             <h1> GENERATOR RAAAAH!</h1>
// //               <ControllerGenerator />
// //           </section>
// //           <section className={styles.block}>
// //             <h1> LOAD RAAAAH!</h1>
// //               <ControllerLoad />
// //           </section>
// //           <section className={styles.block}>
// //             <h1> STORAGE RAAAAH!</h1>
// //               <ControllerStorage />
// //           </section>
// //         </div>
// //       </div>
// //     )
// //   }
