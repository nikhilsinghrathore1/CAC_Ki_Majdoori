import { motion } from 'framer-motion'
import React, { useState } from 'react'

const image =[
  "https://maelanlemeur.com/wp-content/uploads/2023/01/Animal.e.webp"
]

const letterVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}
const letterVariants2 = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};
const letterVariants3 = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 , delay:4 },
};
const Landing = () => {
  

  const [img, setimg] = useState(image)
  const [connecting, setconnecting] = useState(false)
  const [all, setAll] = useState(false);
  const [circle, setCircle] = useState(false);
  return (
    <div className='w-full relative text-[#EEE9CC] h-[110vh] bg-[#1E1915]'>

      {/* this is the backgraund */}
      <div className='w-full h-full'>
        {/* first image */}
        <div className='w-full h-[23%] overflow-hidden relative bg-red-50'>
          <img className='w-full h-[110vh] object-cover scale-[100%] .trsni' style={{objectPosition:"50% 0%"}} src={img[0]} alt="not showing" />
          {/* <div className='w-full h-full bg-black absolute top-[0%] '></div> */}
        </div>
        {/* second image  */}
        <div className='w-full h-[22.5%] relative overflow-hidden'>
          <img className='w-full h-[110vh] scale-[100%] origin-center transi object-cover' style={{objectPosition:"50% 240%"}} src={img[0]} alt="not showing" />
          {/* <div className='w-full h-full bg-black absolute top-[0%] '></div> */}
        </div>

        <div className='w-full h-[22.9%] relative overflow-hidden'>
          <img className='w-full h-[110vh] object-cover' style={{objectPosition:"50% 480%"}} src={img[0]} alt="not showing" />
          {/* <div className='w-full h-full absolute bg-black top-[0%] '></div> */}
        </div>

        <div className='w-full h-[22.7%] relative overflow-hidden'>
          <img className='w-full h-[110vh] object-cover' style={{objectPosition:"50% 720%"}} src={img[0]} alt="not showing" />
          {/* <div className='w-full h-full bg-black absolute top-[0%] '></div> */}
        </div>
        

      </div>

    {/* this is the text portion  */}

    <div className='w-full h-full absolute z-30 top-0'>
      {/* this is the first container */}
        <div
         onMouseEnter={()=>setconnecting(true)}
         onMouseLeave={()=> setTimeout(() => {
          setconnecting(false) 
         }, 2000)}
        className='w-full border-b relative border-[1px] pl-5  pr-40 tracking-wide border-[#EEE9CC] h-[25vh] flex items-start justify-between'>
        <div 
       
             className='w-1/2 flex items-center text-[#cacaf6] text-[10rem]  mt-[53px] font-light leading-none f1 h-[30%]  '>
                      <p className=' flex'>
                        C
                               {"onnecting".split("").map((e, i) => (
                              <span className='w-fit  overflow-hidden ' key={i}><motion.span 
                              variants={letterVariants}
                              key={i}
                              initial="initial"
                              animate={connecting ? "animate" :"initial"}
                              transition={{ duration: 0.5, delay: i * 0.04, type:"spring" }}          
                               className='block py-2 '>{e}</motion.span></span>
                         ))}
                      </p>
        </div>
          <p className='text-[1.45rem] mt-4 font-light leading-none f1'>Design de niko</p>

          <div className='absolute z-10 top-[100%] bg-black  h-full w-full left-0'/>

        </div>

        {/* second container */}
        <div   
               onMouseEnter={() => setAll(true)}
               onMouseLeave={()=> setTimeout(() => {
                setAll(false) 
               }, 2000)}
           className='w-full f1 relative border-b border-[1px] pr-5 pl-40  border-[#EEE9CC] h-[25vh] flex items-start justify-between'>
          <p className='text-[1.45rem] mt-4 font-light leading-none f1'>Design d'objet</p>
          <div
        
          className="w-1/2 text-[#FFB347] text-[11rem] pt-20  flex justify-start pl-20 items-center h-[30%]"
        >
          <p className="flex items-center">
                                A
            {"ll".split("").map((e, i) => (
              <span className=" mr-4 w-fit overflow-hidden" key={i}>
                <motion.span
                  variants={letterVariants2}
                  initial="initial"
                  animate={all ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: i * 0.15  }}
                  className="block"
                >
                  {e}
                </motion.span>
              </span>
            ))}
          </p>
        </div>

        <div className='absolute z-10 top-0 bg-black h-full w-full left-0'/>


        </div>

        {/* third container */}

        <div
        onMouseEnter={() => setCircle(true)}
        onMouseLeave={()=> setTimeout(() => {
          setCircle(false) 
         }, 2000)}
         className='w-full border-b border-[1px] pl-5 pr-[440px] relative  border-[#EEE9CC] h-[25vh] flex items-start justify-between'>
        <div
          className="w-1/2 f1 text-[#FF6347] flex pt-20 text-[10rem] items-center h-[30%]"
        >
          <p className="flex">
            C
            {"ircle".split("").map((e, i) => (
              <span className=" mr-4 w-fit overflow-hidden" key={i}>
                <motion.span
                  variants={letterVariants3}
                  initial="initial"
                  animate={circle ? "animate" : "initial"}
                  transition={{ duration: 0.5, delay: i * 0.04 , type:"spring" }}
                  className="block"
                >
                  {e}
                </motion.span>
              </span>
            ))}
          </p>
        </div>
          <p className='text-[1.45rem] mt-4 font-light leading-none f1'>Design d'évènement</p>
          <div className='absolute z-10 top-0 bg-black h-full w-full left-0'/>

        </div>

        {/* fourth container */}

        <div className='w-full border-b border-[1px] pr-5 pl-8  border-[#EEE9CC] h-[25vh] flex items-start justify-between relative'>
          <p className='text-[1.45rem] mt-4 font-light leading-none f1'>Design web</p>

          <h1 className='capitalize text-[10.5rem] font-light leading-none f1'>Graphiste</h1>
              <div className='absolute z-10 top-0 bg-black h-full w-full left-0'/>
        </div>
    </div>

    </div>
  )
}

export default Landing