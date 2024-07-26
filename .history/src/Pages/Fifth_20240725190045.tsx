import React from 'react'
import InsideImage from '../components/InsideImage'

const Fifth = () => {
  return (
    <div className='w-full px-14 h-[200vh] bg-white pt-40 '>
               <div className='w-full text-center'>
                              <h1 className='text-[3.4rem]  font-light f5'>Our Team</h1>
               </div>

               <div className='border-b-[1px] border-black h-[10%] px-5  flex w-full  mt-[85px]'>
                                             <InsideImage ind={"01"} text={"Dr. Rick McCartney"} post={"CEO"}/>

               </div>

               <div className='border-b-[1px] border-black h-[10%] px-5  flex w-full '>
                                             <InsideImage ind={"02"} text={"Chris Koha"} post={"COO"}/>
               </div>

               <div className='border-b-[1px] border-black h-[10%] px-5  flex w-full '>
                                             <InsideImage ind={"03"} text={"Caroline Nieto"} post={"Chief product Officer"} />
               </div>

               <div className='border-b-[1px] border-black h-[10%] px-5  flex w-full '>
                                             <InsideImage ind={"04"} text={"Victor Albertos"} post={"CTO"} />
               </div>

               <div className='border-b-[1px] border-black h-[10%] px-5  flex w-full '>
                                             <InsideImage ind={"05"} text={"DR. Jana Schmidt"} post={"Chief inno"} />
               </div>

               <div className='border-b-[1px] border-black h-[10%] px-5  flex w-full '>
                                             <InsideImage ind={"06"} text={"Adrian Rubio"} post={""} />
               </div>
    </div>
  )
}

export default Fifth