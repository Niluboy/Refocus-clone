import React from 'react'
import Button from './Button'

function Product({val,mover,count}) {
    
  return (
    <div className='w-full h-[18rem] py-16 text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl font-medium'>{val.name}</h1>
            <div className='w-1/3 '>
                <p className='mb-7'>{val.desc}</p>
                <div className='flex gap-5'>
                    {val.live && <Button title="live Website"/>}
                    {val.case && <Button title="Case Study"/>}
                </div>
                
            </div>
        </div>
    </div>
  )
}
 
export default Product