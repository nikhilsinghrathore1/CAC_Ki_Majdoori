import React from 'react'

const Fifth = () => {
  return (
    <div className='w-full px-14 h-[200vh] bg-white pt-40 '>
               <div className='w-full text-center'>
                              <h1 className='text-[3.4rem]  font-light f5'>Our Team</h1>
               </div>

               <div className='border-b-[1px] border-black h-[10%] px-5  flex w-full  mt-[85px]'>
                                             <div className='w-[70%] text-[2.7rem] items-end f5 h-full flex'>
                                                            <h1 className='mr-12 opacity-20'>01</h1>
                                                            <h1>Dr. Rick McCartney</h1>
                                             </div>
                                             <div className='w-[30%] h-full flex bg-red-300 items-center'>
                                                            <h1 className='text-[1.3rem] uppercase f1'>ceo</h1>
                                             </div>
               </div>
    </div>
  )
}

export default Fifth