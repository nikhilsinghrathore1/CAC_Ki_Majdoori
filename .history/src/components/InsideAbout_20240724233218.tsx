import React from 'react'

const InsideAbout = ({mainText:string , para:string , svg}) => {
  return (
                 <>
                 <div className='w-[280px] h-full'>
               <h1 className='f2 text-[1.3rem] tracking-tight font-semibold'>{mainText}</h1>
               <p className='text-[15px]   f4 opacity-80 font-light tracking-tight leading-[22px] mt-3'>{para}</p>
</div>
<div className='w-[22%] h-full '>
{svg}
</div>
                 </>

  )
}

export default InsideAbout