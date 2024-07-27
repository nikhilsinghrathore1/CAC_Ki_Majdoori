import gsap ,{ScrollTrigger} from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Sixth = () => {
  const MaintextDiv = useRef(null)

useEffect(() => {
    gsap.to(document.querySelectorAll(".textani"),{
      scrollTrigger:{
        trigger:MaintextDiv.current,
        start:"0 top",
        end:"bottom bottom",
        scrub:2,
        markers:true
      },
      opacity:1,
      stagger:0.2
    })

 
  
}, [])


  return (
    <div ref={MaintextDiv} className='w-full flex flex-col items-center justify-start h-[70vh]'>

                                             <p className=' w-[75%] text-center text-[1.3rem] leading-[2.1rem] f4'>{"Working with the Significo team has been such a pleasure! We took on a significant project to rebuild our entire platform and the team approached the project with our best interests in mind. They continue to prioritize the end user experience and offer amazing expertise in all the areas we lack internally. i would personally be lost without this team, thier ability to problem solve, thier openness to feedback and desire to build the product like it is thier own. Miranda Ernst Product Manager @ HealthCheck360".split("").map((e,i)=>{
                                              if(e == " "){
                                                return <span className='inline-block'> &nbsp;</span>
                                              }
                                              else{
                                                return <span className='inline-block opacity-25 textani'>{e}</span>
                                              }
                                            })}</p>

                                             <div className=' flex flex-col items-center mt-10 gap-1 justify-center'>
                                                            <div className='w-[6rem] h-[6rem] rounded-full bg-red-500'></div>
                                                            <p className='text-[1.2rem] f4 mt-2'>Miranda Ernst</p>
                                                            <p className='text-[12px] -mt-[7px] f2'>product Manager @ HealthCheck360</p>
                                             </div>

    </div>
  )
}

export default Sixth