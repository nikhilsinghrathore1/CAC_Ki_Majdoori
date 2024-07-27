import gsap from 'gsap/all'
import React, { useEffect } from 'react'
import InsideImage from '../components/InsideImage'

const Fifth = () => {

useEffect(() => {
   document.querySelectorAll(".listelm").forEach(el=>{
      el.addEventListener()
   })
   
}, [])


  return (
    <div className='w-full px-14 h-[180vh] bg-white pt-40 '>
               <div className='w-full text-center'>
                              <h1 className='text-[3.4rem]  font-light f5'>Our Team</h1>
               </div>

               <div className='border-b-[1px] listelm border-black h-[11%] px-5  flex w-full relative  mt-[85px]'>
                                             <InsideImage ind={"01"} text={"Dr. Rick McCartney"} post={"CEO"}/>
                  <div className='w-full h-full transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div className='w-[14rem] picture h-[14rem] rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div className='border-b-[1px] listelm border-black relative h-[11%] px-5  flex w-full '>
                                             <InsideImage ind={"02"} text={"Chris Koha"} post={"COO"}/>
                                             <div className='w-full h-full transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div className='w-[14rem] picture  h-[14rem] rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div className='border-b-[1px] listelm border-black peer h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"03"} text={"Caroline Nieto"} post={"Chief product Officer"} />
                                             <div className='w-full h-full transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div className='w-[14rem] h-[14rem] picture peer-hover:hidden rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div className='border-b-[1px] listelm border-black h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"04"} text={"Victor Albertos"} post={"CTO"} />
                                             <div className='w-full h-full transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div className='w-[14rem] picture h-[14rem] rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div className='border-b-[1px] listelm border-black h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"05"} text={"DR. Jana Schmidt"} post={"Chief inno"} />
                                             <div className='w-full h-full transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div className='w-[14rem] picture h-[14rem] rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div className='border-b-[1px] listelm border-black h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"06"} text={"Adrian Rubio"} post={""} />
                                             <div className='w-full h-full transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div className='w-[14rem] picture h-[14rem] rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>
    </div>
  )
}

export default Fifth