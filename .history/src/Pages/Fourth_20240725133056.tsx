import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Fourth = () => {
  return (
    <div className='w-full h-[400vh] '>
               <div className='w-full flex flex-nowrap  h-[100vh] sticky top-0 '>
                              <div className='w-full flex items-center relative justify-center h-full flex-shrink-0'>

                              <div className='text-[100px] leading-[105px] f5'>
                                             <h1>Real Talk,</h1>
                                             <h1>Real Impact</h1>
                              </div>

                              <div className='w-[15rem] absolute top-[50%] -translate-y-1/2 translate-x-1/2 right-0 h-[15rem] bg-red-700 rounded-full'></div>


                              <div className='w-[20%] h-14 border border-black absolute p-5 bottom-20 left-10'>
                                             <div className='w-full h-full flex items-center justify-center'>
                                                            <p className='uppercase f4 font-semibold flex items-center gap-3 tracking-wide'>Partner with us <GoArrowUpRight className='text-[20px] '/></p>
                                             </div>
                              </div>

                              </div>
                              <div className='w-full h-full relative  flex-shrink-0 p-10'>
                                             <div className='w-full flex justify-start b h-[30%]  pl-10'>
                                                            <p className='w-[20%] text-[17px] leading-[30px]  '>We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.</p>
                                             </div>
                                             <div className='w-full h-[70%] pl-40'>
                                                            <div className='text-[10rem] text-center w-[70%] leading-none font-semibold f5'>20.4M</div>
                                                            <div className=' text-center text-[3rem] w-[80%]  f3 leading-[3.5rem]'> <p>Real people — real lives — we have built products and solutions for.</p></div>
                                             </div>

                                             <div className='w-[10rem] h-[10rem] bg-red-800 rounded-full absolute top-[69%] left-[20%]'></div>
                                             <div className='w-[13rem] h-[13rem] bg-yellow-800 rounded-full absolute top-[-17%] left-[29%]'></div>
                                             <div className='w-[17rem] h-[17rem] bg-blue-800 rounded-full absolute bottom-[-17%] left-[40%]'></div>
                                             <div className='w-[15rem] h-[15rem] bg-black rounded-full absolute bottom-[50%] translate-y-1/2 left-[85%]'></div>

                              </div>
                              <div className='w-full h-full bg-yellow-300 flex-shrink-0 p-10'>
                              <div className='w-full flex justify-start b h-[30%] pl-10'>
                                                            <p className='w-[19%] font-semibold text-[17px] tracking-tight leading-[30px]'>Our team is global and diverse, because our individual experiences make us stronger.</p>
                                             </div>
                                             <div className='w-full h-[70%] pl-40'>
                                                            <div className='text-[10rem] text-center w-[70%] leading-none font-semibold f5'>49%</div>
                                                            <div className=' text-center text-[3rem] w-[80%]  f3 leading-[3.5rem]'> <p>Expert women in tech.</p></div>
                                             </div>
                              </div>
                              <div className='w-full h-full bg-blue-300 flex-shrink-0'></div>
                              
               </div>
             
    </div>
  )
}
 
export default Fourth