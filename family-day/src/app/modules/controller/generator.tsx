"use client"

import { removeDevice } from '@/reducers/deviceList'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { AppDispatch, useAppSelector } from '@/store/store'
import { useSelector } from 'react-redux'
// import { useId } from 'react'// RR
import configUtils from '@/utils/config'
import Switch from '@mui/material/Switch'
// configutils.ipconfig(ip-address-here)
// configutils.powerswitch(boolean)
import configutils from '@/utils/config'



export default function ControllerGenerator (props) {
	/* commented until i actuall pass ipaddress in props. -DR
	const defaults: { ipaddress: string} = {
		ipaddress: props.ipaddress
	}
	*/
	const label = { inputProps: {} }
	const [deviceTitle, setDeviceTitle] = useState(0)
	const [deviceState, setDeviceState] = useState(0)
	const [powerValues, setPowerValues] = useState({
    	amps: 0,
    	watts: 0,
    	volts: 0
    })

// Then, needs an updater function with periodic refreshing

    // let powerValues: { amps: number, watts: number, volts: number} = {
    // 	amps: 0,
    // 	watts: 0,
    // 	volts: 0
    // }
    return(
        <div id = "xyz" 
        style = {{width : 300, padding: "30px", fontFamily: "Verdana", boxShadow: "0 0 3px 2px #32CD32"}}>
            <input name = "title" type = "text" placeholder = "Unnnamed Device" onChange = {event => setDeviceTitle(event.target.value)}/>
            <Switch {...label} defaultChecked color = "success"/>
            <hr />
            <span> Power (Watts): {powerValues.watts}</span>
            <hr />
            <span> Voltage (Volts): {powerValues.volts}</span>
            <hr />
            <span> Current (Amps): {powerValues.amps}</span>
            <hr />
            <button onClick = {removeDevice}> Delete </button>
           
        </div>
    )
}
