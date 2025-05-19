import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-10 py-10'>
        <div className='max-w-screen-xl mx-auto flex gap-20 '>
            <div className='basis-1/2 flex gap-10 flex-col'>
            <h1 className='text-[9.5rem] font-medium leading-none tracking-tight'>refokus.</h1>
            <div className='flex gap-10'>
            {["privacy policy","cookies policy","impression","terms"].map((elem,index)=><a className='text-sm capitalize text-zinc-400'>{elem}</a>)}
            </div>
            </div>
            <div className='basis-1/2 flex'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 capitalize text-zinc-500 '>socials</h4>
                    {["instagram","twitter (x?)","LinkedIn"].map((elem,index)=><a className='block mb-2 capitalize text-zinc-600'>{elem}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 capitalize text-zinc-500'>sitemap</h4>
                    {["home","work","carrers","contact"].map((elem,index)=><a className='block mb-2 capitalize text-zinc-400'>{elem}</a>)}
                </div>
                <div className='basis-1/3 flex flex-col items-end gap-5'>
                    <p className='mt-16 text-sm text-right text-zinc-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit.amet Lorem, ipsum dolor.  </p>
                    <img className='px-2 py-1 bg-blue-600' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
