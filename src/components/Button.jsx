import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Button({title="Get Started"}) {
  return (
    <div className='w-36 px-4 py-2 bg-zinc-100 rounded-full flex items-center justify-between'>
        <span className='text-black text-sm font-medium'>{title}</span>
        <FaArrowRightLong className='text-black'/>

    </div>
  )
}

export default Button