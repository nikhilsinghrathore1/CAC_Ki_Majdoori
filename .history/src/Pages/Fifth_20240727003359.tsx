import gsap, { Power4 } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import InsideImage from '../components/InsideImage'

const Fifth = () => {

   const firstcir = useRef(null)
   const firstdiv = useRef(null)
   const secondcir = useRef(null)
   const seconddiv = useRef(null)
   const thirdcir = useRef(null)
   const thirddiv = useRef(null)
   const fourthcir = useRef(null)
   const fourthdiv = useRef(null)
   const fifthcir = useRef(null)
   const fifthdiv = useRef(null)
   const sixthcir = useRef(null)
   const sixthdiv = useRef(null)



   const show1 = (e)=>{
      console.log("working")
         gsap.to(firstcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
   
       
         })
   }
   const hide1 = ()=>{
      gsap.to(firstcir.current,{
         opacity:0
      })
   }
   const show2 = (e)=>{

         gsap.to(secondcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
   
       
         })
   }
   const hide2 = ()=>{
      gsap.to(secondcir.current,{
         opacity:0
      })
   }
   const show3 = (e)=>{

         gsap.to(thirdcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
   
       
         })
   }
   const hide3 = ()=>{
      gsap.to(thirdcir.current,{
         opacity:0
      })
   }
   const show4 = (e)=>{

         gsap.to(fourthcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
   
       
         })
   }
   const hide4 = ()=>{
      gsap.to(fourthcir.current,{
         opacity:0
      })
   }
   const show5 = (e)=>{

         gsap.to(fifthcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
   
       
         })
   }
   const hide5 = ()=>{
      gsap.to(fifthcir.current,{
         opacity:0
      })
   }
   const show6 = (e)=>{

         gsap.to(sixthcir.current,{
            opacity:1,
            x:gsap.utils.mapRange(0,window.innerWidth, -200 , 200 , e.clientX),
   
       
         })
   }
   const hide6 = ()=>{
      gsap.to(sixthcir.current,{
         opacity:0
      })
   }
useEffect(() => {
  
   
}, [])


  return (
    <div className='w-full px-14 h-[180vh] bg-white pt-40 '>
               <div className='w-full text-center'>
                              <h1 className='text-[3.4rem]  font-light f5'>Our Team</h1>
               </div>

               <div ref={firstdiv} 
                    onMouseMove={show1} 
                    onMouseLeave={hide1} 
               className='border-b-[1px] listelm border-black h-[11%] px-5  flex w-full relative  mt-[85px]'>
                                             <InsideImage ind={"01"} text={"Dr. Rick McCartney"} post={"CEO"}/>
                  <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={firstcir} className='w-[14rem] opacity-0 picture h-[14rem] rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div ref={seconddiv} 
                    onMouseMove={show2} 
                    onMouseLeave={hide2} 
                className='border-b-[1px] listelm border-black relative h-[11%] px-5  flex w-full '>
                                             <InsideImage ind={"02"} text={"Chris Koha"} post={"COO"}/>
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={secondcir} className='w-[14rem] picture  h-[14rem] rounded-full  bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div ref={thirddiv} 
                    onMouseMove={show3} 
                    onMouseLeave={hide3} 
                className='border-b-[1px] listelm border-black peer h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"03"} text={"Caroline Nieto"} post={"Chief product Officer"} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={thirdcir} className='w-[14rem] h-[14rem] picture  peer-hover:hidden rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div ref={fourthdiv} 
                    onMouseMove={show4} 
                    onMouseLeave={hide4}
               className='border-b-[1px] listelm border-black h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"04"} text={"Victor Albertos"} post={"CTO"} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={fourthcir} className='w-[14rem] picture h-[14rem]  rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div ref={fifthdiv} 
                    onMouseMove={show5} 
                    onMouseLeave={hide5} 
               className='border-b-[1px] listelm border-black h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"05"} text={"DR. Jana Schmidt"} post={"Chief inno"} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={fifthcir} className='w-[14rem] picture h-[14rem]  rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>

               <div  ref={sixthdiv} 
                    onMouseMove={show6} 
                    onMouseLeave={hide6} 
                className='border-b-[1px] listelm border-black h-[11%] px-5 relative  flex w-full '>
                                             <InsideImage ind={"06"} text={"Adrian Rubio"} post={""} />
                                             <div className='w-full h-0 transition-all bg-blue-500 absolute  z-[0] top-0 left-0'></div>
                  <div ref={sixthcir} className='w-[14rem] picture h-[14rem]  rounded-full bg-red-500 absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></div>

               </div>
    </div>
  )
}

export default Fifth