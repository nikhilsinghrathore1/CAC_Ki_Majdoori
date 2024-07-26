import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const ThirdTest = () => {
  return (
    <div className='w-full h-[300vh] justify-between flex items-start px-10'>
               <div className='w-[41.9%]'>
                           <p className='f4 text-[1.1rem] font-normal leading-[1.78rem]'>Significo is a custom health software developer founded on the belief that technology can transform healthcare to put people first. We put humanity back at the center of healthcare with technology that simplifies complexity, accelerates capacity, and improves outcomes. </p>

                           <h1 className='f5 text-[3.3rem] mt-5 leading-[4rem]'>Human-Centric Health Software</h1>

                           <div className='w-[35%] h-[50px] border uppercase flex items-center gap-2'>our Solution <GoArrowUpRight/></div>
               </div>
               <div className='w-[50%] bg-blue-500 h-full'></div>
    </div>
  )
}

export default ThirdTest