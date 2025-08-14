import React from 'react';

const FooterCompo = () => {
  return (
    <div className='bg-[var(--color-blue)] h-[80vh] overflow-hidden'>
      <div className='pt-8 px-12'>
        <div className='flex justify-between items-center'>
          <div>
            <div className='relative group cursor-pointer'>
              <div className='absolute bottom-3 left-1/2 w-0 h-1 bg-[var(--color-orange)] transform -translate-x-1/2 group-hover:w-full transition-all duration-800 ease-out'></div>
              <h1 className='text-[var(--color-cream)]! relative z-10'>
                Let's work together
              </h1>
            </div>
            <p className='text-[var(--color-cream)]! text-[23px]! max-w-[600px]'>
              Let's chat about your goals and how I can help your business make
              a bigger impact.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <button className='border border-[var(--color-cream)] text-[var(--color-cream)] px-4 py-2 rounded-2xl hover:bg-[var(--color-cream)] hover:text-[var(--color-blue)] transition-colors cursor-pointer'>
              LinkedIn
            </button>
            <button className=' border border-[var(--color-cream)] text-[var(--color-cream)] px-4 py-2 rounded-2xl hover:bg-[var(--color-cream)] hover:text-[var(--color-blue)] transition-colors cursor-pointer'>
              AirTasker
            </button>
          </div>
        </div>
        <div className='mt-40'>
          <p className='text-[var(--color-cream)]!'>© 2025</p>
          <p className='text-[var(--color-cream)]!'>
            Designed by Audrey and developed by Alexis Helm
          </p>
        </div>
      </div>
      <div className='w-full relative'>
        <h2 className='text-[var(--color-orange)]! absolute right-22 top-3 text-[64px]!'>
          Studio
        </h2>
        <h1 className='text-[var(--color-cream)]! absolute top-[-28px] text-[191px]!'>
          Bright Brand
        </h1>
      </div>
    </div>
  );
};

export default FooterCompo;
