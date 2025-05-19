import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-4 py-5 border-b-[1.5px] border-t-[1.5px] border-r-[1.5px] border-zinc-300 flex justify-between'>
        <img src={val.url} alt="" />
        <span>{val.num}</span>
    </div>
  )
}

export default Stripe