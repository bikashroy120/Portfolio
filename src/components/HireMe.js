import React from 'react'
import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className=' fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark animate-spin-slow"}/>
            <button className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90px] h-[90px] text-light rounded-full border-2 border-dark hover:bg-transparent hover:text-dark font-bold bg-dark'>Heir Me</button>
        </div>
    </div>
  )
}

export default HireMe