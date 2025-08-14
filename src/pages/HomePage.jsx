import Background from '../components/layout/Background';
import HomeHero from '../components/home/HomeHero';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';
import ReviewPage from './ReviewPage';
import FooterPage from './FooterPage';

const HomePage = () => {
  return (
    <>
      <Background>
        <div id='home' className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
          <HomeHero />
        </div>
      </Background>

      <section
        id='services'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <ServicesPage />
      </section>

      <section
        id='about'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <AboutPage />
      </section>

      <section
        id='portfolio'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <PortfolioPage />
      </section>
      <section
        id='review'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <ReviewPage />
      </section>

      <section
        id='Footer'
        className='scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24'
      >
        <FooterPage />
      </section>
    </>
  );
};

export default HomePage;
