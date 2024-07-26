import React from 'react'
import InsideImage from '../components/InsideImage'

const Fifth = () => {
  return (
    <div className='w-full px-14 h-[200vh] bg-white pt-40 '>
               <div className='w-full text-center'>
                              <h1 className='text-[3.4rem]  font-light f5'>Our Team</h1>
               </div>

               <div className='border-b-[1px] border-black h-[10%] px-5  flex w-full  mt-[85px]'>
                                             <InsideImage/>

               </div>
               <div className='border-b-[1px] border-black h-[10%] px-5  flex w-full '>
                                             <InsideImage/>
               </div>
    </div>
  )
}

export default Fifth