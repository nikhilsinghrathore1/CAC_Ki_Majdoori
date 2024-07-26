import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Lfirst = () => {
  const [connecting, setConnecting] = useState(false);
  const [all, setAll] = useState(false);
  const [circle, setCircle] = useState(false);

  const handleMouseEnter = () => {
    setConnecting(true);
  };

  const handleMouseLeave = () => {
    setConnecting(false);
  };

  const letterVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className='w-full h-[100vh]'>
      <div className='w-full flexCenter flex-col h-full absolute top-0 left-0 uppercase text-[10rem]'>
        <div
          onMouseEnter={() => setConnecting(true)}
          onMouseLeave={() => setConnecting(false)}
          className='w-full flex items-center h-[30%]'>
          <p className='flex'>
            c
            {'onnecting'.split('').map((e, i) => (
              <span className='bg-red-300 mr-4 w-fit overflow-hidden' key={i}>
                <motion.span
                  variants={letterVariants}
                  key={i}
                  initial='initial'
                  animate={connecting ? 'animate' : 'initial'}
                  transition={{ duration: 0.5, delay: i * 0.04, type: 'spring' }}
                  className='block'>
                  {e}
                </motion.span>
              </span>
            ))}
          </p>
        </div>

        <div
          onMouseEnter={() => setAll(true)}
          onMouseLeave={() => setAll(false)}
          className='w-full flex items-center h-[30%]'>
          <p className='flex'>
            a
            {'ll'.split('').map((e, i) => (
              <span className='bg-red-300 mr-4 w-fit overflow-hidden' key={i}>
                <motion.span
                  variants={letterVariants}
                  key={i}
                  initial='initial'
                  animate={all ? 'animate' : 'initial'}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className='block'>
                  {e}
                </motion.span>
              </span>
            ))}
          </p>
        </div>

        <div
          onMouseEnter={() => setCircle(true)}
          onMouseLeave={() => setCircle(false)}
          className='w-full flex items-center h-[30%]'>
          <p className='flex'>
            c
            {'ircle'.split('').map((e, i) => (
              <span className='bg-red-300 mr-4 w-fit overflow-hidden' key={i}>
                <motion.span
                  variants={letterVariants}
                  key={i}
                  initial='initial'
                  animate={circle ? 'animate' : 'initial'}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className='block'>
                  {e}
                </motion.span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lfirst;
