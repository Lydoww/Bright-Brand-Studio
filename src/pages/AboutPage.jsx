import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import Audrey from '../assets/audrey.png';

const AboutPage = () => {
  return (
    <div className='min-h-auto sm:px-6 lg:px-8 bg-[var(--color-blue)] '>
      <div className='max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-8 items-center'>
          <div className='md:pl-12 lg:pl-20 pr-4'>
            <p className='text-[var(--color-cream)]!'>Hi, </p>
            <div className='space-y-4'>
              <h1 className='text-3xl font-semibold text-[var(--color-cream)]! '>
                I'm Audrey
              </h1>

              <div className='space-y-5 text-lg max-w-[600px]'>
                <p className='text-[var(--color-cream)]! text-justify'>
                  After several years working in ethical fashion and brand
                  marketing — from co-founding a circular fashion brand to
                  leading strategy for sustainable concept stores — I realized
                  that most mission-driven brands don't need more content. They
                  need clarity.
                </p>

                <p className='text-[var(--color-cream)]! text-justify'>
                  I created a strategy framework to help you root your vision,
                  align your voice, and grow without compromising your values.
                </p>
              </div>

              <button
                type='button'
                className='rounded-2xl border font-semibold border-[var(--color-cream)] px-6 py-3 mt-8 text-[var(--color-cream)] cursor-pointer text-sm hover:bg-[var(--color-cream)] hover:text-[var(--color-blue)] transition-colors'
                aria-label='Contact Audrey to work together'
              >
                Let's work together
              </button>
            </div>
          </div>

          <div className='flex pr-0 -mr-24 overflow-visible relative right-10 md:right-16 lg:right-24'>
            <LazyLoadImage
              src={Audrey}
              alt='Audrey - Sustainable Brand Strategist'
              effect='opacity'
              width={500}
              height={500}
              className='rounded-lg object-cover w-full max-w-[500px] h-auto'
              placeholderSrc={Audrey}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
