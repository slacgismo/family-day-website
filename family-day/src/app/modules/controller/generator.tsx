"use client"

import { removeDevice } from '@/reducers/deviceList'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { AppDispatch, useAppSelector } from '@/store/store'
import { useSelector } from 'react-redux'

export default function ControllerGenerator () {
    return(
        <div>
            Your generator controller code goes in this page!
        </div>
    )
}