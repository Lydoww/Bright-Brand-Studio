import data from './portfolioData';
import Cart from './Cart';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    if (currentIndex >= data.length - 1) return;
    setDirection(1);
    setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) return;
    setDirection(-1);
    setCurrentIndex(currentIndex - 1);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className='relative max-w-[1043px] mx-auto px-4 sm:px-8 lg:px-0'>
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className='absolute left-2 sm:left-4 lg:left-[-110px] top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center hover:scale-110 duration-300 ease-in-out transition-transform cursor-pointer bg-white/80 backdrop-blur-sm shadow-lg z-10'
      >
        <svg
          className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
      <div className='overflow-hidden'>
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Cart {...data[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={nextSlide}
        disabled={currentIndex >= data.length - 1}
        className='absolute right-2 sm:right-4 lg:right-[-110px] top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center hover:scale-110 duration-300 ease-in-out transition-transform cursor-pointer bg-white/80 backdrop-blur-sm shadow-lg z-10'
      >
        <svg
          className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselComponent;
