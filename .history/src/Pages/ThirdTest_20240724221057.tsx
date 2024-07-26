import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const ThirdTest = () => {
  return (
    <div className='w-full h-[300vh] justify-between flex items-start px-10'>
               <div className='w-[41.9%] mt-40'>
                           <p className='f4 text-[1.1rem] font-normal leading-[1.78rem]'>Significo is a custom health software developer founded on the belief that technology can transform healthcare to put people first. We put humanity back at the center of healthcare with technology that simplifies complexity, accelerates capacity, and improves outcomes. </p>

                           <h1 className='f5 text-[3.3rem] mt-5 leading-[4rem]'>Human-Centric Health Software</h1>

                           <div className='w-[35%] h-[45px] mt-6 border font-semibold uppercase flex items-center gap-2 text-[15px] tracking-tight f4 justify-center'>
                              <h1 className='flex items-center gap-2'>our Solution <GoArrowUpRight className='text-[1.2rem] '/></h1>
                           </div>
               </div>
               <div className='w-[50%] bg-blue-500 h-full'></div>
    </div>
  )
}

export default ThirdTest