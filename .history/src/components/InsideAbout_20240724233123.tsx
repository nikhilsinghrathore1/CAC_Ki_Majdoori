import React from 'react'

const InsideAbout = ({mainText , para , svg}) => {
  return (
                 <>
                 <div className='w-[280px] h-full'>
               <h1 className='f2 text-[1.3rem] tracking-tight font-semibold'>Driven by Purpose</h1>
               <p className='text-[15px]   f4 opacity-80 font-light tracking-tight leading-[22px] mt-3'>We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.</p>
</div>
<div className='w-[22%] h-full '>
{svg}
</div>
                 </>

  )
}

export default InsideAbout