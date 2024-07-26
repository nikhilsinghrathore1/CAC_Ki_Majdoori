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
               <div className='w-[50%] h-full pt-[80vh]'>
                              <div className='w-[60%] border border-black h-[10%]'>

                              </div>
               </div>
    </div>
  )
}

export default ThirdTest