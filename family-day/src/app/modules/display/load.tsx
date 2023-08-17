"use client"

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { AppDispatch, useAppSelector } from '@/store/store'
import { useSelector } from 'react-redux'
import Image from 'next/image'

export default function DisplayLoad (props) {
    return (
        <>
            <div
            style = {{display: "flex", width : "fit-content", padding: "10px", fontFamily: "Verdana", boxShadow: "0 0 3px 2px #8B0000"}}>

                 <Image src="/bulb_glowing.gif" alt=" Generating..." width="200" height="200" />
                 <hr />

            </div>
        </>
    )
}
