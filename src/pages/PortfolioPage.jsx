import CarouselComponent from '../components/portfolio/CarouselComponent';

const PortfolioPage = () => {
  return (
    <div className='min-h-screen bg-[#F5F0E9] py-12 sm:py-12 lg:py-16'>
      <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-center text-4xl! md:text-6xl! lg:text-7xl! font-gulfs text-[#5B4739] mb-8 sm:mb-12'>
          PORTFOLIO
        </h1>
        <div className='flex justify-center'>
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
