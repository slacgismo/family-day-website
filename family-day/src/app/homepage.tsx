"use client"

import Image from 'next/image'
import Link from 'next/link'
import { increment,decrement,incrementByAmount } from '@/reducers/counterSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { AppDispatch, useAppSelector } from '@/store/store'
import { useSelector } from 'react-redux'

export default function Homepage() {
    const [exampleInput, setExampleInput] = useState(0)
    const exampleCounter = useAppSelector((state) => state.counter.value)

    const dispatch = useDispatch<AppDispatch>()

    const onClickAddOne = () => {
        dispatch(increment())
    }

    const onClickSubOne = () => {
        dispatch(decrement())
    }

    const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
        setExampleInput(+event.currentTarget.value)
    }

    const onClickAddInput = () => {
        dispatch(incrementByAmount(exampleInput))
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h1 className="title">
                Controller
            </h1>

            <p>
                To the controller page follow <Link className="tomato" href="/controller">this link!</Link>
            </p>
        </div>

        <div>
            <h1 className="title">
                Display
            </h1>

            <p>
                To the student display page follow <Link className="tomato" href="/display">this link!</Link>
            </p>
        </div>

        <div>
            <h1 className="title">
                Redux Test
            </h1>

            <p>
                The value of the counter is {exampleCounter}
            </p>
            <button onClick={onClickAddOne}> Add One</button>
            <button onClick={onClickSubOne}> Sub One</button>
            <input className='tomato' type='number' defaultValue={0} name="Numbers Pls" onChange={onChangeInput} />
            <button onClick={onClickAddInput}> Add from field</button>
        </div>

    </main>
  )
}