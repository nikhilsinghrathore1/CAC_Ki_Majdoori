import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const ThirdTest = () => {
  return (
    <div className='w-full h-[300vh] justify-between bg-[#AEDEE0] flex items-start px-12'>
               <div className='w-[41.9%] mt-20 pt-32 sticky top-0'>
                           <p className='f4 text-[1.14rem] font-normal tracking-tight leading-[1.78rem]'>Significo is a custom health software developer founded on the belief that technology can transform healthcare to put people first. We put humanity back at the center of healthcare with technology that simplifies complexity, accelerates capacity, and improves outcomes. </p>

                           <h1 className='f5 text-[3.3rem] mt-5 leading-[4rem]'>Human-Centric Health Software</h1>

                           <div className='w-[38%] h-[60px] mt-5 border border-black font-semibold uppercase flex items-center gap-2 text-[15px]  f4 justify-center'>
                              <h1 className='flex items-center gap-2'>our Solutions <GoArrowUpRight className='text-[1.2rem] '/></h1>
                           </div>
               </div>
               <div className='w-[50%] px-20 h-full pt-[80vh] transition-all pl-16'>
                              <div className='w-[77%] pt-4 flex justify-between px-10 border border-black h-[12.5%]'>
                                             <div className='w-[75%] h-full'>
                                                            <h1 className='f2 text-[1.3rem] tracking-tight font-semibold'>Driven by Purpose</h1>
                                                            <p className='text-[15px] f4 opacity-80 font-light tracking-tight leading-[22px] mt-3'>We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
                                             </div>
                                             <div className='w-[22%] h-full '>
                                             <svg width="100%" height="38%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z" fill="currentColor"></path>
<path d="M18 10H46L60 26L32 56L4 26L18 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M4 26H60" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
                                             </div>


                              </div>
               </div>
    </div>
  )
}

export default ThirdTest