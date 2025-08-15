import Carousel from '../components/services/Carousel';
import Marque from '../components/services/Marque';

const ServicesPage = () => {
  return (
    <main
      aria-labelledby='services-title'
      className='min-h-[calc(100vh-160px)] flex flex-col items-center text-center bg-[#F5F0E9] '
    >
      <Marque />
      <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
        <h1
          id='services-title'
          className='font-gulfs mt-6 sm:mt-10 text-4xl! md:text-6xl! lg:text-7xl! text-[#5B4739]'
        >
          SERVICES
        </h1>
        <h3 className='mt-4 sm:mt-6 font-light! max-w-3xl mx-auto text-lg sm:text-xl leading-7 text-[#5B4739] px-4'>
          I help australian purpose-led brands clarify their message, refine
          their strategy, and build stronger connections with their audience.
        </h3>
        <button
          type='button'
          className='mt-6 sm:mt-8 border rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold border-[var(--color-orange)] hover:bg-[var(--color-orange)] text-[var(--color-orange)] hover:scale-105 hover:text-white transition-all'
        >
          Let's Build your Ethical Brand
        </button>
      </div>
      <Carousel />
      <h3 className='text-[41px]! lg:text-[37px]! text-[var(--color-brown)] mb-12 sm:mb-16 lg:mb-20 max-w-4xl sm:max-w-5xl lg:max-w-6xl mt-8 leading-12 font-semibold! px-4 sm:px-6'>
        And all of this, rooted in{' '}
        <span className='italic'>ethical and engaged values</span>, to build
        genuine trust with conscious consumers
      </h3>
    </main>
  );
};

export default ServicesPage;
