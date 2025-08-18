import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import Audrey from '../assets/audrey.png';

const AboutPage = () => {
  return (
    <div className='bg-[var(--color-blue)]'>
      <div className='max-w-[1200px] mx-auto'>
        {/* Desktop Layout - ORIGINAL INTACT */}
        <div className='hidden lg:grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8 lg:gap-12 items-center'>
          <div className='lg:pl-12 xl:pl-20 pr-0 lg:pr-4'>
            <p className='text-[var(--color-cream)]! text-lg sm:text-xl'>
              Hi,{' '}
            </p>
            <div className='space-y-4 sm:space-y-6'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-cream)]!'>
                I'm Audrey
              </h1>

              <div className='space-y-4 sm:space-y-5 text-base sm:text-lg max-w-[600px]'>
                <p className='text-[var(--color-cream)]! text-justify leading-relaxed'>
                  After several years working in ethical fashion and brand
                  marketing — from co-founding a circular fashion brand to
                  leading strategy for sustainable concept stores — I realized
                  that most mission-driven brands don't need more content. They
                  need clarity.
                </p>

                <p className='text-[var(--color-cream)]! text-justify leading-relaxed'>
                  I created a strategy framework to help you root your vision,
                  align your voice, and grow without compromising your values.
                </p>
              </div>

              <button
                type='button'
                className='rounded-2xl border font-semibold border-[var(--color-cream)] px-4 sm:px-6 py-2 sm:py-3 mt-6 sm:mt-8 text-[var(--color-cream)] cursor-pointer text-sm sm:text-base hover:bg-[var(--color-cream)] hover:text-[var(--color-blue)] transition-colors'
                aria-label='Contact Audrey to work together'
              >
                Let's work together
              </button>
            </div>
          </div>

          <div className='flex justify-center lg:justify-end pr-0 lg:-mr-24 overflow-visible relative lg:right-16 xl:right-24'>
            <LazyLoadImage
              src={Audrey}
              alt='Audrey - Sustainable Brand Strategist'
              effect='opacity'
              width={500}
              height={500}
              className='rounded-lg object-cover w-full max-w-[400px] sm:max-w-[500px] h-auto'
              placeholderSrc={Audrey}
            />
          </div>
        </div>

        {/* Tablet Layout - NOUVELLE VERSION */}
        <div className='hidden md:block lg:hidden relative px-8 py-12'>
          <div className='max-w-[600px] [@media(max-width:870px)]:max-w-[400px] space-y-3'>
            <p className='text-[var(--color-cream)]! text-lg'>Hi,</p>

            <h1 className='text-4xl font-bold text-[var(--color-cream)]! leading-tight'>
              I'm Audrey
            </h1>

            <div className='space-y-5 text-lg leading-relaxed'>
              <p className='text-[var(--color-cream)]! text-justify'>
                After several years working in ethical fashion and brand
                marketing — from co-founding a circular fashion brand to leading
                strategy for sustainable concept stores — I realized that most
                mission-driven brands don't need more content. They need
                clarity.
              </p>

              <p className='text-[var(--color-cream)]!'>
                I created a strategy framework to help you root your vision,
                align your voice, and grow without commercialisant your values.
              </p>
            </div>

            <button
              type='button'
              className='rounded-2xl mt-4 border-2 border-[var(--color-cream)] px-6 py-3 text-[var(--color-cream)] font-semibold text-lg hover:bg-[var(--color-cream)] hover:text-[var(--color-blue)] transition-colors cursor-pointer'
              aria-label='Contact Audrey to work together'
            >
              Let's work together
            </button>
          </div>

          <div className='absolute right-10 bottom-[-6px] [@media(max-width:870px)]:bottom-[-5px]'>
            <LazyLoadImage
              src={Audrey}
              alt='Audrey - Sustainable Brand Strategist'
              effect='opacity'
              className='w-[280px] h-[350px] rounded-lg object-cover'
              placeholderSrc={Audrey}
            />
          </div>
        </div>

        {/* Mobile Layout - NOUVELLE VERSION */}
        <div className='md:hidden px-6 relative h-[85vh] flex flex-col'>
          <div className='flex flex-col justify-center max-w-[350px] pt-6'>
            <p className='text-[var(--color-cream)]! text-lg mb-2'>Hi,</p>

            <h1 className='text-[41px]! font-bold text-[var(--color-cream)]! mb-4 leading-tight'>
              I'm Audrey
            </h1>

            <div className='space-y-6 text-base leading-relaxed'>
              <p className='text-[var(--color-cream)]! text-justify'>
                After several years working in ethical fashion and brand
                marketing — from co-founding a circular fashion brand to leading
                strategy for sustainable concept stores — I realized that most
                mission-driven brands don't need more content. They need
                clarity.
              </p>

              <p className='text-[var(--color-cream)]! text-justify'>
                I created a strategy framework to help you root your vision,
                align your voice, and grow without compromising your values.
              </p>
            </div>

            <button
              type='button'
              className='mt-8 max-w-[180px] border border-[var(--color-cream)] text-[var(--color-cream)] px-4 py-2 rounded-2xl hover:bg-[var(--color-cream)] hover:text-[var(--color-blue)] transition-colors cursor-pointer'
              aria-label='Contact Audrey to work together'
            >
              Let's work together
            </button>
          </div>

          <div className='absolute right-5 bottom-[29px] transform translate-y-[35px]'>
            <LazyLoadImage
              src={Audrey}
              alt='Audrey - Sustainable Brand Strategist'
              effect='opacity'
              className='w-[200px] h-[250px] rounded-lg object-cover'
              placeholderSrc={Audrey}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;