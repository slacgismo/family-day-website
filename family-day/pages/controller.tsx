"use client"

/*

The Controller page is the core of the application. It has the "device addition" element, which adds devices to the device list. This is where most state manipulation will happen.

When adding a device and before updating state, the system needs to:
Confirm ip address is correct. If failed query, it needs to display an error.
On success, if custom name field is an empty string, use the device's name. 
Then, it needs to query the remaining fields to populate initial state.
Then, run addDevice.

Each device module needs to "stream" the data from their respective IP and update their own state values. This needs a timer to minimize re-rendering. (Add update reducer for the module actions)

*/

import { addDevice } from '@/reducers/deviceList'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { AppDispatch, useAppSelector } from '@/store/store'
import { useSelector } from 'react-redux'
import ControllerGenerator from '@/app/modules/controller/generator'
import ControllerLoad from '@/app/modules/controller/load'
import ControllerStorage from '@/app/modules/controller/storage'

export default function Controller() {
    return (
      <div>
        <h1> GENERATOR RAAAAH!</h1>
          <ControllerGenerator />
        <h1> LOAD RAAAAH!</h1>
          <ControllerLoad />
        <h1> STORAGE RAAAAH!</h1>
          <ControllerStorage />
      </div>
    )
  }