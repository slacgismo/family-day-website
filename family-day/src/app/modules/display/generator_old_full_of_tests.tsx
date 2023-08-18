"use client"

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { AppDispatch, useAppSelector } from '@/store/store'
import { useSelector } from 'react-redux'
import Image from 'next/image'

export default function DisplayGenerator (props) {
    return (
        <>
            <div
            style = {{display: "flex", width : 1200, padding: "30px", fontFamily: "Verdana", boxShadow: "0 0 3px 2px #32CD32"}}>
				 <div> Not really, I just felt like it.{'\n'} </div>
				 <hr />
				 <div style = {{display: "flex", width : 200, padding: "10px", fontFamily: "Verdana", boxShadow: "0 0 3px 2px #32CD32"}}>
				 <Image src="/Solar_panel_under_sun.png" alt=" Generating..." width="128" height="128" />
				 </ div>
				 <hr />
				 <Image src="/Solar_panel_under_sun2.gif" alt=" Generating..." width="128" height="128" />
                 <hr />
				 <Image src="/Solar_panel_under_sun3.gif" alt=" Generating..." width="128" height="128" />
                 <hr />
				 <Image src="/Bike_pedals1_small.gif" alt=" Generating..." width="128" height="128" />
                 <hr />
				 <Image src="/Bike_pedals2_large.gif" alt=" Generating..." width="128" height="128" />
                 <hr />                
{/*                 <Image src="/battery_charging1.gif" alt=" Charging..." width="128" height="128" />
				 <Image src="/bulb_glowing.gif" alt=" Consuming..." width="128" height="128" />
*/}
            </div>
        </>
    )
}

// "use client"

// import { removeDevice } from '@/reducers/deviceList'
// import { useDispatch } from 'react-redux'
// import { useState } from 'react'
// import { AppDispatch, useAppSelector } from '@/store/store'
// import { useSelector } from 'react-redux'
// // import { useId } from 'react'// RR
// import configUtils from '@/utils/config'
// import Switch from '@mui/material/Switch'
// // configutils.ipconfig(ip-address-here)
// // configutils.powerswitch(boolean)
// import configutils from '@/utils/config'



// export default function ControllerGenerator (props) {
// 	/* commented until i actuall pass ipaddress in props. -DR
// 	const defaults: { ipaddress: string} = {
// 		ipaddress: props.ipaddress
// 	}
// 	*/
// 	const label = { inputProps: {} }
// 	const [deviceTitle, setDeviceTitle] = useState(0)
// 	const [deviceState, setDeviceState] = useState(0)
// 	const [powerValues, setPowerValues] = useState({
//     	amps: 0,
//     	watts: 0,
//     	volts: 0
//     })

//     // constructor() {
// 	// 	super();
// 	// 	this.state = {
// 	// 	};
// 	// 	this.onInputchange = this.onInputchange.bind(this);
// 	// }

// 	// onInputChange(event) {
// 	// 	this.setState({
// 	// 		[event.target.name]: event.target.value
// 	// 	});
// 	// }
// // Then, needs an updater function with periodic refreshing

//     // let powerValues: { amps: number, watts: number, volts: number} = {
//     // 	amps: 0,
//     // 	watts: 0,
//     // 	volts: 0
//     // }
//     return(
//         <div id = "xyz" 
//         style = {{width : 300, padding: "30px", fontFamily: "Verdana", boxShadow: "0 0 3px 2px #32CD32"}}>
//             <input name = "title" type = "text" placeholder = "Unnnamed Device" onChange = {event => setDeviceTitle(event.target.value)}/>
//             <Switch {...label} defaultChecked color = "success"/>
//             <hr />
//             <span> Power (Watts): {powerValues.watts}</span>
//             <hr />
//             <span> Voltage (Volts): {powerValues.volts}</span>
//             <hr />
//             <span> Current (Amps): {powerValues.amps}</span>
//             <hr />
//             <button onClick = {removeDevice}> Delete </button>
           
// {/*            <NumericInput
//             	className = "generator"
//             	// value ={600}
//             />*/}
//         </div>
//     )
// }

// // "use client"

// // import { removeDevice } from '@/reducers/deviceList'
// // import { useDispatch } from 'react-redux'
// // import { useState } from 'react'
// // import { AppDispatch, useAppSelector } from '@/store/store'
// // import { useSelector } from 'react-redux'

// // export default function ControllerGenerator () {
// //     return(
// //         <div>
// //             Your generator controller code goes in this page!!!
// //             <label>
// //             Watts:
// //             <input
// //             name="watts"
// //             type = "text"
// //             value= "16"
// //             />
// //             </label>
// // {/*            <NumericInput
// //             	className = "generator"
// //             	// value ={600}
// //             />*/}
// //         </div>
// //     )
// // }