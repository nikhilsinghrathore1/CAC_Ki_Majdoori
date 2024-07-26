import React from 'react'

type marqueprop ={
               text:String[]
               dist:Number
}

const Marquee = ({text , dist}:marqueprop) => {
               // console.log(dist)
  return (
    <div className={`w-full flex gap-6 items-center f3 text-[78px] leading-none`}
    style={{ transform: `translateX(-${dist}%)` }}
    >
               <div className='flex  gap-6  px-2'>
                              <h1>{text[0]}</h1>
                              <div className='w-12 mt-[6px] h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.webp" alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2'>
                              <h1>{text[1]}</h1>
                              <div className='w-12  mt-[6px] h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.webp" alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2'>
                              <h1>{text[2]}</h1>
                              <div className='w-12  mt-[6px] h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.webp" alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2'>
                              <h1>{text[3]}</h1>
                              <div className='w-12  mt-[6px] h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.webp" alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2'>
                              <h1>{text[0]}</h1>
                              <div className='w-12  mt-[6px] h-12 rounded-full'>
                                    <img className='w-full  h-full object-cover' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.webp" alt="not showing" />
                              </div>
               </div>
               <div className='flex  gap-6  px-2'>
                              <h1>{text[1]}</h1>
                              <div className='w-12  mt-[6px] h-12 rounded-full'>
                                <img className='w-full  h-full object-cover' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.webp" alt="not showing" />
                              </div>
               </div>
              
    </div>
  )
}

export default Marquee